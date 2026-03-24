// ========== PlaceBridge Dashboard – Companies Data & Logic ==========

const COMPANIES = [
  {
    name: "Amazon",
    type: "E-Commerce & Cloud",
    color: "#FF9900",
    initials: "AZ",
    roles: [
      { title: "SDE I", package: "28 LPA", minCGPA: 8.0, maxBacklogs: 0, skills: ["DSA", "Java", "System Design"], openings: 12 },
      { title: "SDE Intern", package: "1.2 LPA/mo", minCGPA: 7.5, maxBacklogs: 0, skills: ["DSA", "Python", "OOP"], openings: 30 },
      { title: "Data Analyst", package: "18 LPA", minCGPA: 7.0, maxBacklogs: 1, skills: ["SQL", "Python", "Tableau"], openings: 8 },
      { title: "Cloud Engineer", package: "22 LPA", minCGPA: 7.5, maxBacklogs: 0, skills: ["AWS", "Linux", "Docker"], openings: 10 },
      { title: "ML Engineer", package: "32 LPA", minCGPA: 8.5, maxBacklogs: 0, skills: ["Python", "TensorFlow", "ML"], openings: 5 }
    ]
  },
  {
    name: "Microsoft",
    type: "Technology & Cloud",
    color: "#00A4EF",
    initials: "MS",
    roles: [
      { title: "SDE", package: "30 LPA", minCGPA: 8.0, maxBacklogs: 0, skills: ["DSA", "C++", "System Design"], openings: 15 },
      { title: "SDE Intern", package: "1.5 LPA/mo", minCGPA: 7.5, maxBacklogs: 0, skills: ["DSA", "Python", "OOP"], openings: 40 },
      { title: "Data Analyst", package: "20 LPA", minCGPA: 7.0, maxBacklogs: 1, skills: ["SQL", "Power BI", "Python"], openings: 10 },
      { title: "Web Developer", package: "18 LPA", minCGPA: 7.0, maxBacklogs: 1, skills: ["React", "TypeScript", "Azure"], openings: 12 },
      { title: "Cloud Engineer", package: "25 LPA", minCGPA: 7.5, maxBacklogs: 0, skills: ["Azure", "Linux", "Kubernetes"], openings: 8 }
    ]
  },
  {
    name: "Google",
    type: "Technology & AI",
    color: "#4285F4",
    initials: "G",
    roles: [
      { title: "SDE L3", package: "35 LPA", minCGPA: 8.5, maxBacklogs: 0, skills: ["DSA", "Python", "System Design"], openings: 8 },
      { title: "SDE Intern", package: "1.8 LPA/mo", minCGPA: 8.0, maxBacklogs: 0, skills: ["DSA", "C++", "Algorithms"], openings: 25 },
      { title: "ML Engineer", package: "40 LPA", minCGPA: 9.0, maxBacklogs: 0, skills: ["Python", "TensorFlow", "ML", "Deep Learning"], openings: 4 },
      { title: "Cloud Engineer", package: "28 LPA", minCGPA: 8.0, maxBacklogs: 0, skills: ["GCP", "Docker", "Kubernetes"], openings: 6 },
      { title: "Data Analyst", package: "22 LPA", minCGPA: 7.5, maxBacklogs: 0, skills: ["SQL", "Python", "BigQuery"], openings: 10 }
    ]
  },
  {
    name: "TCS",
    type: "IT Services & Consulting",
    color: "#0072C6",
    initials: "TCS",
    roles: [
      { title: "Systems Engineer", package: "7 LPA", minCGPA: 6.0, maxBacklogs: 2, skills: ["Java", "SQL", "Agile"], openings: 200 },
      { title: "Digital Intern", package: "25K/mo", minCGPA: 6.0, maxBacklogs: 2, skills: ["HTML", "CSS", "JavaScript"], openings: 100 },
      { title: "Data Analyst", package: "8 LPA", minCGPA: 6.5, maxBacklogs: 1, skills: ["SQL", "Excel", "Python"], openings: 50 },
      { title: "Web Developer", package: "7.5 LPA", minCGPA: 6.0, maxBacklogs: 2, skills: ["React", "Node.js", "MongoDB"], openings: 60 },
      { title: "Cloud Engineer", package: "9 LPA", minCGPA: 7.0, maxBacklogs: 1, skills: ["AWS", "Linux", "DevOps"], openings: 30 },
      { title: "Systems Engineer Prime", package: "9 LPA", minCGPA: 7.5, maxBacklogs: 0, skills: ["DSA", "Java", "OOP"], openings: 80 }
    ]
  },
  {
    name: "Infosys",
    type: "IT Services & Consulting",
    color: "#007CC3",
    initials: "IN",
    roles: [
      { title: "Systems Engineer", package: "6.5 LPA", minCGPA: 6.0, maxBacklogs: 2, skills: ["Java", "SQL", "Linux"], openings: 180 },
      { title: "Digital Specialist", package: "9.5 LPA", minCGPA: 7.5, maxBacklogs: 0, skills: ["Python", "ML", "Cloud"], openings: 40 },
      { title: "Web Developer", package: "7 LPA", minCGPA: 6.5, maxBacklogs: 1, skills: ["Angular", "TypeScript", "Node.js"], openings: 50 },
      { title: "Data Analyst", package: "7.5 LPA", minCGPA: 6.5, maxBacklogs: 1, skills: ["SQL", "Tableau", "Python"], openings: 35 },
      { title: "Cloud Intern", package: "20K/mo", minCGPA: 6.0, maxBacklogs: 2, skills: ["AWS", "Linux", "Docker"], openings: 25 }
    ]
  },
  {
    name: "Wipro",
    type: "IT Services & Digital",
    color: "#44107A",
    initials: "W",
    roles: [
      { title: "Project Engineer", package: "6.5 LPA", minCGPA: 6.0, maxBacklogs: 2, skills: ["Java", "SQL", "Agile"], openings: 150 },
      { title: "Turbo Hire", package: "9 LPA", minCGPA: 7.5, maxBacklogs: 0, skills: ["DSA", "OOP", "System Design"], openings: 30 },
      { title: "Web Developer", package: "6.5 LPA", minCGPA: 6.0, maxBacklogs: 2, skills: ["HTML", "JavaScript", "React"], openings: 45 },
      { title: "Data Analyst", package: "7 LPA", minCGPA: 6.5, maxBacklogs: 1, skills: ["Excel", "SQL", "Power BI"], openings: 30 },
      { title: "Intern", package: "18K/mo", minCGPA: 6.0, maxBacklogs: 2, skills: ["Java", "Python", "SQL"], openings: 60 }
    ]
  },
  {
    name: "Accenture",
    type: "Consulting & Technology",
    color: "#A100FF",
    initials: "AC",
    roles: [
      { title: "Associate Software Eng", package: "6.5 LPA", minCGPA: 6.0, maxBacklogs: 2, skills: ["Java", "SQL", "Testing"], openings: 200 },
      { title: "Advanced App Eng", package: "11 LPA", minCGPA: 7.5, maxBacklogs: 0, skills: ["Python", "Cloud", "DevOps"], openings: 50 },
      { title: "Data Analyst", package: "8 LPA", minCGPA: 6.5, maxBacklogs: 1, skills: ["SQL", "Python", "Tableau"], openings: 40 },
      { title: "Cloud Engineer", package: "10 LPA", minCGPA: 7.0, maxBacklogs: 1, skills: ["AWS", "Azure", "Docker"], openings: 25 },
      { title: "Intern", package: "22K/mo", minCGPA: 6.0, maxBacklogs: 2, skills: ["Python", "JavaScript", "SQL"], openings: 80 }
    ]
  },
  {
    name: "Capgemini",
    type: "Consulting & Technology",
    color: "#0070AD",
    initials: "CG",
    roles: [
      { title: "Analyst", package: "7.5 LPA", minCGPA: 6.5, maxBacklogs: 1, skills: ["Java", "SQL", "Agile"], openings: 120 },
      { title: "SDE", package: "11 LPA", minCGPA: 7.5, maxBacklogs: 0, skills: ["Java", "Spring Boot", "Microservices"], openings: 30 },
      { title: "Web Developer", package: "8 LPA", minCGPA: 6.5, maxBacklogs: 1, skills: ["React", "Node.js", "CSS"], openings: 35 },
      { title: "Data Engineer", package: "10 LPA", minCGPA: 7.0, maxBacklogs: 1, skills: ["Python", "Spark", "SQL"], openings: 20 },
      { title: "Cloud Intern", package: "25K/mo", minCGPA: 6.5, maxBacklogs: 1, skills: ["AWS", "Linux", "Terraform"], openings: 15 }
    ]
  },
  {
    name: "Cognizant",
    type: "IT Services & Digital",
    color: "#1A4C8B",
    initials: "CT",
    roles: [
      { title: "Programmer Analyst", package: "7 LPA", minCGPA: 6.0, maxBacklogs: 2, skills: ["Java", "SQL", "Linux"], openings: 160 },
      { title: "GenC Elevate", package: "9.5 LPA", minCGPA: 7.5, maxBacklogs: 0, skills: ["DSA", "Python", "Cloud"], openings: 40 },
      { title: "Data Analyst", package: "7.5 LPA", minCGPA: 6.5, maxBacklogs: 1, skills: ["SQL", "Excel", "Python"], openings: 30 },
      { title: "Web Developer", package: "7 LPA", minCGPA: 6.0, maxBacklogs: 2, skills: ["Angular", "JavaScript", "CSS"], openings: 40 },
      { title: "ML Intern", package: "20K/mo", minCGPA: 7.0, maxBacklogs: 1, skills: ["Python", "ML", "Statistics"], openings: 15 }
    ]
  },
  {
    name: "Deloitte",
    type: "Consulting & Advisory",
    color: "#86BC25",
    initials: "DT",
    roles: [
      { title: "Analyst", package: "12 LPA", minCGPA: 7.5, maxBacklogs: 0, skills: ["Python", "SQL", "Analytics"], openings: 25 },
      { title: "Consultant", package: "16 LPA", minCGPA: 8.0, maxBacklogs: 0, skills: ["Excel", "PowerPoint", "Analytics"], openings: 15 },
      { title: "Data Engineer", package: "14 LPA", minCGPA: 7.5, maxBacklogs: 0, skills: ["Python", "Spark", "SQL", "Azure"], openings: 10 },
      { title: "Web Developer", package: "11 LPA", minCGPA: 7.0, maxBacklogs: 1, skills: ["React", "Node.js", "MongoDB"], openings: 20 },
      { title: "Summer Intern", package: "50K/mo", minCGPA: 7.5, maxBacklogs: 0, skills: ["Python", "SQL", "Communication"], openings: 30 }
    ]
  },
  {
    name: "Oracle",
    type: "Enterprise Software & Cloud",
    color: "#F80000",
    initials: "OR",
    roles: [
      { title: "SDE", package: "20 LPA", minCGPA: 7.5, maxBacklogs: 0, skills: ["Java", "DSA", "OOP"], openings: 20 },
      { title: "Cloud Engineer", package: "18 LPA", minCGPA: 7.0, maxBacklogs: 1, skills: ["OCI", "Linux", "Docker"], openings: 12 },
      { title: "Data Analyst", package: "15 LPA", minCGPA: 7.0, maxBacklogs: 1, skills: ["SQL", "Oracle DB", "Python"], openings: 10 },
      { title: "SDE Intern", package: "80K/mo", minCGPA: 7.5, maxBacklogs: 0, skills: ["Java", "DSA", "SQL"], openings: 25 },
      { title: "Web Developer", package: "14 LPA", minCGPA: 7.0, maxBacklogs: 1, skills: ["JavaScript", "React", "REST APIs"], openings: 15 }
    ]
  },
  {
    name: "IBM",
    type: "Technology & Consulting",
    color: "#054ADA",
    initials: "IBM",
    roles: [
      { title: "Application Developer", package: "12 LPA", minCGPA: 7.0, maxBacklogs: 1, skills: ["Java", "Python", "Cloud"], openings: 30 },
      { title: "Data Scientist", package: "16 LPA", minCGPA: 8.0, maxBacklogs: 0, skills: ["Python", "ML", "Statistics", "SQL"], openings: 10 },
      { title: "Cloud Engineer", package: "14 LPA", minCGPA: 7.5, maxBacklogs: 0, skills: ["IBM Cloud", "Docker", "Kubernetes"], openings: 12 },
      { title: "Intern", package: "35K/mo", minCGPA: 6.5, maxBacklogs: 1, skills: ["Python", "Java", "SQL"], openings: 40 },
      { title: "Web Developer", package: "11 LPA", minCGPA: 6.5, maxBacklogs: 1, skills: ["React", "Node.js", "REST APIs"], openings: 18 },
      { title: "ML Engineer", package: "20 LPA", minCGPA: 8.0, maxBacklogs: 0, skills: ["Python", "TensorFlow", "PyTorch"], openings: 6 }
    ]
  }
];

