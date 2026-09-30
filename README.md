# Goodnest website

Static website ready for Cloudflare Pages. The published folder is `dist`.

## Publish to `goodnest.pages.dev`

1. Create a new GitHub repository and upload this project, including the `dist` folder.
2. In Cloudflare Dashboard, open **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select the repository. For the build settings, use **Framework preset: None**, leave **Build command** empty, and set **Build output directory** to `dist`.
4. Deploy. Cloudflare will issue a URL in the format `https://<project-name>.pages.dev`. Set the project name to `goodnest` if it is available.

## Before public launch

- Add the supplied logo and brand palette, replacing the text mark in `dist/index.html`.
- Provide one iCal/ICS calendar export URL per property, or access to a channel manager, before enabling live availability.
- Replace AI profile photos and placeholder leadership names with approved profiles.
- Verify each direct chat link on the intended phone before sharing the site.
