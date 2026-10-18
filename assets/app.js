(function () {
  const S = window.SITE;

  // Tiny DOM helper: all content is inserted as text, never as HTML.
  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === false || v == null || v === "") continue;
      if (k === "class") el.className = v;
      else el.setAttribute(k, v);
    }
    for (const kid of kids.flat()) {
      if (kid == null || kid === false) continue;
      el.append(kid.nodeType ? kid : document.createTextNode(kid));
    }
    return el;
  }

  function fmtDate(d) {
    if (!d) return "";
    const p = d.split("-").map(Number);
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return p.length === 3 ? `${p[2]} ${months[p[1]-1]} ${p[0]}` : `${months[p[1]-1]} ${p[0]}`;
  }

  // ---------- chrome ----------
  const pages = [
    ["index.html", "Home"], ["certifications.html", "Certifications"], ["research.html", "Research"],
    ["publications.html", "Publications"], ["experience.html", "Experience"], ["contact.html", "Contact"],
  ];
  const current = location.pathname.split("/").pop() || "index.html";
  document.body.prepend(
    h("header", { class: "site" }, h("div", { class: "wrap" },
      h("a", { class: "brand", href: "index.html" }, S.person.name),
      h("nav", { "aria-label": "Main" }, pages.map(([href, label]) =>
        h("a", { href, "aria-current": href === current ? "page" : false }, label)))))
  );
  const c0 = S.contact;
  const flinks = [["LinkedIn", c0.linkedin], ["GitHub", c0.github], ["ORCID", c0.orcid], ["Email", c0.email && "mailto:" + c0.email]]
    .filter((l) => l[1]).map(([t, u]) => h("a", { href: u, target: u.startsWith("mailto") ? false : "_blank", rel: "noopener" }, t));
  document.body.prepend(h("a", { class: "skip", href: "#app" }, "Skip to content"));
  document.body.append(
    h("footer", { class: "site" }, h("div", { class: "wrap" },
      h("span", {}, `© ${new Date().getFullYear()} ${S.person.name}. Credentials link to verification only where confirmed.`),
      h("span", {}, flinks)))
  );

  const root = document.getElementById("app");
  const page = root && root.dataset.page;

  // ---------- helpers ----------
  const chips = (arr) => h("ul", { class: "chips" }, arr.map((t) => h("li", { class: "chip" }, t)));
  const section = (title, ...kids) => h("section", {}, h("h2", {}, title), ...kids);

  function certCard(c) {
    const links = [];
    if (c.url) links.push(h("a", { href: c.url, target: "_blank", rel: "noopener" }, "Verify credential"));
    if (c.file) links.push(h("a", { href: c.file, target: "_blank", rel: "noopener" }, "View certificate"));
    const badge = c.status === "completed" ? h("span", { class: "badge" }, "Completed")
      : h("span", { class: "badge wait" }, c.status === "in-progress" ? "In progress" : "Planned");
    const isImg = /\.(png|jpe?g|webp)$/i.test(c.file || "");
    return h("article", { class: "card" + (c.status === "completed" ? "" : " pending") },
      isImg && h("img", { class: "thumb", src: c.file, alt: `Certificate: ${c.title}`, loading: "lazy" }), badge, h("h3", {}, c.title), h("p", { class: "org" }, c.org),
      c.note && h("p", { class: "note" }, c.note),
      h("p", { class: "meta" }, [c.type, c.date && fmtDate(c.date)].filter(Boolean).join(" · ")),
      links.length ? h("div", { class: "links" }, links) : null);
  }

  // ---------- pages ----------
  if (page === "home") {
    const done = S.certifications.filter((c) => c.status === "completed").length;
    const stats = [[done, "Completed certifications"], [S.publications.filter((p) => p.state === "accepted").length, "Accepted paper"],
      [S.peerReview.length, "Peer-review role"], ["4.30", "CGPA out of 5.00"]];
    const art = h("div", {});
    art.innerHTML = `<svg viewBox="0 0 320 300" role="img" aria-label="Network nodes joined to a heartbeat line" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="160" cy="150" r="118" opacity=".12" fill="currentColor" stroke="none"/>
      <g opacity=".55"><path d="M60 90 L130 60 L210 85 L265 55"/><path d="M60 90 L90 170 L160 130 L210 85"/><path d="M90 170 L140 235 L215 205 L160 130"/><path d="M215 205 L270 160 L210 85"/></g>
      <g fill="var(--surface)"><circle cx="60" cy="90" r="7"/><circle cx="130" cy="60" r="7"/><circle cx="210" cy="85" r="7"/><circle cx="265" cy="55" r="7"/><circle cx="90" cy="170" r="7"/><circle cx="160" cy="130" r="7"/><circle cx="140" cy="235" r="7"/><circle cx="215" cy="205" r="7"/><circle cx="270" cy="160" r="7"/></g>
      <path d="M30 262 H110 L124 238 L146 284 L166 250 L178 262 H290" stroke-width="3"/></svg>`;
    root.append(
      h("section", { class: "hero" },
        h("div", {}, h("p", { class: "eyebrow" }, "AI and machine learning for healthcare"),
          h("h1", {}, S.person.name), h("p", { class: "lead" }, S.person.tagline + "."), h("p", {}, S.person.intro),
          h("div", { class: "actions" },
            h("a", { class: "btn", href: "certifications.html" }, "View certifications"),
            h("a", { class: "btn ghost", href: "research.html" }, "Research"),
            S.person.cvUrl && h("a", { class: "btn ghost", href: S.person.cvUrl }, "Download CV (PDF)"))),
        art.firstElementChild),
      h("div", { class: "stats" }, stats.map(([n, l]) => h("div", { class: "stat" }, h("b", {}, String(n)), h("span", {}, l)))),
      section("Research interests", chips(S.interests)),
      section("Education", ...S.education.map((e) => h("div", { class: "card" },
        h("h3", {}, e.title), h("p", { class: "org" }, e.org), h("p", { class: "note" }, e.detail)))),
      section("Looking ahead", h("p", {}, "I am preparing applications for funded, research-based MSc programmes in computer science, artificial intelligence, machine learning and health informatics for 2027 entry.")));
  }

  if (page === "certifications") {
    root.append(h("h1", {}, "Certifications"),
      h("p", { class: "lead" }, "Professional development in healthcare AI, clinical data and research practice."));
    const search = h("input", { type: "search", placeholder: "Search by title or organisation", "aria-label": "Search certifications" });
    let active = "All";
    const chipRow = h("div", { class: "chips" });
    const list = h("div", {});
    root.append(h("div", { class: "toolbar" }, search), chipRow, list);

    function draw() {
      chipRow.replaceChildren(...["All", ...S.categories].map((c) =>
        h("button", { class: "chip", type: "button", "aria-pressed": String(c === active) }, c)));
      chipRow.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => { active = b.textContent; draw(); }));
      const q = search.value.trim().toLowerCase();
      const match = (c) => (active === "All" || c.category === active) &&
        (!q || (c.title + " " + c.org + " " + c.type).toLowerCase().includes(q));
      const done = S.certifications.filter((c) => c.status === "completed" && match(c));
      const ongoing = S.certifications.filter((c) => c.status !== "completed" && match(c));
      list.replaceChildren(
        section("Completed", done.length ? h("div", { class: "grid" }, done.map(certCard)) : h("p", { class: "empty" }, "No matching credentials.")),
        ongoing.length ? section("Ongoing learning", h("p", { class: "empty" }, "Not yet earned. Listed for transparency."), h("div", { class: "grid" }, ongoing.map(certCard))) : "");
    }
    search.addEventListener("input", draw);
    draw();
  }

  if (page === "research") {
    root.append(h("h1", {}, "Research"),
      h("p", { class: "lead" }, "Projects on trustworthy, externally validated AI for clinical settings. Status is stated for each."),
      h("div", { class: "stack" }, S.research.map((r) => h("article", { class: "card" },
        h("span", { class: "badge wait" }, r.status), h("h3", {}, r.title), h("p", {}, r.summary), chips(r.tags),
        r.links.length ? h("div", { class: "links" }, r.links.map((l) => h("a", { href: l.url, target: "_blank", rel: "noopener" }, l.label))) : null))));
  }

  if (page === "publications") {
    const groups = [["accepted", "Accepted"], ["review", "Under review"], ["draft", "In preparation"]];
    root.append(h("h1", {}, "Publications and Peer Review"),
      h("p", { class: "lead" }, "Accepted work is kept separate from manuscripts under review and drafts."));
    groups.forEach(([k, label]) => {
      const items = S.publications.filter((p) => p.state === k);
      if (!items.length) return;
      root.append(section(label, h("div", { class: "stack" }, items.map((p) => h("article", { class: "card" },
        h("h3", {}, p.title), h("p", { class: "org" }, p.venue), p.note && h("p", { class: "note" }, p.note),
        p.url && h("div", { class: "links" }, h("a", { href: p.url, target: "_blank", rel: "noopener" }, "View")))))));
    });
    root.append(section("Peer review", h("div", { class: "stack" }, S.peerReview.map((p) =>
      h("article", { class: "card" }, h("h3", {}, p.title), h("p", { class: "org" }, p.org), h("p", { class: "note" }, p.note))))));
  }

  if (page === "experience") {
    root.append(h("h1", {}, "Experience and Advocacy"));
    [["Research", "Research"], ["Work", "Internships"], ["Advocacy", "Advocacy and community"]].forEach(([g, label]) => {
      const items = S.experience.filter((e) => e.group === g);
      if (!items.length) return;
      root.append(section(label, h("div", { class: "stack" }, items.map((e) => h("article", { class: "card" },
        h("h3", {}, e.title), h("p", { class: "org" }, e.org),
        e.period && h("p", { class: "meta" }, e.period), e.note && h("p", { class: "note" }, e.note))))));
    });
    root.append(section("Interests", h("p", {}, "Responsible AI, healthcare access, sickle cell disease and the equitable use of clinical technologies.")));
  }

  if (page === "contact") {
    const c = S.contact;
    const rows = [["Email", c.email && `mailto:${c.email}`, c.email], ["LinkedIn", c.linkedin, c.linkedin],
      ["GitHub", c.github, c.github], ["ORCID", c.orcid, c.orcid]].filter((r) => r[2]);
    root.append(h("h1", {}, "Contact"),
      h("p", { class: "lead" }, "For research collaboration, supervision enquiries or programme admissions."),
      rows.length ? h("div", { class: "stack" }, rows.map(([l, href, text]) =>
        h("div", { class: "card" }, h("h3", {}, l), h("a", { href }, text))))
        : h("p", { class: "empty" }, "Contact details will be added shortly."));
  }

  if (page && page !== "home") {
    const h1 = root.querySelector("h1"), lead = root.querySelector(".lead");
    const head = h("div", { class: "page-head" }, h("div", { class: "wrap" }, h1, lead));
    root.parentElement.parentElement.insertBefore(head, root.parentElement);
  }
})();