// All available skills for the selector
const ALL_SKILLS = [
  "DSA", "Java", "Python", "C++", "JavaScript", "TypeScript",
  "React", "Angular", "Node.js", "HTML", "CSS",
  "SQL", "MongoDB", "OOP", "System Design",
  "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Linux",
  "ML", "TensorFlow", "Deep Learning", "Statistics",
  "Git", "Agile", "REST APIs", "Microservices",
  "Tableau", "Power BI", "Excel", "Spring Boot",
  "DevOps", "Terraform", "Communication"
];

// Pre-seeded applications for demo (Removing default apps as requested)
const DEFAULT_APPS = [];

// ========== State ==========
let studentProfile = { name: "", cgpa: 0, backlogs: 0, skills: [] };
let selectedSkills = new Set();
let applications = JSON.parse(localStorage.getItem("pb_apps")) || DEFAULT_APPS;
let eligibilityChecked = false;

// ========== Init ==========
document.addEventListener("DOMContentLoaded", () => {
  renderSkillTags();
  renderCompanies();
  renderApplications();
  renderAlerts();
  updateStats();
  setupTabs();
  setupNotificationBell();

  // Restore saved profile
  const saved = localStorage.getItem("pb_profile");
  if (saved) {
    const p = JSON.parse(saved);
    document.getElementById("studentName").value = p.name || "";
    document.getElementById("studentCGPA").value = p.cgpa || "";
    document.getElementById("studentBacklogs").value = p.backlogs || 0;
    if (p.skills) {
      p.skills.forEach(s => selectedSkills.add(s));
      renderSkillTags();
    }
  }
});

