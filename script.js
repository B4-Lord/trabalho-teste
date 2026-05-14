const btn = document.getElementById('themeToggle');
const root = document.body;


if (localStorage.getItem('theme') === 'light') root.classList.add('light');

const update = () => {
    const isLight = root.classList.contains('light');
    btn.setAttribute('aria-pressed', String(isLight));
};

update();

if (btn) {
    btn.addEventListener('click', () => {
        const isLight = root.classList.toggle('light');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        update();
    });
}
