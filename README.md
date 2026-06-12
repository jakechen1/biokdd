# BIOKDD homepage — biokdd.org

This is the source code for the [biokdd.org](https://biokdd.org/) homepage — the landing page for the International Workshop on Data Mining in Bioinformatics, held annually with ACM SIGKDD since 2001.

The page is a **single self-contained HTML file** with year data factored out into a small JavaScript module. There is no build step, no framework, and no server-side code. Edits are instant.

---

## Quick links

- **Live site:** https://biokdd.org/
- **Current year:** https://biokdd.org/biokdd26/  (managed in its own per-year folder, not here)
- **LinkedIn group:** https://www.linkedin.com/groups/3825744/
- **CACM Perspective paper** (25-year retrospective): see `../harness/output_2026/` in the workshop archive

---

## Folder structure

```
biokdd/
├── README.md          ← this file
├── index.html         ← the homepage (HTML + inline CSS + inline JS)
├── data/
│   └── years.js       ← year-by-year data — EDIT THIS to add a new edition
└── .gitignore
```

That's it. Everything else (typography, color palette, layout, animations, the inline SVG illustrations) lives in `index.html`.

---

## How it deploys

The repo is connected to **Cloudflare Pages**. Every push to `main` triggers an automatic redeploy that completes in roughly 30 seconds. Branch pushes get a preview URL that's safe to share with co-chairs for review.

```
local edit → git push origin main → Cloudflare Pages rebuild → biokdd.org live
```

There is no manual upload step.

---

## How to add a new BIOKDD edition (the most common update)

When BIOKDD 2027 (or any future year) is announced, only **one file** needs to change.

### Step 1 — Edit `data/years.js`

Open `data/years.js` in any text editor. Find the last entry (currently 2026), make two changes:

1. Remove `current:true` from the previous year's line (e.g. 2026 once 2027 is announced).
2. Append a new entry at the end of the array:

```js
{y:2027, n:'26th', loc:'TBD',
 theme:'Theme tagline for BIOKDD 2027',
 phase:4, url:'https://biokdd.org/biokdd27/', current:true},
```

Each field:

| Field | What it means | Example |
|---|---|---|
| `y` | The 4-digit calendar year | `2027` |
| `n` | Edition ordinal | `'26th'` |
| `loc` | Where the workshop is held | `'Singapore'` |
| `theme` | Short theme/tagline shown on the year card | `'Embodied AI for biology'` |
| `phase` | Which era this year belongs to: 1, 2, 3, or 4 | `4` |
| `url` | Workshop subpage on biokdd.org | `'https://biokdd.org/biokdd27/'` |
| `current` | Mark the upcoming edition (set on ONE year only) | `true` |
| `skip` | Mark a year the workshop was NOT held | `true` |

### Step 2 — (Optional) Update the BIOKDD 2026 → 2027 marketing copy

If you also want to swap out the front-page "BIOKDD 2026 — Digital Twins" banner for the new year, open `index.html` and search for `BIOKDD 2026` — you'll find the welcome message, the `#this-year` section, and the cover-card SVG. Replace the theme name, dates, and CTA text. (For most maintenance, you can leave this alone until the workshop is actively recruiting attendees.)

### Step 3 — Commit and push

```bash
git add data/years.js
git commit -m "Add BIOKDD 2027 (Singapore)"
git push origin main
```

Within about 30 seconds the new year card appears at https://biokdd.org/.

---

## How to update other things

### Stats numbers (papers, keynotes, etc.)

Search `index.html` for `<!-- ============ STATS ============ -->`. The five `.stat` blocks are right there.

### Welcome message

Search `index.html` for `<!-- ============ WELCOME ============ -->`. The two paragraphs and signature are plain HTML.

### Phase descriptions

Search `index.html` for `<!-- ============ PHASES ============ -->`. Each of the four cards has its own block with a heading, paragraph, and tag chips.

### Organizer cards (steering committee bio blocks)

Search `index.html` for `<!-- ============ ORGANIZERS ============ -->`. Three person cards with role, affiliation, bio, and profile link.

### Color palette

Defined at the top of the `<style>` block as CSS custom properties (`--ink`, `--brand`, `--p1` through `--p4`, etc.). Change the value in one place and the whole page restyles.

---

## How to preview locally before pushing

The page works opened directly from disk — no local server needed:

```bash
open index.html         # macOS
xdg-open index.html     # Linux
start index.html        # Windows
```

If you'd rather run a local server (some browsers restrict `file://` for fetched scripts):

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

---

## How to use AI tools (Claude, Cowork, Codex, etc.) on this repo

The repo is intentionally designed to be friendly to LLM-driven edits:

1. **One file per concern.** `index.html` for layout, `data/years.js` for data. No build step that an LLM has to learn.
2. **Sections are flagged with HTML comments** (`<!-- ============ STATS ============ -->`, etc.) so an LLM can locate them by string-search.
3. **Year data is a flat array of objects.** Adding a new year is one append. An LLM can do this in a single edit.
4. **No transpilation.** What's in the repo is what's served. There is no `dist/` folder.

A representative prompt to Claude:

> Open `data/years.js`, add a new entry for BIOKDD 2027 in Singapore with theme "Embodied AI for biology," mark it as current, and remove the `current:true` flag from 2026. Then commit with the message "Add BIOKDD 2027" and push to main.

That's a one-shot edit.

---

## Branching workflow (for chairs who want a review step)

The simplest workflow is direct-to-main, which is fine for a chair acting alone. If you want a co-chair to review changes first:

```bash
git checkout -b biokdd-2027
# … edit data/years.js …
git commit -am "Add BIOKDD 2027"
git push origin biokdd-2027
```

Cloudflare Pages will generate a preview URL like `biokdd-2027.biokdd.pages.dev`. Share it with co-chairs. When they approve, open a Pull Request on GitHub and merge to `main`. Live in 30 seconds.

---

## Per-year subpages (`biokdd.org/biokddXX/`)

The individual year subpages — `biokdd.org/biokdd17/`, `biokdd26/`, etc. — are **not** part of this repo. They live on the SiteGround hosting and are managed by each year's program chairs separately. The homepage only links to them.

If you want to migrate per-year subpages into this repo in the future, create folders like `biokdd27/` at the top level and they'll be served at `biokdd.org/biokdd27/` automatically.

---

## Credits

- Original homepage redesign — June 2026, with assistance from Claude (Anthropic).
- 25-year workshop history — reconstructed from the BIOKDD archive, SIGKDD Explorations editorials, TCBB special-issue introductions, and the personal records of the founding co-chairs.
- See the CACM Perspective paper *"KDD for Science at 25"* for the full historical analysis.

---

## License

The textual content of this homepage is © 2001–2026 the BIOKDD workshop. The code (HTML/CSS/JS scaffolding) is released under the **MIT License** — feel free to reuse the structure for similar long-running workshop sites.

---

## Maintainer contact

- **Jake Y. Chen** — `jakechen@uab.edu` — [aimed-lab.org](https://www.aimed-lab.org/)
- **Da Yan** — Indiana University Luddy School
- **Mohammed J. Zaki** — Rensselaer Polytechnic Institute · founding chair

For technical issues with the site itself, open a GitHub issue on this repository.
