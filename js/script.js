/* ---- Edit this block to fill in the portfolio. Anything left empty shows a dashed "add" prompt. ---- */
const P = {

  name: "Angelo Dale N. Zamora",                        
  school: "Datamex College of Saint Adeline",
  location: "Parañaque City",
  specialization: "Full-Stack Developer",
  targetPosition: "Full-Stack Developer",
  fields: ["Full-Stack Application Development"],                       // e.g. ["Web Development", "Database Administration"]
  statementSkills: ["Full-Stack Application Development", "Database Architecture & Management", "Agile Software Practices & Problem Solving"],    // three skills for the professional statement
  statementCareer: "Full-Stack Developer",              // e.g. "junior web developer"
  about: "Here is a tailored professional biography based on your academic background, technical skill set, and projects: Angelo Dale N. Zamora is a dedicated Information Technology student at Datamex College of Saint Adeline, specializing in full-stack web development, database architecture, and hardware-software integration. Driven by a passion for building practical, efficient digital solutions, Angelo has developed a strong technical foundation spanning Python, Flask, SQL, and modern interface design. His practical experience includes designing and implementing database management systems, writing backend server logic, and engineering interactive software applications. Beyond standard web development, Angelo has explored hardware-connected programming, creating RFID-integrated camera systems and automation workflows using single-board computers. His background in database normalization, security architecture, and object-oriented programming enables him to design robust, scalable software tailored to real-world demands. In addition to his technical pursuits, Angelo brings strong problem-solving skills, discipline, and a collaborative mindset cultivated through academic projects and competitive athletics. As he prepares to transition into the tech industry, Angelo aims to leverage his skill set in Python backend engineering and full-stack development to build secure, user-centric applications while continuously mastering emerging technologies.",                        // 150 to 250 words, separate paragraphs with a blank line
  email: "angelodalezamora@gmail.com", linkedin: "https://www.linkedin.com/feed/", github: "https://github.com/angelodalezamora-boop", portfolioUrl: "http://127.0.0.1:5500/index.html#home",
  resumeUrl: "https://drive.google.com/uc?export=download&id=1DzLO7DLppXKB82KJN5S4HI8TvjG66Ii2",                    // e.g. "assets/resume.pdf" (put the file in this folder)
  skills: {                         // level 1-3; only skills with real evidence are listed
    "Python": { level: 2, evidence: "Project 1: Flask backend and risk-flagging logic" },
    "HTML / CSS": { level: 2, evidence: "Project 1 dashboard pages and this portfolio site" },
    "JavaScript / Bootstrap": { level: 1, evidence: "Interactive sections of this portfolio (js/script.js)" },
    "SQL / MySQL": { level: 2, evidence: "Project 1: SQLite queries for student records" },
    "ERD / Database Design": { level: 2, evidence: "Project 1: normalized student and risk-level tables" },
    "Git / GitHub": { level: 2, evidence: "Project 1 repository with commit history" },
    "TCP/IP / DNS / Troubleshooting": { level: 1, evidence: "Wi-Fi troubleshooting case; Linux command-line seminar" },
    "Security Fundamentals": { level: 1, evidence: "SQL injection case study; Cyber Awareness certificate" },
    "Deployment / Hosting": { level: 1, evidence: "Project 1: Gunicorn production server setup" },
    "AI Tools / Responsible AI Use": { level: 2, evidence: "AI usage log with my own verification notes" }
  },
  projects: [
    { 
      title: "Student Early Warning System", 
      summary: "An automated early intervention dashboard designed to flag academic risk factors and monitor at-risk students.", 
      tech: "Python, Flask, SQLite, Gunicorn",
      repo: "https://github.com/angelodalezamora-boop/student-early-warnings",
      docs: "https://github.com/angelodalezamora-boop/student-early-warnings#readme",
      live: " https://student-early-warnings-2.onrender.com",   // replace with the exact URL Render shows for your service
      demoLogin: "teacher / Teacher123!"
    },
     {
     title: "Campus Café Sales Database",
     summary: "A normalized SQLite database with SQL analysis, charts and data interpretation, running live in the browser.",
     tech: "SQLite, SQL, Python, JavaScript (sql.js)",
     repo: "https://github.com/angelodalezamora-boop/Campus-Caf-Sales-Database",
     docs: "https://github.com/angelodalezamora-boop/Campus-Caf-Sales-Database#readme",
     live: "https://angelodalezamora-boop.github.io/Campus-Caf-Sales-Database/"
   },
    {
      title: "AI-Assisted HelpDesk System",
      summary: "A full-stack IT help desk application featuring intelligent ticket triage, automated workflow testing, and secure role-based access.",
      tech: "Python, Flask, SQLite, Bootstrap, Pytest",
      repo: "https://github.com/angelodalezamora-boop/helpdesk-ai",
      docs: "https://github.com/angelodalezamora-boop/helpdesk-ai#readme",
      live: "https://helpdesk-ai-gyrc.onrender.com"
    }
  
  ],

  cases: [
    { example: true, problem: "Computer cannot connect to Wi-Fi", causes: ["Disabled adapter", "Driver problem", "Incorrect IP configuration", "Router problem", "DNS problem"], diagnostic: "Checked whether Wi-Fi was switched on and the adapter enabled in Device Manager. Ran ipconfig to look for a 169.254.x.x address, tried other devices on the same router, then pinged 8.8.8.8 and a domain name to separate connection problems from DNS problems.", solution: "Re-enabled the adapter, updated the driver, ran ipconfig /release and /renew, flushed DNS and set DNS to 8.8.8.8 when the router's DNS failed.", lesson: "Work from the bottom layer up: hardware, adapter, IP address, gateway, then DNS. Testing one layer at a time finds the cause faster than guessing." },
    { problem: "Flask app returns 500 Internal Server Error after a database change", causes: ["Missing table or column", "Wrong database file path", "Unhandled None value in a query result", "Template variable not passed"], diagnostic: "Read the traceback in the terminal, found the failing line, then ran the same query directly in SQLite to see the real result.", solution: "Fixed the schema, corrected the database path and added a check for empty query results before rendering.", lesson: "Read the full traceback first and reproduce the failing query on its own before changing code." },
    { problem: "Python script fails with ModuleNotFoundError", causes: ["Package not installed", "Virtual environment not activated", "Wrong Python version", "Misspelled import"], diagnostic: "Checked which python and pip were running, confirmed the virtual environment was active and ran pip list to see installed packages.", solution: "Activated the virtual environment, installed the package and recorded it in requirements.txt.", lesson: "Keep one virtual environment per project and list dependencies in requirements.txt so setup is repeatable." },
    { problem: "Git push rejected by GitHub", causes: ["Remote has commits I do not have", "Wrong remote URL", "Expired or missing credentials", "Wrong branch name"], diagnostic: "Ran git status, git remote -v and git log to compare local and remote branches.", solution: "Ran git pull --rebase to bring in remote changes, resolved the conflict and pushed again.", lesson: "Pull before pushing and check the remote URL and branch name when a push fails." },
    { problem: "Website layout breaks on mobile screens", causes: ["Missing viewport meta tag", "Fixed pixel widths", "Content wider than the screen", "Missing responsive rules"], diagnostic: "Opened browser developer tools in device mode, checked the viewport tag, then inspected which element caused the horizontal scroll.", solution: "Added the viewport meta tag, replaced fixed widths with flexible units and grid, and added media queries for small screens.", lesson: "Design for small screens first and test with developer tools at several widths." }
  ],
  aiLog: [
    { date: "2026-08-10", task: "Writing the Flask routes for the Student Early Warning System", assist: "AI suggested a route structure and example code", verify: "I ran the code, fixed errors, tested with sample student records and rewrote parts so I could explain every line." },
    { date: "2026-08-14", task: "Designing the SQLite tables", assist: "AI proposed a table layout", verify: "I checked it against normalization rules, simplified it and tested the queries myself." },
    { date: "2026-09-02", task: "Understanding SQL injection", assist: "AI explained how string-built queries are exploited", verify: "I compared it with course notes and a trusted security reference, then wrote the safe parameterized example myself." },
    { date: "2026-09-20", task: "Debugging a Gunicorn deployment error", assist: "AI listed possible causes", verify: "I read the server logs, tested each cause one at a time and confirmed which one was real." }
  ],                                // { date, task, assist, verify }
  aiAnswers: [
    "AI helped me draft code, understand errors faster and explain security concepts in plain language.",
    "I ran and tested all code, compared explanations against course material and documentation, and rewrote anything I could not explain.",
    "I learned that a clear, specific prompt gets better results, and that AI is most useful as a tutor and reviewer rather than a replacement for my own thinking.",
    "AI sometimes gave outdated syntax, invented functions and insecure examples. Testing and reading the official documentation caught these."
  ],
  interviews: { mock: true, technical: true },
  /* Mock interview video. Use ONE of:
     - a local file:      "videos/mock-interview.mp4"  (put the file in a videos folder)
     - a YouTube link:    "https://www.youtube.com/watch?v=XXXXXXXXXXX"
     - a Google Drive link: "https://drive.google.com/file/d/FILE_ID/view?usp=sharing" (set sharing to "Anyone with the link") */
  mockVideo: "https://drive.google.com/file/d/1l9K-WNrSCIiLRxuopYVeIjcIHJy06icb/view?usp=sharing",
  mockVideoNote: "Mock interview conducted on 2026-10-17",
  plan: {
    skillsNow: "Python, Flask, SQL / SQLite, HTML / CSS, Git / GitHub, basic troubleshooting",
    improve: "JavaScript, database design, writing automated tests, secure coding",
    learn: "Django, REST API design, MySQL / PostgreSQL, Docker, a front-end framework such as React",
    certs: "Python certification (PCEP / PCAP), CompTIA Security+ or Network+, a cloud fundamentals certification",
    g6: "Finish my other two portfolio projects, add tests to Project 1 and complete an internship or on-the-job training placement.",
    g12: "Work as a junior full-stack developer building and maintaining web applications with a team.",
    g36: "Grow into a full-stack developer who designs system architecture, mentors newer teammates and leads small projects."
  },
  achievements: [                   // { title, issuer, year, hours, img }
    { title: "Arduino 101: Coding Meets Hardware (Certificate of Participation)", issuer: "UpskillTechPH Training Services", year: "August 5, 2026", hours: "1 hr", img: "images/certificates/842767050_1638114414508484_8192908730429749130_n.jpg" },
    { title: "Linux & System Administration: Master the Command Line (Certificate of Participation)", issuer: "Ethel Programming Computer Programming Services", year: "August 7, 2026", hours: "2 hrs", img: "images/certificates/843493627_39123719750605226_6635035439194472108_n.jpg" },
    { title: "Web Dev 101: System Integration | Connecting Apps via API (Certificate of Participation)", issuer: "UpskillTechPH Training Services", year: "August 8, 2026", hours: "1 hr", img: "images/certificates/844320569_1126956369819433_7862846140676156203_n.jpg" },
    { title: "Cyber Awareness: Cyber Threats in 2026 and How to Stay Safe (Certificate of Participation)", issuer: "UpskillTechPH Training Services", year: "August 8, 2026", hours: "1 hr", img: "images/certificates/846206854_29592999756968859_4422732520420057817_n.jpg" },
    { title: "IT Infrastructure and Cloud Computing: Building the Digital Future (Certificate of Participation)", issuer: "Ethel Programming Computer Programming Services", year: "August 8, 2026", hours: "1 hr", img: "images/certificates/850268326_2285456245641458_5906077052290380959_n.jpg" }
  ],
  reflection: "Before entering BSIT, I thought information technology mostly meant using computers and fixing them. I did not realize how much of it is about building systems, solving problems step by step and keeping data safe. My first programming lessons showed me that a computer only does what I clearly tell it to do.\n\nThe most important things I learned were how to think through a problem, how a database stores and connects information, and how a web application moves data between the browser, the server and the database. Learning Python and Flask, and writing SQL queries, gave me a foundation I now use in every project.\n\nThe project that taught me the most was the Student Early Warning System. It forced me to combine everything at once: backend logic, a database, a dashboard interface and deployment with Gunicorn. Seeing a working system flag at-risk students showed me that code can serve a real purpose.\n\nThe technical difficulty that challenged me most was debugging errors that came from several layers at once, such as a database change that broke a Flask page. I learned to read the full error message, isolate one layer at a time and test each fix. That habit also helps in troubleshooting networks and installations.\n\nMy skills have changed a lot. I started by copying examples and now I can plan a small application, build it, test it and explain how it works. I also learned to use AI tools responsibly: I use them to learn faster, but I verify the output, because they can be wrong or insecure.\n\nI still need to improve my JavaScript, database design, automated testing and secure coding. I also want more experience working with a team and with larger codebases.\n\nI want to become a full-stack developer who builds secure, reliable and user-friendly applications, and who keeps learning as technology changes. The seminars on Arduino, Linux, APIs, cybersecurity and cloud computing showed me how many areas connect to software development, and I want to keep exploring them.\n\nI am ready to begin my career in IT because I can build working systems, troubleshoot problems methodically, verify my own work and keep learning. I know I still have much to learn, and I am prepared to learn it on the job."
};
/* ---- End of the editable block ---- */

