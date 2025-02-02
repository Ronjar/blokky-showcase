# Casey
Casey is a CMS for showcasing projects that can be configured in no time.

- **Easy configuration**: Just edit two YAML files and add some pictures.
- **Markdown support**: Need additional pages like a Privacy Policy or TOS? Just add `.md` files.
- **Static deployment**: Deploy your site as a static website using Vercel, Netlify, or GitHub Pages.
- **Responsive design**: Supports *almost* all browsers, screen resolutions, and aspect ratios.
- **Small build size**: Only the essentials are included—no bulky admin interface you’ll only use once for configuration.

**Important**
Casey is still under development (you might call it beta; Ubisoft would ship it). Apologies for any issues you encounter. Feel free to open an issue, and I’ll try to fix it—or better yet, submit a pull request, and I’ll let you know how awesome your contribution is!

## Installation

Clone the repository and install dependencies:
```bash
$ git clone https://github.com/ronjar/casey.git
$ cd casey
$ npm install
```

## Usage
After installation, navigate to the `/src/site/` directory—this is where the magic happens. You'll find three subdirectories:

- **config**: Contains two configuration files:
  - `app.yml`: Configure app-specific details like name, store links, and features.
  - `company.yml`: Define your company/studio name, logo, and additional links.
- **img**: Add images required for the main mockup screen or markdown files. One predefined image name is:
  - `main.png`: The mockup screen displayed on the main page.
- **site**: Add `.md` files here to make them available at `*url*/sites/*filename*`. One predefined file is:
  - `Main.md`: Renders content appended to the bottom of the main page, beneath the features.

#### Sites
Every `.md` file in the `site` directory requires the following frontmatter:
```yaml
---
title: Title # (Required) Site title for SEO
description: Description # (Required) Site description for SEO
date: '2025-01-25' # (Required) Last edit date for SEO
published: true # (Required) Determines if the page is accessible
header: true # (Optional) Include this page in the header menu
footer: true # (Optional) Include this page in the footer menu
---
```

The footer menu includes a license link by default. You can remove it or relocate it to your About, Imprint, etc., page. However, make sure to keep the licenses accessible from somewhere—many hardworking individuals laid the foundation for this project. Also it's legally required.

While editing your configuration, run:
```bash
$ npm run dev
```
to preview your changes in real-time.

## Building
To generate a static version of your site, run:
```bash
$ npm run build
```
The static files will be created in the `/build` directory. You can preview the build with:
```bash
$ npm run preview
```

## Deployment
The output directory is ready for use with GitHub Pages, Cloudflare Pages, Netlify, and similar platforms.  
This repository is pre-configured to use GitHub Pages via Actions (no extra branch or plugin required).  
Simply commit your changes, and the Action will publish your site on GitHub Pages.

## Additional Features / Roadmap
Planned future features include:
- Improved mockup UX
- Enhanced responsive design
- A shareable link (+ QR Code) that direct users to the appropriate platform for their device
- Support for more "store types" like GitHub, Steam, etc.
- Reduced project size (e.g., by optimizing license texts)

As this is a side project, I don't intend to put too much time into it. If you have ideas, open an issue, write me a Mail or best: open a pull request