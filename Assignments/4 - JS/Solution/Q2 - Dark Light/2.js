const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

function themeLight() {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
}

function themeDark() {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
}

function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === null) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            themeDark();
        }
        else {
            themeLight();
        }
    }
    else {
        savedTheme === 'dark' ? themeDark() : themeLight();
    }
}

setInitialTheme();
document.querySelector('#switch>button').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    currentTheme === 'dark' ? themeLight() : themeDark();
});
