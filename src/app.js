import { Logo } from './components/Logo.js'
import { Navigation } from './components/Navigation.js'
import { Hero } from './components/Hero.js'
import { Menu } from './components/Menu.js'
import { Locations } from './components/Locations.js'
import { Footer } from './components/Footer.js'

export function createApp() {
    const app = document.getElementById('app')
    
    app.innerHTML = `
        <div class="min-h-screen bg-chinese-cream">
            ${Navigation()}
            ${Hero()}
            ${Menu()}
            ${Locations()}
            ${Footer()}
        </div>
    `
    
    // Add smooth scrolling functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute('href'))
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        })
    })
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden')
        })
    }
}