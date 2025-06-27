import { Logo } from './Logo.js'

export function Navigation() {
    return `
        <nav class="bg-white shadow-lg sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    ${Logo()}
                    
                    <!-- Desktop Menu -->
                    <div class="hidden md:flex space-x-8">
                        <a href="#pocetna" class="text-chinese-black hover:text-chinese-red transition-colors duration-300 font-medium">Početna</a>
                        <a href="#o-nama" class="text-chinese-black hover:text-chinese-red transition-colors duration-300 font-medium">O nama</a>
                        <a href="#meni" class="text-chinese-black hover:text-chinese-red transition-colors duration-300 font-medium">Meni</a>
                        <a href="#lokacije" class="text-chinese-black hover:text-chinese-red transition-colors duration-300 font-medium">Lokacije</a>
                        <a href="#kontakt" class="text-chinese-black hover:text-chinese-red transition-colors duration-300 font-medium">Kontakt</a>
                    </div>
                    
                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-btn" class="md:hidden text-chinese-black hover:text-chinese-red">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                
                <!-- Mobile Menu -->
                <div id="mobile-menu" class="hidden md:hidden pb-4">
                    <div class="flex flex-col space-y-3">
                        <a href="#pocetna" class="text-chinese-black hover:text-chinese-red transition-colors duration-300 font-medium">Početna</a>
                        <a href="#o-nama" class="text-chinese-black hover:text-chinese-red transition-colors duration-300 font-medium">O nama</a>
                        <a href="#meni" class="text-chinese-black hover:text-chinese-red transition-colors duration-300 font-medium">Meni</a>
                        <a href="#lokacije" class="text-chinese-black hover:text-chinese-red transition-colors duration-300 font-medium">Lokacije</a>
                        <a href="#kontakt" class="text-chinese-black hover:text-chinese-red transition-colors duration-300 font-medium">Kontakt</a>
                    </div>
                </div>
            </div>
        </nav>
    `
}