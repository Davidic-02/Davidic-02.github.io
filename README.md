# David O. Adekoya: portfolio

Static site, no build step. All content is in `assets/data.js`.

## Preview locally
    python3 -m http.server 8000   # then open http://localhost:8000

## Update content
- New credential: add an object to `certifications` in `assets/data.js`.
- Add `url` only after you have opened the link yourself. Leave it `""` and the button is hidden.
- Certificate PDFs go in a `certificates/` folder; set `file: "certificates/name.pdf"`.
- Put your CV PDF in `assets/` and set `person.cvUrl`.

## Free hosting (GitHub Pages)
1. Create a GitHub repo named `<username>.github.io` and push this folder.
2. Settings > Pages > deploy from `main` branch, root.
3. Your URL is `https://<username>.github.io`. Use it on your CV.

## Before publishing: confirm
- Exact course titles and completion dates (blank dates are hidden, not shown as "to confirm").
- J. FAITH acceptance details and whether the triage manuscript is still under review.
- Exact titles and dates for the two Lagos State internships and the FUTA research-assistant role.
- Email, LinkedIn, GitHub and ORCID in `contact`.
- FUTA official award date before calling yourself a graduate.
