import { browser } from "$app/environment"
import { writable } from "svelte/store"

type Theme = 'Light' | 'Dark'

const userTheme = browser && localStorage.getItem
('color-scheme')

export const theme = writable(userTheme ?? 'Dark')

export function toggleTheme() {
    theme.update(currentTheme => {
        const newTheme = currentTheme === 'Dark' ? 'Light' : 
        'Dark'
        document.documentElement.setAttribute('color-scheme',
        newTheme)
        localStorage.setItem('color-scheme', newTheme)
        return newTheme
    })
}

export function setTheme(newTheme: Theme) {
    theme.set(newTheme)
}