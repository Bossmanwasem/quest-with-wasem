import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const foundryUrl = 'https://play.questwithwasem.com';

  try {
    // Try to fetch Foundry’s root page
    const res = await fetch(foundryUrl, { method: 'HEAD', timeout: 5000 });

    // If Foundry is up, redirect
    if (res.ok) {
      return new Response(null, {
        status: 302,
        headers: { Location: foundryUrl }
      });
    }
  } catch (err) {
    // Server unreachable or times out
  }

  // Offline fallback HTML
  const offlineHTML = `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Game Offline</title>
      <style>
        body {
          background: #0b0f1a;
          color: white;
          font-family: ui-rounded, system-ui, -apple-system, sans-serif;
          text-align: center;
          padding: 60px;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        p {
          font-size: 1.2rem;
          opacity: 0.9;
        }
        a {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 20px;
          background: #5b2b82;
          color: white;
          text-decoration: none;
          border-radius: 6px;
        }
        a:hover {
          background: #7d42aa;
        }
      </style>
    </head>
    <body>
      <h1>🎲 Game is currently offline</h1>
      <p>The virtual table top server is not running right now.<br/>Please check back later!</p>
      <a href="/">Return to Home</a>
    </body>
    </html>
  `;

  return new Response(offlineHTML, {
    status: 200,
    headers: { 'Content-Type': 'text/html' }
  });
};
