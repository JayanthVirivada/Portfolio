# Portfolio — Jayanth Kumar Virivada

A single-page portfolio: dark, glassmorphic, built from your resume + LinkedIn experience.

## Files

- `index.html` — all page content (edit text here)
- `style.css` — all styling (colors, layout, fonts)
- `script.js` — mobile menu + the animated numbers in the hero panel

## Run it in VS Code

1. Open this folder in VS Code (`File → Open Folder...`)
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel, if you don't have it
3. Right-click `index.html` → **Open with Live Server**
4. The page opens in your browser and auto-refreshes as you edit

(No build step, no npm install — it's plain HTML/CSS/JS.)

## Easy things to customize

- **Colors** — top of `style.css`, in the `:root { ... }` block. `--cyan` and `--indigo` are the two accent colors.
- **Fonts** — also in `:root`: `--font-display` (headings) and `--font-body` (paragraphs). Loaded from Google Fonts in the `<head>` of `index.html`.
- **Text** — everything in `index.html` is in plain English inside each `<section>`. Section order: Hero → About → Experience → Projects → Skills → Education & Certifications → Contact.
- **Add a project** — copy one `<article class="project">...</article>` block in the Projects section and edit it.
- **Add an experience entry** — copy one `<article class="timeline__item">...</article>` block in the Experience section.

## Before you publish

- Swap `mailto:` and `tel:` links in the Contact section if your email/phone change
- Double check the LinkedIn URL is your public profile link, not an internal `/edit/...` link
- Consider adding a resume PDF download link (`<a href="resume.pdf" download>Download resume</a>`) once you drop a PDF into this folder

## Deploying it for free

Any static host works since there's no backend:
- **GitHub Pages** — push this folder to a repo, enable Pages in repo settings
- **Netlify / Vercel** — drag-and-drop the folder in their dashboard
