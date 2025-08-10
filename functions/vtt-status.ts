export const onRequest: PagesFunction = async () => {
  const target = 'https://play.questwithwasem.com/';

  // 5s timeout to be safe
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(target, {
      method: 'GET',               // <-- use GET (some servers 405 on HEAD)
      redirect: 'follow',          // <-- follow 3xx redirects
      signal: controller.signal,
      headers: {
        // Some hosts behave differently with no UA
        'User-Agent': 'QuestWithWasem-Status/1.0 (+status-check)',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
      },
      // @ts-ignore Cloudflare-specific hint to avoid caching at edge
      cf: { cacheTtl: 0 },
    });
    clearTimeout(timer);

    // Treat 2xx and 3xx as "online"
    const online = res.status >= 200 && res.status < 400;

    return new Response(JSON.stringify({ online, status: res.status }), {
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
    });
  } catch {
    clearTimeout(timer);
    return new Response(JSON.stringify({ online: false, status: 0 }), {
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
    });
  }
};
