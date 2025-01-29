import { browser } from '$app/environment'

class Theme {
    current = browser ? localStorage.getItem('color-scheme') || 'light' : 'dark';

    toggle = () => {
        const theme = this.current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('color-scheme', theme);
        localStorage.setItem('color-scheme', theme);
        this.current = theme;
    }
}

export const theme = new Theme();