const FIELDS = ["Web Development", "Software Development", "Mobile Development", "Database Administration", "Data Analytics", "IT Support", "Networking", "Cybersecurity", "Cloud Computing", "AI / Machine Learning"];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const SKILLS = [
  ["Programming", ["Python", "Java / C++ / C#"]],
  ["Web", ["HTML / CSS", "JavaScript / Bootstrap"]],
  ["Database", ["SQL / MySQL", "ERD / Database Design"]],
  ["Tools", ["Git / GitHub"]],
  ["Networking", ["TCP/IP / DNS / Troubleshooting"]],
  ["Cybersecurity", ["Security Fundamentals"]],
  ["Data", ["Excel / Sheets / Data Analysis"]],
  ["Cloud", ["Deployment / Hosting"]],
  ["AI", ["AI Tools / Responsible AI Use"]]
];
const AREA_ICON = { Programming: "i-code", Web: "i-globe", Database: "i-db", Tools: "i-branch", Networking: "i-network", Cybersecurity: "i-shield", Data: "i-chart", Cloud: "i-cloud", AI: "i-cpu" };
const PROJECT_SPEC = [
  { tag: "Project 1 · Web Development", icon: "i-code", def: "Student Early Warning System", reqs: ["Early identification of declining performance", "Automated parsing of risk level configurations", "Centralized data persistence tracking", "Production-ready deployment scalability"] },
  { tag: "Project 2 · Data / Database", icon: "i-db", def: "Data analysis project", reqs: ["Excel or Google Sheets", "SQL or a database", "Charts", "Data interpretation"] },
  { tag: "Project 3 · Specialization", icon: "i-star", def: "Specialization project", reqs: ["Built in my chosen IT area", "Related to my career goal", "Shows my skills and interests"] }
];

