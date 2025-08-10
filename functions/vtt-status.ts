// Cloudflare Pages Function at /vtt-status
export const onRequest: PagesFunction = async () => {
  const target = 'https://play.questwithwasem.com/';

  // 3s timeout so the UI stays snappy
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 3000);

  try {
    const res = await fetch(target, { method: 'HEAD', signal: controller.signal });
    clearTimeout(timer);
    const online = res.ok;
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
