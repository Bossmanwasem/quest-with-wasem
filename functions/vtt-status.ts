// functions/vtt-status.ts (repo root for Cloudflare Pages Functions)
export const onRequest: PagesFunction = async () => {
  const base = 'https://play.questwithwasem.com';
  const paths = ['/', '/favicon.ico', '/']; // try multiple simple paths

  // 6s total per attempt
  const tryFetch = async (url: string) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 6000);
    try {
      const res = await fetch(url, {
        method: 'GET',          // some tunnels reject HEAD
        redirect: 'follow',     // follow redirects
        signal: controller.signal,
        headers: {
          'User-Agent': 'QuestWithWasem-Status/1.0',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
        },
        // @ts-ignore Cloudflare hint
        cf: { cacheTtl: 0 },
      });
      clearTimeout(timer);
      return res;
    } catch (e: any) {
      clearTimeout(timer);
      throw e;
    }
  };

  let lastStatus = 0;
  let lastError: string | undefined;
  let usedPath = '';

  for (const p of paths) {
    const url = base + p;
    usedPath = p;
    try {
      const res = await tryFetch(url);
      lastStatus = res.status;

      // Consider "online" for most 2xx/3xx and many 4xx since the host is reachable.
      // Treat Cloudflare "origin down" style codes as OFFLINE.
      const originDown = [521, 522, 523, 524, 525, 526];
      const online =
        (lastStatus >= 200 && lastStatus < 400) ||
        (lastStatus >= 400 && lastStatus < 500 && !originDown.includes(lastStatus));

      return new Response(
        JSON.stringify({ online, status: lastStatus, path: p }),
        { headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } }
      );
    } catch (err: any) {
      lastError = String(err?.message || err);
      // try next path
    }
  }

  // If every attempt threw, call it offline
  return new Response(
    JSON.stringify({ online: false, status: lastStatus, path: usedPath, error: lastError || 'network error' }),
    { headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } }
  );
};
