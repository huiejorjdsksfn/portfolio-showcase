export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load | Isaac Njoroge</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <style>
      :root {
        --bg: oklch(0.16 0.02 280);
        --fg: oklch(0.97 0.01 90);
        --primary: oklch(0.78 0.16 75);
        --primary-fg: oklch(0.18 0.03 280);
        --muted: oklch(0.72 0.02 90);
        --card: oklch(0.21 0.03 280);
        --border: oklch(0.32 0.03 282);
      }
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html, body {
        min-height: 100vh;
        background: var(--bg);
        color: var(--fg);
        font-family: system-ui, -apple-system, sans-serif;
        -webkit-font-smoothing: antialiased;
      }
      body {
        display: flex; align-items: center; justify-content: center;
        padding: 2rem; text-align: center;
        background:
          radial-gradient(at 20% 20%, oklch(0.32 0.12 290 / 0.3) 0%, transparent 50%),
          var(--bg);
      }
      .card { max-width: 26rem; width: 100%; }
      h1 { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; letter-spacing: -0.02em; }
      p { color: var(--muted); line-height: 1.6; margin-bottom: 2rem; }
      .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
      .btn-primary {
        display: inline-flex; align-items: center; gap: 0.4rem;
        padding: 0.625rem 1.5rem; border-radius: 9999px;
        background: var(--primary); color: var(--primary-fg);
        font-size: 0.875rem; font-weight: 600; cursor: pointer;
        text-decoration: none; border: none; transition: opacity 0.2s;
      }
      .btn-primary:hover { opacity: 0.88; }
      .btn-ghost {
        display: inline-flex; align-items: center;
        padding: 0.625rem 1.5rem; border-radius: 9999px;
        border: 1px solid var(--border); color: var(--fg);
        font-size: 0.875rem; font-weight: 500;
        text-decoration: none; background: transparent; transition: background 0.2s;
      }
      .btn-ghost:hover { background: var(--card); }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="btn-primary" onclick="location.reload()">Try again</button>
        <a class="btn-ghost" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
