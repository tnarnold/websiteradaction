# websiteradaction
Website Radaction

## Deployment

To deploy this project to Cloudflare Pages, run:

```bash
npm run deploy
```

This command will build the project and deploy the `dist` folder to Cloudflare Pages.

Alternatively, you can run:

```bash
npx wrangler pages deploy dist
```

> **Note:** Do not run `wrangler deploy` (without `pages`), as that command is for Cloudflare Workers.
