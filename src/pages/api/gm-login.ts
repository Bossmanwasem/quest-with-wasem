import type { APIRoute } from 'astro';

export const prerender = false;

const jsonResponse = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });

const getPrivateEnv = (key: string): string | undefined => {
  const metaEnv = import.meta.env as Record<string, string | undefined>;
  const fromImportMeta = typeof metaEnv?.[key] === 'string' ? metaEnv[key] : undefined;

  if (fromImportMeta) {
    return fromImportMeta;
  }

  if (typeof process !== 'undefined' && typeof process.env?.[key] === 'string') {
    return process.env[key];
  }

  return undefined;
};

const parseAllowedIdentifiers = (raw: string | undefined): string[] => {
  if (!raw) {
    return [];
  }

  return raw
    .split(/[,\n]/)
    .map((value) => value.trim())
    .filter(Boolean);
};

const normalizeIdentifier = (value: string): string => value.trim().toLowerCase();

const safeCompare = (input: unknown, secret: string): boolean => {
  if (typeof input !== 'string') {
    return false;
  }

  if (input.length !== secret.length) {
    return false;
  }

  let mismatch = 0;
  for (let i = 0; i < secret.length; i += 1) {
    mismatch |= input.charCodeAt(i) ^ secret.charCodeAt(i);
  }

  return mismatch === 0;
};

export const POST: APIRoute = async ({ request }) => {
  const configuredPassword = getPrivateEnv('GM_HUB_PASSWORD');
  const configuredUsername = getPrivateEnv('GM_HUB_USERNAME');
  const configuredIdentifiers = parseAllowedIdentifiers(
    getPrivateEnv('GM_HUB_ALLOWED_IDENTIFIERS') ?? configuredUsername,
  );

  if (!configuredPassword || configuredIdentifiers.length === 0) {
    console.warn('GM Hub login attempted without configured credentials.');
    return jsonResponse(503, {
      success: false,
      message: 'Login is temporarily unavailable. Please contact Wasem for assistance.',
    });
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch (error) {
    console.error('Failed to parse GM Hub login payload', error);
    return jsonResponse(400, {
      success: false,
      message: 'Invalid request payload.',
    });
  }

  if (
    typeof payload !== 'object' ||
    payload === null ||
    !('username' in payload) ||
    !('password' in payload)
  ) {
    return jsonResponse(400, {
      success: false,
      message: 'Invalid request payload.',
    });
  }

  const { username, password } = payload as { username: unknown; password: unknown };

  const providedIdentifier = typeof username === 'string' ? normalizeIdentifier(username) : undefined;
  const providedPassword = typeof password === 'string' ? password : undefined;

  const isIdentifierValid =
    typeof providedIdentifier === 'string' &&
    configuredIdentifiers.some((identifier) => safeCompare(providedIdentifier, normalizeIdentifier(identifier)));

  const isPasswordValid = typeof providedPassword === 'string' && safeCompare(providedPassword, configuredPassword);

  if (!isIdentifierValid || !isPasswordValid) {
    return jsonResponse(401, {
      success: false,
      message: 'Those credentials are not recognized. Please try again.',
    });
  }

  return jsonResponse(200, {
    success: true,
  });
};