// ========== Tabs ==========
function setupTabs() {
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const target = tab.dataset.tab;
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      document.getElementById(target).classList.add("active");
    });
  });
}

// ========== Skills Tags ==========
function renderSkillTags() {
  const container = document.getElementById("skillsContainer");
  container.innerHTML = ALL_SKILLS.map(skill =>
    `<span class="skill-tag ${selectedSkills.has(skill) ? 'selected' : ''}" 
          onclick="toggleSkill('${skill}')">${skill}</span>`
  ).join("");
}

function toggleSkill(skill) {
  if (selectedSkills.has(skill)) selectedSkills.delete(skill);
  else selectedSkills.add(skill);
  renderSkillTags();
}

// ========== Eligibility Check ==========
function checkEligibility() {
  const name = document.getElementById("studentName").value.trim();
  const cgpa = parseFloat(document.getElementById("studentCGPA").value);
  const backlogs = parseInt(document.getElementById("studentBacklogs").value) || 0;

  if (!name) { showToast("Please enter your name", "error"); return; }
  if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) { showToast("Enter a valid CGPA (0-10)", "error"); return; }

  studentProfile = { name, cgpa, backlogs, skills: [...selectedSkills] };
  localStorage.setItem("pb_profile", JSON.stringify(studentProfile));
  
  // Clear existing applications when eligibility is checked manually
  if (!eligibilityChecked) {
    applications = [];
    localStorage.setItem("pb_apps", JSON.stringify(applications));
    renderApplications();
  }
  
  eligibilityChecked = true;

  renderCompanies();
  updateStats();
  showToast(`Eligibility checked for ${name}!`, "success");
}