const TECHPREP = [
  { area: "Programming", icon: "i-code",
    concepts: ["Variables, data types, loops and functions", "Object-oriented programming: classes, inheritance, encapsulation", "Lists, dictionaries and when to use each", "Exception handling and reading a traceback"],
    task: "Write a function that takes a list of grades and returns the students below 75.",
    code: "def below_passing(students, passing=75):\n    # students is a dict: {\"Ana\": 82, \"Ben\": 70}\n    return [name for name, grade in students.items() if grade < passing]\n\nprint(below_passing({\"Ana\": 82, \"Ben\": 70, \"Cara\": 74}))\n# ['Ben', 'Cara']",
    answer: "The function loops through each student and grade, keeps only the names whose grade is under the passing mark, and returns them as a list. Using a parameter for the passing grade means the rule can change without rewriting the function. This is the same idea as the risk flagging in Project 1.",
    proof: "Project 1: risk-flagging logic in Python" },
  { area: "Database", icon: "i-db",
    concepts: ["Primary keys, foreign keys and relationships", "Normalization (1NF to 3NF)", "SELECT, JOIN, GROUP BY, and CRUD statements", "Why parameterized queries matter"],
    task: "Write a JOIN query that lists each student with their risk level.",
    code: "SELECT s.name, r.level\nFROM students s\nJOIN risk_levels r ON s.risk_id = r.id\nORDER BY r.level;",
    answer: "The JOIN matches the foreign key in students (risk_id) to the primary key in risk_levels (id), so each student row is combined with its risk level. Keeping risk levels in their own table avoids repeating the same text in every student row, which is what normalization is for. (Table and column names should match my own schema.)",
    proof: "Project 1 and Project 2: SQLite schemas and queries" },
  { area: "Web development", icon: "i-globe",
    concepts: ["Client, server and database flow of a request", "HTTP methods (GET, POST) and status codes (200, 404, 500)", "Flask routes, templates and sessions", "Responsive layout with CSS grid, flexbox and media queries"],
    task: "Explain what happens from the moment a user submits a login form until the page loads.",
    code: "",
    answer: "1) The browser sends a POST request with the username and password to the Flask login route. 2) Flask reads the form data and validates it. 3) It queries the users table with a parameterized query. 4) It compares the submitted password against the stored hash. 5) If it matches, Flask saves the user in the session and redirects (302) to the dashboard; if not, it shows a generic error. 6) The browser sends a GET request for the dashboard, Flask checks the session, renders the template with data from the database and returns 200 OK.",
    proof: "Project 1 and Project 3: Flask applications; this portfolio" },
  { area: "Networking", icon: "i-network",
    concepts: ["IP address, subnet mask, gateway and DNS", "TCP vs UDP", "What DHCP does and what a 169.254.x.x address means", "Ping, ipconfig and tracert for troubleshooting"],
    task: "A PC has Wi-Fi but no internet. Walk through how I would find the cause.",
    code: "ipconfig /all          # do I have a valid IP, gateway and DNS?\nping 192.168.1.1       # can I reach the router (gateway)?\nping 8.8.8.8           # can I reach the internet by IP?\nping google.com        # does DNS resolve names?\nipconfig /flushdns",
    answer: "I work from the bottom up. First I check that Wi-Fi is on and the adapter is enabled. If ipconfig shows a 169.254.x.x address, the PC did not get an address from DHCP, so I renew it or check the router. If the gateway does not answer, the problem is the local connection or router. If 8.8.8.8 answers but google.com does not, the problem is DNS, so I flush the DNS cache and set DNS to 8.8.8.8. Testing one layer at a time finds the cause faster than guessing.",
    proof: "Wi-Fi troubleshooting case" },
  { area: "Cybersecurity", icon: "i-shield",
    concepts: ["SQL injection and how parameterized queries stop it", "Password hashing vs encryption", "Least privilege and input validation", "Role-based access control"],
    task: "Show unsafe and safe versions of a login query and explain the difference.",
    code: "# UNSAFE: input is joined into the SQL string\ncur.execute(\"SELECT * FROM users WHERE name='\" + name + \"'\")\n\n# SAFE: the value is sent separately\ncur.execute(\"SELECT * FROM users WHERE name = ?\", (name,))",
    answer: "In the unsafe version, input such as ' OR '1'='1 becomes part of the SQL command and can bypass the login. In the safe version, the database treats the value only as data, never as part of the command. I also hash stored passwords, validate input, show generic error messages and give the database account only the permissions it needs.",
    proof: "SQL injection case study; role-based access in Project 3" },
  { area: "Software engineering", icon: "i-branch",
    concepts: ["SDLC and Agile (sprints, backlog)", "Git workflow: commit, branch, push, pull, merge", "Testing: unit tests vs manual tests (Pytest)", "Requirements, use cases and ERD basics"],
    task: "Resolve a rejected git push and explain each command I used.",
    code: "git status              # see my local changes\ngit remote -v           # confirm the remote URL\ngit pull --rebase       # bring in remote commits first\n# fix any conflict, then:\ngit add .\ngit rebase --continue\ngit push",
    answer: "A push is rejected when the remote has commits I do not have. git status and git remote -v confirm my state and the right remote. git pull --rebase replays my commits on top of the remote ones. If there is a conflict I edit the files, git add them and run git rebase --continue. Then git push succeeds. The habit is to pull before I push.",
    proof: "Git push troubleshooting case; Pytest in Project 3" }
];
const PROMPTS = ["What I knew about IT before entering BSIT", "The most important things I learned", "The project that taught me the most, and why", "The technical difficulty that challenged me most", "How my IT skills have changed", "The skills I still need to improve", "The kind of IT professional I want to become", "Why I am ready to begin my career in IT"];

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const ph = t => `<span class="ph">${esc(t)}</span>`;
const val = (v, t) => v ? esc(v) : ph(t);
const ic = (id, cls = "") => `<svg class="ico ${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;
const a = (url, label, t) => url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label || url)}</a>` : ph(t);
const $ = id => document.getElementById(id);

