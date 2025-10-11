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
  const configuredUsername = import.meta.env.GM_HUB_USERNAME;
  const configuredPassword = import.meta.env.GM_HUB_PASSWORD;

  if (!configuredUsername || !configuredPassword) {
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

  const isValid =
    safeCompare(username, configuredUsername) && safeCompare(password, configuredPassword);

  if (!isValid) {
    return jsonResponse(401, {
      success: false,
      message: 'Those credentials are not recognized. Please try again.',
    });
  }

  return jsonResponse(200, {
    success: true,
  });
};
