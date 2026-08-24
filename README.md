# Robotics Playground

Robotics Playground ([ceeoinnovations.org/RoboticsPlayground](https://www.ceeoinnovations.org/RoboticsPlayground/)) is a Tufts CEEO library of placemat-style activity instructions for robotics classes.

The site is built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages. Content (placemats and playlists) is added by editing plain markdown files in this repo, you don't need to touch any HTML or CSS to add content.

## How the site is put together

- **Homepage** — `index.markdown`, rendered through `_layouts/home.html`. Pulls in every file in `_playlists/` and lists them as cards.
- **Playlist pages** — one file per playlist in `_playlists/`, rendered through `_layouts/post.html` → `_layouts/wrapper.html`.
- **Look and feel** — all custom styling lives in `web/css/playground_style.css`. This file was reorganized in 2026: the site used to load 8 separate stylesheets (including a full unused Bootstrap theme file), which made styling changes unpredictable. Brand colors, fonts, and spacing now live as CSS variables near the top of `playground_style.css`, and the site-specific overrides are grouped in labeled sections toward the bottom of the same file. If you need to change a color or font going forward, start there.
- **Everything else** (`web/css/style.css`, `bootstrap.min.css`, etc.) is legacy template CSS kept for backward compatibility with older pages. Don't edit those directly, add new rules to `playground_style.css` instead, since it loads last and will win.

## Adding a placemat to the library

Placemats are stored on the Robotics Playground shared Google Drive. The placemats are displayed in an [Awesome Table](https://app.awesome-table.com/-ME0YM1NkC8JwlHj2VS9/view), which is a Google Extension. The table is populated from the [REAL ROBOTICS PLAYGROUND Google Sheet](https://docs.google.com/spreadsheets/d/1pCT-nGqTpvs494EhFhReZzWjYg9PRH34G4emRQT8bPg/edit?usp=drive_link). Contact lynne.ramsey@tufts.edu for access. You will need to use your tuftsceeo.org Google account.

1. Go to the [Placemats folder](https://drive.google.com/drive/folders/1l64jGsMP18SlPqkLTCK_ZcHTwIkhYyU4?usp=drive_link) in the **Robotics Playground** shared Google Drive. Add your placemat file(s) to the folder.

2. Download the first page of your placemat as a JPG or PNG. Use the Download command in the Google Slides menu. Do not take a screenshot. Upload the image to the [CEEO shared Box account](https://tufts.box.com/s/3nsgrfawutp7anr2jbigaagx7eylm1qa). Contact lynne.ramsey@tufts.edu for access.

3. Create a shared link for your image. **THIS MUST LINK TO AN IMAGE FILE (eg. .png or .jpg), not a Box link. There are two steps:
Click on Share and toggle on Shared Link.<br>

<img width="510" height="428" alt="Screenshot 2026-08-24 at 1 53 10 PM" src="https://github.com/user-attachments/assets/b1b94f35-f8f4-411b-926d-4c1c09f82375" />

Then click on Link Settings. Use that URL

<img width="522" height="497" alt="Screenshot 2026-08-24 at 1 53 21 PM" src="https://github.com/user-attachments/assets/faa6d0ad-3c79-49ed-9b31-c1e896f437cb" />

5. Open the [REAL ROBOTICS PLAYGROUND Google Sheet](https://docs.google.com/spreadsheets/d/1pCT-nGqTpvs494EhFhReZzWjYg9PRH34G4emRQT8bPg/edit?usp=drive_link) and fill out one row per placemat (even if it's also part of a playlist, it still needs its own row here):
   - **Name** — the placemat title
   - **Details** — the prompt
   - **Descriptions** — leave blank, it's a formula and fills itself in (drag it down from the row above if it doesn't)
   - One column per coding language (Word Blocks, Python, etc.) — link to the placemat file. Make sure sharing is set to "Anyone with the link can view."
   - **Big Img** — a link to an image of the placemat's first page saved on Box. **Link must end in .png or .jpg.** 
   - **Level / Skill / Theme / Platform** — pick from the dropdowns; this feeds the "Descriptions" formula

6. Repeat for any other placemats.

7. Done — it'll show up in the library on the site automatically, no code changes needed.

## Adding a playlist

1. In the [RoboticsPlayground GitHub repo](https://github.com/ceeoinnovations/RoboticsPlayground), open the [Playlist Template](https://github.com/ceeoinnovations/RoboticsPlayground/blob/Test/PlaylistTemplate.md), click **Raw**, then save the page as a `.md` file named after your playlist.
2. Add any images (cover photo, placemat screenshots) to [`/web/img/`](https://github.com/ceeoinnovations/RoboticsPlayground/tree/Test/web/img) in the repo.
3. Fill in the heading section of your copy of the template with your playlist's info.
4. For each placemat in the playlist:
   - **Title** — the placemat's name
   - **Description** — the prompt, or context for where it fits in the playlist
   - **Link** — should point to the placemat file in the [Placemats folder](https://drive.google.com/drive/folders/13Zz4ncFkHRKEb1KTJDL7EWoM0WHAnaK3) in the Engineering with Bricks shared drive (sharing set to "Anyone with the link can view"). Keep `[Placemat Link]` in brackets and put your URL in the parentheses right after it.
   - Add the filename of your screenshot (from step 2) to the `/web/img/` line
   - **Gallery** (optional) — photos or embedded videos. For a video: upload to Drive, set sharing to "Anyone with the link can view," open the preview, click the three dots → "Open in new window" → three dots again → "Embed item," then copy that embed code. Up to three per playlist. If you don't have extra media, just delete this section.
5. To add more placemats to the same playlist, copy the whole block (including the `===` lines above and below it) and repeat.
6. Upload your finished `.md` file into [`_playlists`](https://github.com/ceeoinnovations/RoboticsPlayground/tree/Test/_playlists) on GitHub (Add file → Upload files). You can still edit it afterward with the pencil icon on the file's page.
7. Done — it'll appear on the [Robotics Playground homepage](https://www.ceeoinnovations.org/RoboticsPlayground/) once GitHub Pages rebuilds (usually a minute or two).