let toastTimer;
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}
async function copyText(text, okMsg) {
  try {
    await navigator.clipboard.writeText(text);
    toast(okMsg || "Copied to clipboard");
  } catch (e) {
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (_) { /* ignore */ }
    ta.remove();
    toast(ok ? (okMsg || "Copied to clipboard") : "Press Ctrl+C to copy");
  }
}

/* ---------- hero ---------- */
$("h-name").innerHTML = val(P.name, "Your full name");
$("c-name").innerHTML = val(P.name, "Your full name");
$("c-school").textContent = P.school;
$("h-role").innerHTML = P.targetPosition ? esc(P.targetPosition) : ph("Add your target IT position");
const sk = P.statementSkills;
const statement = `I am a BSIT student with skills in <b>${val(sk[0], "skill")}</b>, <b>${val(sk[1], "skill")}</b>, and <b>${val(sk[2], "skill")}</b>. I am interested in pursuing a career as a <b>${val(P.statementCareer, "career")}</b>.`;
$("h-statement").innerHTML = statement;
$("statement2").innerHTML = statement;
$("c-facts").innerHTML = `
  <div><dt>Specialization</dt><dd>${val(P.specialization, "Add specialization")}</dd></div>
  <div><dt>Target field</dt><dd>${P.fields.length ? P.fields.map(esc).join(", ") : ph("Add preferred IT field")}</dd></div>`;
