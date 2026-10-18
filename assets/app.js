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
  document.body.append(
    h("footer", { class: "site" }, h("div", { class: "wrap" },
      `© ${new Date().getFullYear()} ${S.person.name}. Credentials are listed with a verification link only where one has been confirmed.`))
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
    return h("article", { class: "card" }, badge, h("h3", {}, c.title), h("p", { class: "org" }, c.org),
      c.note && h("p", { class: "note" }, c.note),
      h("p", { class: "meta" }, [c.type, c.date && fmtDate(c.date)].filter(Boolean).join(" · ")),
      links.length ? h("div", { class: "links" }, links) : null);
  }

  // ---------- pages ----------
  if (page === "home") {
    const actions = h("div", { class: "actions" },
      h("a", { class: "btn", href: "certifications.html" }, "View certifications"),
      h("a", { class: "btn ghost", href: "research.html" }, "Research"),
      S.person.cvUrl && h("a", { class: "btn ghost", href: S.person.cvUrl }, "Download CV (PDF)"));
    root.append(
      h("p", { class: "eyebrow" }, "AI and machine learning for healthcare"),
      h("h1", {}, S.person.name), h("p", { class: "lead" }, S.person.tagline + "."),
      h("p", {}, S.person.intro), actions,
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
})();
