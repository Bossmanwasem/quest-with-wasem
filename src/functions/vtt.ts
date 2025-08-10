// Cloudflare Pages Function
// File: functions/vtt.ts
export const onRequest: PagesFunction = async ({ request }) => {
  const target = 'https://play.questwithwasem.com/';

  // 3s timeout to avoid hanging
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 3000);

  try {
    const res = await fetch(target, {
      method: 'HEAD', // fast check
      signal: controller.signal,
    });
    clearTimeout(t);

    if (res.ok) {
      // Foundry is reachable — send them there
      return Response.redirect(target, 302);
    }

    // Non-OK status → show offline page
    return offlinePage(res.status);
  } catch (err) {
    clearTimeout(t);
    // Network error / timeout → offline page
    return offlinePage();
  }
};

function offlinePage(status?: number) {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Table Top Offline</title>
<style>
  :root{ --bg:#0b0f1a; --ink:#fff; --muted:#cfd5ff; --panel:rgba(0,0,0,.55); }
  html,body{height:100%}
  body{margin:0;background:var(--bg) url('/Mountains.png') center/cover fixed no-repeat; color:var(--ink);
       font:16px/1.6 system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;}
  .wrap{max-width:780px;margin:8vh auto;padding:24px}
  .card{background:var(--panel);border:1px solid rgba(255,255,255,.18);border-radius:18px;padding:24px 22px;}
  h1{margin:0 0 8px;font-size:clamp(24px,4vw,36px)}
  p{margin:8px 0;color:var(--muted)}
  .row{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}
  a.btn{display:inline-block;padding:10px 14px;border-radius:10px;text-decoration:none;border:1px solid rgba(255,255,255,.2);color:#fff;background:rgba(255,255,255,.08)}
  a.btn:hover{border-color:#fff;background:rgba(255,255,255,.16)}
  .try{opacity:.9}
  .meta{opacity:.7;font-size:13px;margin-top:8px}
</style>
</head>
<body>
  <div class="wrap">
    <div class="card">
      <h1>Game Table is Offline</h1>
      <p>The virtual table top isn’t reachable right now. It’s usually because the home host/tunnel isn’t open.</p>
      <p class="try">Try again in a few minutes, or message the DM if this persists.</p>
      <div class="row">
        <a class="btn" href="/">← Back to site</a>
        <a class="btn" href="/vtt">Retry</a>
      </div>
      <div class="meta">Status: ${status ?? 'no response'}</div>
    </div>
  </div>
</body>
</html>`;
  return new Response(html, {
    status: 200,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}