if (P.resumeUrl) {
  const b = $("btn-resume");
  b.href = P.resumeUrl;
  if (/^https?:/i.test(P.resumeUrl)) { b.target = "_blank"; b.rel = "noopener"; } else { b.setAttribute("download", ""); }
}

/* ---------- profile ---------- */
$("about").innerHTML = P.about
  ? P.about.split(/\n\s*\n/).map(p => `<p>${esc(p)}</p>`).join("")
  : `<p>${ph("Write 150 to 250 words about your BSIT background, interests, technical strengths, career goals, professional values and the IT work that interests you.")}</p>`;
$("identity").innerHTML = `
  <div><dt>Full name</dt><dd>${val(P.name, "Add your full name")}</dd></div>
  <div><dt>Program</dt><dd>Bachelor of Science in Information Technology</dd></div>
  <div><dt>School</dt><dd>${esc(P.school)}, ${esc(P.location)}</dd></div>
  <div><dt>BSIT specialization</dt><dd>${val(P.specialization, "Add your specialization")}</dd></div>
  <div><dt>Target IT position</dt><dd>${val(P.targetPosition, "Add your target position")}</dd></div>
  <div><dt>Preferred IT field</dt><dd>${P.fields.length ? P.fields.map(f => `<span class="chip">${esc(f)}</span>`).join("") : ph("Choose from: " + FIELDS.join(", "))}</dd></div>`;

/* ---------- skills ---------- */
$("skillgroups").innerHTML = SKILLS.map(([area, list]) => `
  <div class="skillgroup" data-area="${area}"><h3>${ic(AREA_ICON[area])}${area}</h3><div>${list.map(name => {
    const s = P.skills[name] || {};
    const lv = s.level && s.evidence ? s.level : 0;
    return `<div class="skill"><span>${esc(name)}</span>
      <span><span class="meter" role="img" aria-label="${lv ? LEVELS[lv - 1] : "Not yet rated"}">${[1, 2, 3].map(i => `<i class="${i <= lv ? "on" : ""}"></i>`).join("")}</span><span class="lvl">${lv ? LEVELS[lv - 1] : "Not rated"}</span></span>
      <span class="ev">${s.evidence ? esc(s.evidence) : ph("Evidence needed")}</span></div>`;
  }).join("")}</div></div>`).join("");

const filterEl = $("skillfilter");
filterEl.innerHTML = ["All", ...SKILLS.map(s => s[0])].map((n, i) =>
  `<button type="button" class="chipf" aria-pressed="${i === 0}" data-area="${n}">${i ? ic(AREA_ICON[n]) : ""}${n}</button>`).join("");
filterEl.addEventListener("click", e => {
  const b = e.target.closest(".chipf");
  if (!b) return;
  filterEl.querySelectorAll(".chipf").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
  document.querySelectorAll(".skillgroup").forEach(g => { g.hidden = b.dataset.area !== "All" && g.dataset.area !== b.dataset.area; });
});

/* ---------- projects ---------- */
const plink = (url, label, icon) => url
  ? `<a class="pl" href="${esc(url)}" target="_blank" rel="noopener">${ic(icon)}${label}</a>`
  : `<span class="pl off" title="Add this link in js/script.js">${ic(icon)}${label}</span>`;
$("projectcards").innerHTML = PROJECT_SPEC.map((spec, i) => {
  const p = P.projects[i] || {};
  return `<article class="card">
    <div class="ctop"><span class="cico">${ic(spec.icon)}</span><span class="tag">${spec.tag}</span></div>
    <h3>${p.title ? esc(p.title) : ph(spec.def)}</h3>
    <p>${p.summary ? esc(p.summary) : ph("Add a one-sentence summary of the problem this solves")}</p>
    <details class="req"><summary>Requirements <span>${spec.reqs.length}</span></summary><ul>${spec.reqs.map(r => `<li>${r}</li>`).join("")}</ul></details>
    <div class="tech"><b>Technologies</b>${val(p.tech, "Add technologies used")}</div>
    ${p.live ? `<a class="btn primary sm live-btn" href="${esc(p.live)}" target="_blank" rel="noopener">${ic("i-ext")} Live demo</a>` : ""}
    ${p.demoLogin ? `<p class="note demo-note">Demo login: <span class="mono">${esc(p.demoLogin)}</span><br>The free host sleeps when idle, so the first load can take up to a minute.</p>` : ""}
    <div class="proj-links">${plink(p.repo, "Source code", "i-github")}${plink(p.docs, "Documentation", "i-file")}</div></article>`;
}).join("");