function isEligible(role) {
  if (!eligibilityChecked) return null;
  const cgpaOk = studentProfile.cgpa >= role.minCGPA;
  const backlogOk = studentProfile.backlogs <= role.maxBacklogs;
  const skillsOk = role.skills.some(s => studentProfile.skills.includes(s));
  return cgpaOk && backlogOk && skillsOk;
}

function isCompanyEligible(company) {
  if (!eligibilityChecked) return null;
  return company.roles.some(r => isEligible(r));
}

// ========== Render Companies ==========
function renderCompanies() {
  const grid = document.getElementById("companiesGrid");
  grid.innerHTML = COMPANIES.map((company, ci) => {
    const eligible = isCompanyEligible(company);
    const badgeClass = eligible === null ? "unchecked" : eligible ? "eligible" : "not-eligible";
    const badgeText = eligible === null ? "Check Eligibility" : eligible ? "✓ Eligible" : "✗ Not Eligible";
    const hasApplied = applications.some(a => a.company === company.name);

    return `
      <div class="company-card" style="animation-delay: ${ci * 0.05}s">
        <div class="company-card-header">
          <div class="company-logo" style="background:${company.color}20; color:${company.color}">
            ${company.initials}
          </div>
          <div class="company-info">
            <h3>${company.name}</h3>
            <span class="company-type">${company.type}</span>
          </div>
          <span class="eligibility-badge ${badgeClass}">${badgeText}</span>
        </div>
        <div class="company-card-body">
          <ul class="roles-list">
            ${company.roles.slice(0, 4).map(role => {
              const roleElig = isEligible(role);
              const roleColor = roleElig === null ? "inherit" : roleElig ? "#34d399" : "#fb7185";
              return `
                <li class="role-item">
                  <div>
                    <div class="role-name" style="color:${roleColor}">${role.title}</div>
                    <div class="role-meta">CGPA ≥ ${role.minCGPA} · ${role.openings} openings</div>
                  </div>
                  <span class="role-package">${role.package}</span>
                </li>`;
            }).join("")}
            ${company.roles.length > 4 ? `<li class="role-item"><span class="role-meta">+${company.roles.length - 4} more roles</span></li>` : ""}
          </ul>
        </div>
        <div class="company-card-footer">
          <button class="btn-apply primary" 
                  onclick="applyToCompany(${ci})" 
                  ${(!eligible || hasApplied) ? 'disabled' : ''}>
            ${hasApplied ? '✓ Applied' : eligible === false ? 'Not Eligible' : 'Apply Now'}
          </button>
          <button class="btn-apply secondary" onclick="openDetailsModal(${ci})">
            Details
          </button>
        </div>
      </div>`;
  }).join("");
}

