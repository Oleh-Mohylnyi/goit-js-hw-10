const themeSwitchRef = document.querySelector('input.theme-switch__toggle');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function setThemeLight() {
    bodyRef.classList.add(Theme.LIGHT);
    themeSwitchRef.checked = false;
}

function setThemeDark() {
    bodyRef.classList.add(Theme.DARK);
    themeSwitchRef.checked = true; 
}

if (localStorage['Theme']) {
    if (localStorage['Theme'] === Theme.LIGHT) {
        setThemeLight();
    } else {
        setThemeDark();
    }
} else {
    localStorage.setItem('Theme', Theme.LIGHT);
    setThemeLight();
    
};


themeSwitchRef.addEventListener(`change`, onThemeSwitch);

function onThemeSwitch() {
if (localStorage['Theme'] === Theme.LIGHT) {
    toggleClassBody();
    localStorage.setItem('Theme', Theme.DARK);
    } else {
    toggleClassBody();
    localStorage.setItem('Theme', Theme.LIGHT);
    }
}

function toggleClassBody() {
    bodyRef.classList.toggle(Theme.LIGHT);
    bodyRef.classList.toggle(Theme.DARK);
}

