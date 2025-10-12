// Theme toggle + year + project loader
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') document.body.classList.add('light');
themeToggle.textContent = document.body.classList.contains('light') ? '☾' : '☀︎';

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  themeToggle.textContent = isLight ? '☾' : '☀︎';
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Load projects
fetch('projects.json')
  .then(r => r.json())
  .then(projects => {
    const grid = document.getElementById('projectGrid');
    if (!Array.isArray(projects)) return;
    const html = projects.map(p => `
      <article class="card">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <ul>
          ${p.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div class="hero-cta">
          ${p.live ? `<a class="btn primary" href="${p.live}" target="_blank" rel="noopener">Live</a>` : ''}
          ${p.github ? `<a class="btn" href="${p.github}" target="_blank" rel="noopener">GitHub</a>` : ''}
        </div>
      </article>
    `).join('');
    grid.innerHTML = html;
  })
  .catch(() => {
    document.getElementById('projectGrid').innerHTML = '<p class="muted">Add your projects to <code>projects.json</code>.</p>';
  });