// ========== Direct Apply Logic ==========
function applyToCompany(companyIndex) {
  const company = COMPANIES[companyIndex];
  const eligibleRoles = company.roles.filter(r => isEligible(r));

  if (eligibleRoles.length === 0) return;

  // Apply to the first eligible role (often the highest package or closest match)
  const role = eligibleRoles[0].title;

  if (applications.find(a => a.company === company.name && a.role === role)) {
    showToast("Already applied for this role!", "error");
    return;
  }

  applications.push({
    company: company.name,
    role: role,
    status: "applied",
    date: new Date().toISOString().split("T")[0]
  });

  localStorage.setItem("pb_apps", JSON.stringify(applications));
  
  // Re-render UI
  renderCompanies();
  renderApplications();
  updateStats();
  
  // Switch to applications tab to show the new application visually
  document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
  document.querySelector('[data-tab="applicationsTab"]').classList.add("active");
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
  document.getElementById("applicationsTab").classList.add("active");
  
  // Professional toaster notification
  showToast(`Successfully applied to ${company.name} (${role})!`, "success");
}

// ========== Details Modal ==========
function openDetailsModal(companyIndex) {
  const company = COMPANIES[companyIndex];
  const modal = document.getElementById("modalOverlay");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <h2>${company.name}</h2>
    <p class="modal-sub">${company.type}</p>
    <div class="modal-details">
      ${company.roles.map(role => {
        const elig = isEligible(role);
        const statusIcon = elig === null ? "⚪" : elig ? "🟢" : "🔴";
        return `
          <div style="background: rgba(255,255,255,0.03); border-radius: 10px; padding: 14px; margin-bottom: 8px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span style="font-weight:600; font-size:14px;">${statusIcon} ${role.title}</span>
              <span style="color:#34d399; font-weight:700; font-size:14px;">${role.package}</span>
            </div>
            <div style="font-size:12px; color:rgba(255,255,255,0.5); margin-bottom:8px;">
              Min CGPA: ${role.minCGPA} · Max Backlogs: ${role.maxBacklogs} · ${role.openings} openings
            </div>
            <div class="modal-skills">
              ${role.skills.map(s => {
                const has = studentProfile.skills.includes(s);
                return `<span class="tag" style="${has ? '' : 'opacity:0.5'}">${s}</span>`;
              }).join("")}
            </div>
          </div>`;
      }).join("")}
    </div>
    <div class="modal-actions">
      <button class="btn-apply secondary" onclick="closeModal()" style="flex:1">Close</button>
    </div>`;

  modal.classList.add("active");
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
}

// ========== Applications ==========
function renderApplications() {
  const list = document.getElementById("applicationsList");
  const countEl = document.getElementById("appCount");
  
  if (countEl) {
    countEl.textContent = `${applications.length} application${applications.length !== 1 ? 's' : ''}`;
  }

  if (applications.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        <h3>No applications yet</h3>
        <p>Check your eligibility and apply to companies to get started.</p>
      </div>`;
    return;
  }

  list.innerHTML = applications.map((app, i) => {
    const company = COMPANIES.find(c => c.name === app.company);
    const color = company ? company.color : "#6366f1";
    const initials = company ? company.initials : app.company.substring(0, 2);

    return `
      <div class="application-item">
        <div class="app-logo" style="background:${color}20; color:${color}">${initials}</div>
        <div class="app-info">
          <h4>${app.company} – ${app.role}</h4>
          <p>Applied on ${app.date}</p>
        </div>
        <span class="app-status ${app.status}">${app.status.charAt(0).toUpperCase() + app.status.slice(1)}</span>
        <span class="app-date">${formatRelativeDate(app.date)}</span>
        <button class="btn-withdraw" onclick="withdrawApp(${i})">Withdraw</button>
      </div>`;
  }).join("");
}