/* ---------- troubleshooting cases ---------- */
$("cases").innerHTML = P.cases.map((c, i) => {
  const list = c.causes && c.causes.length ? `<ul>${c.causes.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ph("Add possible causes");
  return `<details class="case"${i === 0 ? " open" : ""}><summary><span class="n">CASE ${i + 1}</span><span>${c.problem ? esc(c.problem) : ph("Add the problem you solved")}</span>${c.example ? '<span class="ex">Guide example</span>' : ""}</summary>
  <div class="case-body">
    <div><span class="lbl">Possible causes</span>${list}</div>
    <div><span class="lbl">Diagnostic procedure</span>${val(c.diagnostic, "Add the steps you took to find the cause")}</div>
    <div><span class="lbl">Solution</span>${val(c.solution, "Add the fix")}</div>
    <div><span class="lbl">Lesson learned</span>${val(c.lesson, "Add what you learned")}</div>
  </div></details>`;
}).join("");
$("openall").addEventListener("click", () => document.querySelectorAll("details.case").forEach(d => { d.open = true; }));
$("closeall").addEventListener("click", () => document.querySelectorAll("details.case").forEach(d => { d.open = false; }));

/* ---------- AI log ---------- */
$("ailog").innerHTML = P.aiLog.length
  ? P.aiLog.map(r => `<tr><td>${esc(r.date)}</td><td>${esc(r.task)}</td><td>${esc(r.assist)}</td><td>${esc(r.verify)}</td></tr>`).join("")
  : `<tr><td>${ph("Date")}</td><td>${ph("Task")}</td><td>${ph("What AI did")}</td><td>${ph("How I checked it")}</td></tr>`;
const AIQ = ["What did AI help me accomplish?", "What did I personally verify?", "What did I learn from using AI?", "What limitations or errors did I find?"];
$("aiqa").innerHTML = AIQ.map((q, i) => `<div><h4>${q}</h4><p>${val(P.aiAnswers[i], "Add your answer")}</p></div>`).join("");

/* ---------- employability ---------- */
const IV = [["mock", "Mock job interview"], ["technical", "Technical interview"]];
$("interviews").innerHTML = IV.map(([k, n]) => `<div class="row"><strong>${n}</strong><span class="status ${P.interviews[k] ? "done" : ""}">${P.interviews[k] ? "Completed" : "Not yet completed"}</span></div>`).join("");

/* mock interview video: local file, YouTube or Google Drive */
function videoEmbed(url) {
  if (!url) return "";
  let m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  if (m) return `<iframe src="https://www.youtube.com/embed/${m[1]}" title="Mock interview video" allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>`;
  m = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  if (m) return `<iframe src="https://drive.google.com/file/d/${m[1]}/preview" title="Mock interview video" allow="autoplay; fullscreen" allowfullscreen loading="lazy"></iframe>`;
  return `<video controls preload="metadata" playsinline src="${esc(url)}">Your browser does not support video playback.</video>`;
}
$("mockvideo").innerHTML = P.mockVideo
  ? `<div class="vidbox">${videoEmbed(P.mockVideo)}</div>${P.mockVideoNote ? `<p class="note" style="margin-top:12px">${esc(P.mockVideoNote)}</p>` : ""}`
  : `<div class="vidbox empty"><span>${ph("Add your mock interview video link in js/script.js (mockVideo)")}</span></div>`;

/* technical interview preparation (Step 20) */
/* technical interview preparation (Step 20) */
$("techprep").innerHTML = TECHPREP.map(t => `
  <article class="tp">
    <h4>${ic(t.icon)}${esc(t.area)}</h4>
    <span class="lbl">Concepts I can explain</span>
    <ul>${t.concepts.map(c => `<li>${esc(c)}</li>`).join("")}</ul>
    <span class="lbl">Practice problem</span>
    <p>${esc(t.task)}</p>
    ${t.code || t.answer ? `<span class="lbl">My answer</span>` : ""}
    ${t.code ? `<pre class="code"><code>${esc(t.code)}</code></pre>` : ""}
    ${t.answer ? `<p class="ans">${esc(t.answer)}</p>` : ""}
    <span class="lbl">Evidence</span>
    <p class="ev">${esc(t.proof)}</p>
  </article>`).join("");
const PL = P.plan;
$("plan").innerHTML = [["Target position", P.targetPosition, "Add target position"], ["Target IT field", P.fields.join(", "), "Add target field"], ["Current skills", PL.skillsNow, "Add current skills"], ["Skills to improve", PL.improve, "Add skills to improve"], ["Technologies to learn", PL.learn, "Add technologies"], ["Certifications to consider", PL.certs, "Add certifications"], ["6-month goal", PL.g6, "Add goal"], ["1-year goal", PL.g12, "Add goal"], ["3-year goal", PL.g36, "Add goal"]]
  .map(([l, v, t]) => `<div><span class="lbl">${l}</span>${val(v, t)}</div>`).join("");

/* ---------- resume ---------- */
const skillNames = Object.keys(P.skills).filter(k => P.skills[k].evidence);
const ul = items => `<ul style="margin:0;padding-left:1.1rem">${items.join("")}</ul>`;
$("paper").innerHTML = `
  <header><div><h3>${val(P.name, "Your full name")}</h3><div class="t">${P.targetPosition ? esc(P.targetPosition) : "BSIT Student"}</div></div>
    <div class="c">${P.email ? esc(P.email) : ph("email")}<br>${esc(P.location)}${P.linkedin ? "<br>" + esc(P.linkedin) : ""}${P.github ? "<br>" + esc(P.github) : ""}</div></header>
  <div><h4>Professional summary</h4><p>${statement}</p></div>
  <div class="two">
    <div><h4>Education</h4><p><strong>Bachelor of Science in Information Technology</strong><br>${esc(P.school)}, ${esc(P.location)}</p></div>
    <div><h4>Technical skills</h4><p>${skillNames.length ? skillNames.map(esc).join(", ") : ph("Skills with evidence appear here")}</p></div>
  </div>
  <div class="two">
    <div><h4>Projects</h4>${P.projects.some(p => p.title) ? ul(P.projects.filter(p => p.title).map(p => `<li>${esc(p.title)}</li>`)) : ph("Project titles appear here")}</div>
    <div><h4>Certifications and achievements</h4>${P.achievements.length ? ul(P.achievements.map(x => `<li>${esc(x.title)}</li>`)) : ph("Certificates appear here")}</div>
  </div>`;
$("printresume").addEventListener("click", () => {
  document.body.classList.add("printing");
  window.print();
});
window.addEventListener("afterprint", () => document.body.classList.remove("printing"));

/* ---------- achievements ---------- */
if (P.achievements.length) $("achlist").className = "certgrid";
$("achlist").innerHTML = P.achievements.length
  ? P.achievements.map(x => {
      const meta = [x.issuer, x.year, x.hours].filter(Boolean).map(esc).join(" · ");
      const thumb = x.img ? `<span class="cthumb"><img src="${esc(x.img)}" alt="Certificate: ${esc(x.title)}" loading="lazy" onerror="this.closest('.cert').classList.add('noimg')"></span>` : "";
      const body = `${thumb}<span class="cbody"><strong>${ic("i-award")}<span>${esc(x.title)}</span></strong><span class="cmeta">${meta}</span>${x.img ? `<span class="go">View full certificate ${ic("i-ext")}</span>` : ""}</span>`;
      return x.img
        ? `<a class="cert" href="${esc(x.img)}" target="_blank" rel="noopener">${body}</a>`
        : `<div class="cert noimg">${body}</div>`;
    }).join("")
  : `<div class="row"><span>${ph("Add a certificate or achievement: title, issuer, year")}</span></div>`;

/* ---------- GitHub ---------- */
$("ghprofile").innerHTML = P.github
  ? `<a class="btn primary" href="${esc(P.github)}" target="_blank" rel="noopener">${ic("i-github")} Open my GitHub</a><span class="mono" style="overflow-wrap:anywhere">${esc(P.github)}</span>`
  : `<span>${ph("Add your GitHub profile link")}</span>`;
$("repos").innerHTML = PROJECT_SPEC.map((s, i) => {
  const p = P.projects[i] || {};
  const name = p.title ? esc(p.title) : s.tag;
  return p.repo
    ? `<a class="row" href="${esc(p.repo)}" target="_blank" rel="noopener"><strong>${ic("i-folder")}${name}</strong><span class="go">View repository ${ic("i-ext")}</span></a>`
    : `<div class="row"><strong>${ic("i-folder")}${name}</strong><span>${ph("Repository link")}</span></div>`;
}).join("");

/* ---------- contact: select a method, then act ---------- */
const CONTACT = {
  email:     { label: "Email",     icon: "i-mail",     value: P.email,        href: P.email ? `mailto:${P.email}` : "", open: "Send email",     empty: "Add your email in js/script.js" },
  linkedin:  { label: "LinkedIn",  icon: "i-linkedin", value: P.linkedin,     href: P.linkedin,                         open: "Open LinkedIn",  empty: "Add your LinkedIn link in js/script.js" },
  github:    { label: "GitHub",    icon: "i-github",   value: P.github,       href: P.github,                           open: "Open GitHub",    empty: "Add your GitHub link in js/script.js" },
  portfolio: { label: "Portfolio", icon: "i-globe",    value: P.portfolioUrl, href: P.portfolioUrl,                     open: "Open website",   empty: "Add your portfolio URL in js/script.js" }
};
$("tiles").innerHTML = Object.entries(CONTACT).map(([k, m]) => `
  <button type="button" class="tile" data-key="${k}" aria-pressed="false">
    <span class="tico">${ic(m.icon)}</span>
    <span class="tt"><b>${m.label}</b><span>${m.value ? esc(m.value) : "Not added yet"}</span></span>
    <span class="arrow">${ic("i-arrow")}</span>
  </button>`).join("");

function selectContact(key) {
  const m = CONTACT[key];
  document.querySelectorAll(".tile").forEach(t => t.setAttribute("aria-pressed", String(t.dataset.key === key)));
  const ext = key === "email" ? "" : ' target="_blank" rel="noopener"';
  $("cp-info").innerHTML = `
    <div class="cp-top"><span class="cp-ico">${ic(m.icon)}</span>
      <div style="min-width:0"><span class="lbl">${m.label}</span><div class="cp-val">${m.value ? esc(m.value) : ph(m.empty)}</div></div></div>
    <div class="cp-actions">
      <button type="button" class="btn primary" data-act="copy"${m.value ? "" : " disabled"}>${ic("i-copy")} Copy</button>
      ${m.value ? `<a class="btn line" href="${esc(m.href)}"${ext}>${ic("i-ext")} ${m.open}</a>` : `<span class="btn line is-disabled" aria-disabled="true">${ic("i-ext")} ${m.open}</span>`}
    </div>`;
  $("cp-info").dataset.key = key;
  $("cform").hidden = key !== "email";
}
$("tiles").addEventListener("click", e => {
  const t = e.target.closest(".tile");
  if (t) selectContact(t.dataset.key);
});
$("cp-info").addEventListener("click", e => {
  const b = e.target.closest('[data-act="copy"]');
  if (!b) return;
  const m = CONTACT[$("cp-info").dataset.key];
  copyText(m.value, m.label + " copied");
});
document.querySelectorAll(".soc").forEach(b => b.addEventListener("click", () => {
  selectContact(b.dataset.contact);
  $("contact").scrollIntoView({ behavior: "smooth" });
}));
selectContact("email");

/* message form */
const fName = $("f-name"), fMsg = $("f-msg");
fMsg.addEventListener("input", () => { $("count").textContent = `${fMsg.value.length} / 600`; });
function composeMessage() {
  const topic = document.querySelector('input[name="topic"]:checked').value;
  const name = fName.value.trim();
  const msg = fMsg.value.trim();
  return { subject: `${topic} from ${name || "a visitor"}`, body: `${msg}\n\n${name}`, plain: `Subject: ${topic}\n\n${msg}\n\n${name}` };
}
function validate() {
  let ok = true;
  const nameOk = fName.value.trim().length >= 2;
  const msgOk = fMsg.value.trim().length >= 10;
  $("e-name").textContent = nameOk ? "" : "Enter your name.";
  $("e-msg").textContent = msgOk ? "" : "Write at least 10 characters.";
  fName.setAttribute("aria-invalid", String(!nameOk));
  fMsg.setAttribute("aria-invalid", String(!msgOk));
  if (!nameOk) { fName.focus(); ok = false; } else if (!msgOk) { fMsg.focus(); ok = false; }
  return ok;
}
$("cform").addEventListener("submit", e => {
  e.preventDefault();
  if (!validate()) return;
  if (!P.email) { toast("Add your email in js/script.js to enable sending"); return; }
  const m = composeMessage();
  window.location.href = `mailto:${P.email}?subject=${encodeURIComponent(m.subject)}&body=${encodeURIComponent(m.body)}`;
  $("cnote").textContent = "Your email app should open with the message ready. If it does not, use Copy message.";
  toast("Opening your email app");
});
$("copymsg").addEventListener("click", () => {
  if (fMsg.value.trim().length < 1) { validate(); return; }
  copyText(composeMessage().plain, "Message copied");
});
[fName, fMsg].forEach(el => el.addEventListener("input", () => { el.setAttribute("aria-invalid", "false"); $(el === fName ? "e-name" : "e-msg").textContent = ""; }));

/* ---------- reflection ---------- */
$("reflect").innerHTML = P.reflection
  ? P.reflection.split(/\n\s*\n/).map(p => `<p style="margin-bottom:14px">${esc(p)}</p>`).join("")
  : `<p class="note">${ph("Write 500 to 800 words covering:")}</p><ol class="prompts">${PROMPTS.map(x => `<li>${x}</li>`).join("")}</ol>`;

/* ---------- theme toggle ---------- */
const root = document.documentElement;
const darkMq = window.matchMedia("(prefers-color-scheme: dark)");
const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : darkMq.matches;
function syncThemeLabel() { $("theme").setAttribute("aria-label", isDark() ? "Switch to light theme" : "Switch to dark theme"); }
try { const saved = localStorage.getItem("theme"); if (saved === "light" || saved === "dark") root.dataset.theme = saved; } catch (e) { /* ignore */ }
$("theme").addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
  syncThemeLabel();
  toast(next === "dark" ? "Dark theme on" : "Light theme on");
});
darkMq.addEventListener("change", syncThemeLabel);
syncThemeLabel();

/* ---------- button press ripple ---------- */
document.addEventListener("pointerdown", e => {
  const b = e.target.closest(".btn, .tile, .copy, .soc, .icon-btn, .chipf, .totop");
  if (!b || b.disabled || b.classList.contains("is-disabled")) return;
  const r = b.getBoundingClientRect();
  const size = Math.max(r.width, r.height) * 2;
  const s = document.createElement("span");
  s.className = "rip";
  s.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
  b.appendChild(s);
  setTimeout(() => s.remove(), 600);
});

/* ---------- scroll: progress bar, back to top, active nav link ---------- */
const progress = $("progress"), totop = $("totop");
let ticking = false;
function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0) + "%";
  totop.classList.toggle("show", window.scrollY > 600);
  ticking = false;
}
window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();
totop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const navLinks = [...document.querySelectorAll("#navlinks a")];
function setActive(id) {
  navLinks.forEach(l => {
    const on = l.getAttribute("href") === "#" + id;
    l.classList.toggle("active", on);
    if (on) {
      l.setAttribute("aria-current", "true");
      const c = $("navlinks");
      c.scrollTo({ left: l.offsetLeft - c.clientWidth / 2 + l.clientWidth / 2, behavior: "smooth" });
    } else { l.removeAttribute("aria-current"); }
  });
}
navLinks.forEach(link => link.addEventListener("click", () => setActive(link.hash.slice(1))));
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) setActive(en.target.id); });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("header#home, main > section").forEach(s => io.observe(s));
}

/* ---------- scroll reveal ---------- */
(function () {
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const targets = document.querySelectorAll(".head, .about, .facts, .skillgroup, .card, details.case, .sec-case, .tablewrap, .plan > div, .paper, .row, .cert, .tile, .cpanel, #reflect");
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      el.classList.add("in");
      io.unobserve(el);
      // drop the reveal class afterwards so hover effects work normally
      setTimeout(() => el.classList.remove("rv", "in"), 900);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
  targets.forEach((el, i) => {
    el.classList.add("rv");
    el.style.setProperty("--d", (i % 4) * 70 + "ms");
    io.observe(el);
  });
})();
