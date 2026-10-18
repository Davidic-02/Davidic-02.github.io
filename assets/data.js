/*
 * ALL SITE CONTENT LIVES HERE. Edit this file to update the website.
 *
 * Certificates: add an object to `certifications`.
 *   status: "completed" | "in-progress" | "planned"
 *   date:   "YYYY-MM-DD" or "YYYY-MM" or "" (leave empty if unconfirmed; nothing is shown)
 *   url:    ONLY a link you have personally opened and verified. Leave "" otherwise.
 *   file:   optional path to a certificate PDF placed in /certificates (leave "" to hide)
 */
window.SITE = {
  person: {
    name: "David O. Adekoya",
    tagline: "Computing graduate developing into a healthcare-AI researcher",
    intro:
      "I build and evaluate machine-learning systems for clinical settings, with a focus on whether they stay reliable outside the data they were trained on. My work covers maternal risk prediction, medical imaging and sickle cell disease in resource-constrained health systems.",
    cvUrl: "", // e.g. "assets/David-Adekoya-CV.pdf" once you add the PDF
  },

  interests: [
    "Clinical AI and decision support",
    "Medical imaging and computer vision",
    "Explainable and trustworthy ML",
    "External validation and generalisation",
    "Clinical data science and health informatics",
    "Sickle cell disease and resource-constrained healthcare",
  ],

  education: [
    {
      title: "B.Tech. Information Technology",
      org: "Federal University of Technology, Akure (FUTA), Nigeria",
      detail: "CGPA 4.30/5.00, Second Class Upper Division. Final examinations completed August 2026.",
    },
  ],

  categories: [
    "Healthcare AI, Clinical Data and Research",
    "Research Service and Peer Review",
    "Additional Professional Development",
  ],

  certifications: [
    {
      title: "Introduction to Healthcare",
      org: "Stanford Online / Coursera",
      category: "Healthcare AI, Clinical Data and Research",
      type: "Course certificate",
      status: "completed", date: "", url: "", file: "",
    },
    {
      title: "Introduction to Clinical Data",
      org: "Stanford Online / Coursera",
      category: "Healthcare AI, Clinical Data and Research",
      type: "Course certificate",
      status: "completed", date: "", url: "", file: "",
    },
    {
      title: "AI in Healthcare Specialization",
      org: "Stanford Online / Coursera",
      category: "Healthcare AI, Clinical Data and Research",
      type: "Specialization certificate",
      status: "completed", date: "", url: "", file: "",
    },
    {
      title: "Ethical AI in Research",
      org: "Elsevier Researcher Academy",
      category: "Healthcare AI, Clinical Data and Research",
      type: "Course certificate",
      status: "completed", date: "2026-09-01", url: "", file: "",
    },
    {
      title: "Health Data Standards and Terminologies",
      org: "National Network of Libraries of Medicine (NNLM) / Medical Library Association (MLA)",
      category: "Healthcare AI, Clinical Data and Research",
      type: "Certificate of participation and MLA continuing-education certificate (2.5 MLA CE credits)",
      status: "completed", date: "", url: "", file: "",
    },
    {
      title: "Good Practices for Clinical Trial Design and Implementation",
      org: "WHO Academy",
      category: "Healthcare AI, Clinical Data and Research",
      type: "Course certificate",
      status: "completed", date: "2026-10-10", url: "", file: "",
    },
    {
      title: "ICH Good Clinical Practice E6(R3)",
      org: "Global Health Training Centre",
      category: "Healthcare AI, Clinical Data and Research",
      type: "Course certificate",
      status: "completed", date: "", url: "", file: "",
    },
    {
      title: "Recognised Reviewer Certificate",
      org: "Elsevier Reviewer Hub",
      category: "Research Service and Peer Review",
      type: "Reviewer recognition",
      note: "Awarded for a completed peer review for Biomedical Signal Processing and Control.",
      status: "completed", date: "2026-09-22", url: "", file: "",
    },
    // ---- Ongoing learning (shown separately, never as completed) ----
    {
      title: "Evaluations of AI Applications in Healthcare",
      org: "Stanford Online / Coursera",
      category: "Healthcare AI, Clinical Data and Research",
      type: "Course",
      status: "in-progress", date: "", url: "", file: "",
    },
    {
      title: "Elements of AI: Introduction to AI",
      org: "University of Helsinki / MinnaLearn",
      category: "Additional Professional Development",
      type: "Course",
      status: "in-progress", date: "", url: "", file: "",
    },
  ],

  research: [
    {
      title: "Explainable AI-Based Maternal Triage Decision-Support System",
      status: "Manuscript under review",
      summary:
        "A research-oriented maternal triage decision-support system combining machine learning, explainability methods and a software application stack. It explores prediction and interpretability for maternal risk assessment.",
      tags: ["Clinical decision support", "Explainable AI", "Maternal health"],
      links: [],
    },
    {
      title: "When Benchmarks Do Not Travel: External Validation of Maternal Risk Prediction Models in Nigeria",
      status: "Accepted",
      summary:
        "Co-authored study of how maternal risk prediction models generalise to data from other settings in Nigeria.",
      tags: ["External validation", "Generalisation", "Maternal health"],
      links: [],
    },
    {
      title: "Paediatric Pneumonia X-ray Shortcut Audit",
      status: "Ongoing, exploratory draft (not submitted)",
      summary:
        "Investigates whether benchmark pneumonia classifiers exploit non-lung image information, and whether their performance transfers to other datasets. Findings are preliminary.",
      tags: ["Medical imaging", "Shortcut learning", "Dataset shift"],
      links: [],
    },
    {
      title: "ErythroSight: Sickle Cell Imaging Research",
      status: "Ongoing research direction",
      summary:
        "Interest in image-based assessment, cross-site generalisation and practical diagnostic workflows for sickle cell disease. This is a research direction with proposed experiments; no established findings are claimed here.",
      tags: ["Sickle cell disease", "Medical imaging", "Low-resource settings"],
      links: [],
    },
  ],

  // Publications page groups by `state`: accepted | review | draft
  publications: [
    {
      state: "accepted",
      title: "When Benchmarks Do Not Travel: External Validation of Maternal Risk Prediction Models in Nigeria",
      venue: "Journal of Faith-Based and Intercultural Studies (J. FAITH)",
      note: "Accepted October 2026.",
      url: "", // add only after the final record is live
    },
    {
      state: "review",
      title: "Explainable AI-Based Maternal Triage Decision-Support System",
      venue: "Manuscript under review",
      note: "",
      url: "",
    },
    {
      state: "draft",
      title: "Paediatric Pneumonia X-ray Shortcut Audit",
      venue: "Research draft, not yet submitted",
      note: "",
      url: "",
    },
  ],

  peerReview: [
    {
      title: "Peer reviewer, Biomedical Signal Processing and Control",
      org: "Elsevier Reviewer Hub",
      note: "Recognised Reviewer Certificate issued 22 September 2026.",
    },
  ],

  experience: [
    {
      title: "Research Assistant",
      org: "Federal University of Technology, Akure (supervisor-led research)",
      period: "January 2026 to present",
      note: "",
      group: "Research",
    },
    {
      title: "Intern",
      org: "Lagos State Ministry of Science and Technology",
      period: "",
      note: "",
      group: "Work",
    },
    {
      title: "Intern",
      org: "Lagos State Ministry of Transportation",
      period: "",
      note: "",
      group: "Work",
    },
    {
      title: "Sick Cells Ambassador",
      org: "Sick Cells",
      period: "Active",
      note: "Advocacy for sickle cell disease awareness and equitable care.",
      group: "Advocacy",
    },
    {
      title: "Member, AI for Global Health Research Community of Practice",
      org: "The Global Health Network (TGHN)",
      period: "",
      note: "",
      group: "Advocacy",
    },
  ],

  contact: {
    email: "",    // professional email
    linkedin: "https://www.linkedin.com/in/david-adekoya-91164a373/",
    github: "https://github.com/Davidic-02",
    orcid: "https://orcid.org/0009-0006-2754-1589",
  },
};