function withdrawApp(index) {
  const app = applications[index];
  applications.splice(index, 1);
  localStorage.setItem("pb_apps", JSON.stringify(applications));
  renderApplications();
  renderCompanies();
  updateStats();
  showToast(`Withdrew application from ${app.company}`, "info");
}

function formatRelativeDate(dateStr) {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  return `${diff} days ago`;
}

// ========== Stats ==========
function updateStats() {
  const total = COMPANIES.length;
  const eligible = eligibilityChecked ? COMPANIES.filter(c => isCompanyEligible(c)).length : 0;
  const applied = new Set(applications.map(a => a.company)).size;

  // Calculate average package of eligible companies
  let pkgSum = 0, pkgCount = 0;
  if (eligibilityChecked) {
    COMPANIES.forEach(c => {
      c.roles.forEach(r => {
        if (isEligible(r) && r.package.includes("LPA")) {
          pkgSum += parseFloat(r.package);
          pkgCount++;
        }
      });
    });
  }
  const avgPkg = pkgCount > 0 ? (pkgSum / pkgCount).toFixed(1) : "—";

  document.getElementById("statTotal").textContent = total;
  document.getElementById("statEligible").textContent = eligible;
  document.getElementById("statApplied").textContent = applied;
  document.getElementById("statAvgPkg").textContent = avgPkg === "—" ? avgPkg : avgPkg + " LPA";
}

// ========== Alerts ==========
function renderAlerts() {
  const list = document.getElementById("alertsList");
  const alerts = [
    { type: "urgent", title: "Amazon Hiring Drive", desc: "Registrations close tomorrow. Apply now for SDE & Cloud roles!", time: "2 hrs ago" },
    { type: "info", title: "Google Summer Intern", desc: "Google has started accepting applications for SDE Internships 2026.", time: "5 hrs ago" },
    { type: "success", title: "Accenture Results Out", desc: "Check your application status — shortlists have been updated.", time: "1 day ago" },
    { type: "warning", title: "Profile Incomplete", desc: "Add your skills to improve eligibility matches across all companies.", time: "2 days ago" },
    { type: "info", title: "TCS NQT Registration", desc: "TCS National Qualifier Test registration opens next week.", time: "3 days ago" },
    { type: "success", title: "Wipro WILP 2026", desc: "Work-Integrated Learning Programme applications now open.", time: "4 days ago" }
  ];

  const iconSVGs = {
    urgent: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    info: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
    success: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    warning: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
  };

  list.innerHTML = alerts.map(a => `
    <div class="alert-item ${a.type}">
      <div class="alert-icon">${iconSVGs[a.type]}</div>
      <div class="alert-content">
        <h4>${a.title}</h4>
        <p>${a.desc}</p>
      </div>
      <span class="alert-time">${a.time}</span>
    </div>
  `).join("");
}

// ========== Notification Bell ==========
function setupNotificationBell() {
  document.getElementById("notifBell").addEventListener("click", () => {
    // Switch to alerts tab
    document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
    document.querySelector('[data-tab="alertsTab"]').classList.add("active");
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    document.getElementById("alertsTab").classList.add("active");
  });
}

// ========== Toast ==========
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  const icons = {
    success: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    error: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    info: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`
  };

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `${icons[type] || icons.info} ${message}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// Close modal on outside click
document.addEventListener("click", (e) => {
  if (e.target.id === "modalOverlay") closeModal();
});

// Close modal on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
