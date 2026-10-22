/*
 * ALL SITE CONTENT LIVES HERE. Edit this file to update the website.
 *
 * Certificates: add an object to `certifications`.
 *   status: "completed" | "in-progress" | "planned"
 *   date:   "YYYY-MM-DD" or "YYYY-MM" or "" (leave empty if unconfirmed; nothing is shown)
 *   url:    ONLY a link you have personally opened and verified. Leave "" otherwise.
 *   image:  optional preview picture in /certificates (.jpg/.png)
 *   file:   optional certificate PDF in /certificates (leave "" to hide)
 */
window.SITE = {
  person: {
    name: "David O. Adekoya",
    tagline: "Computing graduate developing into a healthcare-AI researcher",
    intro:
      "Research-focused graduate with experience supporting academic research, preparing manuscripts and documenting healthcare AI studies. I work on maternal risk prediction, medical imaging and explainable clinical AI, with attention to accurate citations, clear records and compliance with journal requirements.",
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
      detail: "2021 to 2026. CGPA 4.30/5.00. Degree status: awaiting official confirmation of final result. Coursework: Artificial Intelligence, Statistics, Data Structures and Algorithms, Database Systems, Software Engineering, Computer Networks, Numerical Analysis, Data Analysis.",
    },
  ],

  skills: [
    "Manuscript preparation and proofreading",
    "Revision tracking and journal-guideline checks",
    "Research documentation and literature review",
    "Python, Git/GitHub, Microsoft Word",
  ],

  categories: [
    "Healthcare AI, Clinical Data and Research",
    "Research Methods, Data and AI Practice",
    "Research Service and Peer Review",
    "Additional Professional Development",
  ],

  certifications: [
    {
      title: "Introduction to Healthcare",
      org: "Stanford Online / Coursera",
      category: "Healthcare AI, Clinical Data and Research",
      type: "Course certificate",
      status: "completed", date: "2026-10-14", url: "https://www.coursera.org/account/accomplishments/verify/ZE07T3QYWJG6", file: "certificates/stanford-intro-healthcare.pdf", image: "certificates/stanford-intro-healthcare.jpg",
    },
    {
      title: "Introduction to Clinical Data",
      org: "Stanford Online / Coursera",
      category: "Healthcare AI, Clinical Data and Research",
      type: "Course certificate",
      status: "completed", date: "2026-10-17", url: "https://www.coursera.org/account/accomplishments/verify/ENY7Q03EHM54", file: "certificates/stanford-intro-clinical-data.pdf", image: "certificates/stanford-intro-clinical-data.jpg",
    },
    {
      title: "AI in Healthcare Specialization",
      org: "Stanford Online / Coursera",
      category: "Healthcare AI, Clinical Data and Research",
      type: "Specialization certificate",
      status: "completed", date: "", url: "", file: "", image: "",
    },
    {
      title: "How to Identify Research Gaps",
      org: "Elsevier Researcher Academy",
      category: "Research Methods, Data and AI Practice",
      type: "Course certificate",
      status: "completed", date: "2026-09-01", url: "", file: "certificates/elsevier-identify-research-gaps.pdf", image: "certificates/elsevier-identify-research-gaps.jpg",
    },
    {
      title: "Ethical AI in Research",
      org: "Elsevier Researcher Academy",
      category: "Research Methods, Data and AI Practice",
      type: "Course certificate",
      status: "completed", date: "2026-09-01", url: "", file: "certificates/elsevier-ethical-ai-in-research.pdf", image: "certificates/elsevier-ethical-ai-in-research.jpg",
    },
    {
      title: "Health Data Standards and Terminologies",
      org: "National Network of Libraries of Medicine (NNLM) / Medical Library Association (MLA)",
      category: "Healthcare AI, Clinical Data and Research",
      type: "Certificate of participation and MLA continuing-education certificate (2.5 MLA CE credits)",
      status: "completed", date: "2026-09-23", url: "", file: "certificates/mla-health-data-standards.pdf", image: "certificates/mla-health-data-standards.jpg",
    },
    {
      title: "Good Practices for Clinical Trial Design and Implementation",
      org: "WHO Academy",
      category: "Healthcare AI, Clinical Data and Research",
      type: "Course certificate",
      status: "completed", date: "2026-10-10", url: "", file: "certificates/who-clinical-trial-design.pdf", image: "certificates/who-clinical-trial-design.jpg",
    },
    {
      title: "ICH Good Clinical Practice E6(R3)",
      org: "Global Health Training Centre",
      category: "Healthcare AI, Clinical Data and Research",
      type: "Course certificate",
      status: "completed", date: "2026-09-30", url: "", file: "certificates/ghtc-ich-gcp-e6r3.pdf", image: "certificates/ghtc-ich-gcp-e6r3.jpg",
    },
    {
      title: "Introduction to Clinical Research",
      org: "Global Health Training Centre",
      category: "Healthcare AI, Clinical Data and Research",
      type: "E-learning course certificate",
      status: "completed", date: "2026-09-22", url: "", file: "certificates/ghtc-intro-clinical-research.pdf", image: "certificates/ghtc-intro-clinical-research.jpg",
    },
    {
      title: "Research Design",
      org: "Elsevier Researcher Academy",
      category: "Research Methods, Data and AI Practice",
      type: "Course certificate (all modules completed, 4 h 50 min)",
      status: "completed", date: "2026-09-21", url: "", file: "certificates/elsevier-research-design.pdf", image: "certificates/elsevier-research-design.jpg",
    },
    {
      title: "Data Repositories to Store Your Data",
      org: "Elsevier Researcher Academy",
      category: "Research Methods, Data and AI Practice",
      type: "Module certificate",
      status: "completed", date: "2026-09-22", url: "", file: "certificates/elsevier-data-repositories.pdf", image: "certificates/elsevier-data-repositories.jpg",
    },
    {
      title: "How Researchers Store, Share and Use Data",
      org: "Elsevier Researcher Academy",
      category: "Research Methods, Data and AI Practice",
      type: "Module certificate",
      status: "completed", date: "2026-09-18", url: "", file: "certificates/elsevier-store-share-use-data.pdf", image: "certificates/elsevier-store-share-use-data.jpg",
    },
    {
      title: "How to Conduct Evidence-Based Research",
      org: "Elsevier Researcher Academy",
      category: "Research Methods, Data and AI Practice",
      type: "Module certificate",
      status: "completed", date: "2026-09-01", url: "", file: "certificates/elsevier-evidence-based-research.pdf", image: "certificates/elsevier-evidence-based-research.jpg",
    },
    {
      title: "Using Generative and Agentic AI in the Literature Review",
      org: "Elsevier Researcher Academy",
      category: "Research Methods, Data and AI Practice",
      type: "Module certificate",
      status: "completed", date: "2026-09-01", url: "", file: "certificates/elsevier-genai-literature-review.pdf", image: "certificates/elsevier-genai-literature-review.jpg",
    },
    {
      title: "Gen AI Use in the Research Workflow",
      org: "Elsevier Researcher Academy",
      category: "Research Methods, Data and AI Practice",
      type: "Module certificate",
      status: "completed", date: "2026-09-21", url: "", file: "certificates/elsevier-genai-research-workflow.pdf", image: "certificates/elsevier-genai-research-workflow.jpg",
    },
    {
      title: "How to Integrate Sex, Gender and Intersectional Analysis into Research",
      org: "Elsevier Researcher Academy",
      category: "Research Methods, Data and AI Practice",
      type: "Module certificate",
      status: "completed", date: "2026-09-18", url: "", file: "certificates/elsevier-sex-gender-analysis.pdf", image: "certificates/elsevier-sex-gender-analysis.jpg",
    },
    {
      title: "How to Enhance Your Chances of Serendipitous Research Discovery",
      org: "Elsevier Researcher Academy",
      category: "Research Methods, Data and AI Practice",
      type: "Module certificate",
      status: "completed", date: "2026-09-20", url: "", file: "certificates/elsevier-serendipitous-discovery.pdf", image: "certificates/elsevier-serendipitous-discovery.jpg",
    },
    {
      title: "Recognised Reviewer Certificate",
      org: "Elsevier Reviewer Hub",
      category: "Research Service and Peer Review",
      type: "Reviewer recognition",
      note: "Awarded for a completed peer review for Biomedical Signal Processing and Control.",
      status: "completed", date: "2026-09-22", url: "", file: "certificates/bspc-recognised-reviewer.pdf", image: "certificates/bspc-recognised-reviewer.jpg",
    },
    // ---- Ongoing learning (shown separately, never as completed) ----
    {
      title: "Evaluations of AI Applications in Healthcare",
      org: "Stanford Online / Coursera",
      category: "Healthcare AI, Clinical Data and Research",
      type: "Course",
      status: "in-progress", date: "", url: "", file: "", image: "",
    },
    {
      title: "Elements of AI: Introduction to AI",
      org: "University of Helsinki / MinnaLearn",
      category: "Additional Professional Development",
      type: "Course",
      status: "in-progress", date: "", url: "", file: "", image: "",
    },
  ],

  research: [
    {
      title: "When Benchmarks Do Not Travel: External Validation of Maternal Risk Prediction Models in Nigeria",
      status: "Published, 18 October 2026",
      summary:
        "Co-authored with R. S. Akinbo. Evaluates model performance and calibration on Nigerian clinical records, reporting external validation and population-shift analyses.",
      tags: ["External validation", "Calibration", "Maternal health"],
      links: [{ label: "Read the article", url: "https://faith.futuretechsci.org/index.php/FAITH/article/view/448" }, { label: "DOI", url: "https://doi.org/10.62411/faith.3048-3719-448" }],
    },
    {
      title: "An Explainable Artificial Intelligence Based Maternal Triage Decision-Support System for Primary Health Centers",
      status: "Under peer review",
      summary:
        "An explainable machine-learning triage system integrated into a mobile application for primary health centres.",
      tags: ["Clinical decision support", "Explainable AI", "Maternal health"],
      links: [],
    },
    {
      title: "A Multi-Agent Multimodal Framework for Childhood Asthma Detection with Cross-Modal Explanation Fusion",
      status: "Under peer review",
      summary:
        "Co-authored with R. S. Akinbo. Multimodal healthcare AI with model evaluation and explanation assessment.",
      tags: ["Multimodal AI", "Explainability", "Paediatrics"],
      links: [],
    },
    {
      title: "Reader selectivity in multi-pathologist cervical cytology annotations: an analysis of RIVA and a negative result for reader-aware correction",
      status: "Submitted, sole author",
      summary:
        "Investigates reader selectivity and disagreement in multi-pathologist cervical cytology annotations, and evaluates whether reader-aware correction improves annotation reliability. Reports a negative result.",
      tags: ["Medical imaging", "Annotation reliability", "Negative result"],
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

  // Publications page groups by `state`: published | review | submitted | draft
  publications: [
    {
      state: "published",
      title: "When Benchmarks Do Not Travel: External Validation of Maternal Risk Prediction Models in Nigeria",
      venue: "Journal of Future Artificial Intelligence and Technologies (FAITH). Co-author with R. S. Akinbo.",
      note: "Published 18 October 2026. DOI: 10.62411/faith.3048-3719-448",
      url: "https://doi.org/10.62411/faith.3048-3719-448",
    },
    {
      state: "review",
      title: "A Multi-Agent Multimodal Framework for Childhood Asthma Detection with Cross-Modal Explanation Fusion",
      venue: "Under peer review (submitted 2026). Co-author with R. S. Akinbo.",
      note: "",
      url: "",
    },
    {
      state: "review",
      title: "An Explainable Artificial Intelligence Based Maternal Triage Decision-Support System for Primary Health Centers",
      venue: "Under peer review (submitted 2026). Co-author.",
      note: "",
      url: "",
    },
    {
      state: "submitted",
      title: "Reader selectivity in multi-pathologist cervical cytology annotations: an analysis of RIVA and a negative result for reader-aware correction",
      venue: "Submitted 2026. Sole author.",
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
      title: "Invited reviewer, Biomedical Signal Processing and Control",
      org: "Elsevier",
      note: "September 2026. Recognised Reviewer Certificate awarded for one completed review.",
    },
  ],

  experience: [
    {
      title: "Research Assistant",
      org: "Federal University of Technology, Akure (FUTA). Supervisor: Dr. R. S. Akinbo, Department of Data Science",
      period: "December 2025 to September 2026",
      note: "Supported healthcare AI research: problem formulation, model development, analysis and manuscript preparation. Drafted and organised research materials for manuscripts, kept methods, results and conclusions consistent, and supported peer and junior students with research methodology, project scoping and technical execution.",
      group: "Research",
    },
    {
      title: "Invited Reviewer",
      org: "Biomedical Signal Processing and Control (Elsevier)",
      period: "September 2026",
      note: "Contributed to scholarly peer review, with exposure to journal review workflows and evidence-based scientific reporting.",
      group: "Research",
    },
    {
      title: "Head Mobile Engineer",
      org: "XODOS",
      period: "May 2026 to present",
      note: "Maintain technical documentation and coordinate implementation of application features against technical specifications.",
      group: "Work",
    },
    {
      title: "Intern, ICT Department",
      org: "Lagos State Ministry of Transportation",
      period: "May 2025 to October 2025",
      note: "Organised and updated departmental records and spreadsheets, supported data entry and cleaning, and compiled periodic reports. Assisted with routine ICT support, software installation, system maintenance and office network troubleshooting.",
      group: "Work",
    },
    {
      title: "Mentor, undergraduate research",
      org: "Federal University of Technology, Akure",
      period: "2026",
      note: "Mentored undergraduate students on research methodology, project scoping and technical execution.",
      group: "Service",
    },
    {
      title: "Volunteer",
      org: "Google Developer Student Club, FUTA",
      period: "2026",
      note: "Supported student technical workshops, including Build with AI (April 2026).",
      group: "Service",
    },
    {
      title: "Attendee, ACAI Conference 2026",
      org: "American Center for Artificial Intelligence, Obafemi Awolowo University, Ile-Ife",
      period: "27 August 2026",
      note: "Artificial Intelligence for National Development workshop (attendance).",
      group: "Service",
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
    email: "adekoyadift2020@futa.edu.ng",
    linkedin: "https://www.linkedin.com/in/david-adekoya-91164a373/",
    github: "https://github.com/Davidic-02",
    orcid: "https://orcid.org/0009-0006-2754-1589",
  },
};
