import { Logo } from './Logo.js'

export function Navigation() {
    return `
        <nav class="relative bg-gradient-to-r from-chinese-red via-red-600 to-chinese-red shadow-2xl sticky top-0 z-50 overflow-hidden">
            <!-- Decorative top border -->
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-chinese-gold via-yellow-400 to-chinese-gold"></div>
            
            <!-- Decorative pattern overlay -->
            <div class="absolute inset-0 opacity-10">
                <div class="flex justify-around items-center h-full">
                    <div class="w-8 h-8 border-2 border-chinese-gold transform rotate-45"></div>
                    <div class="w-6 h-6 bg-chinese-gold rounded-full"></div>
                    <div class="w-8 h-8 border-2 border-chinese-gold transform rotate-45"></div>
                    <div class="w-6 h-6 bg-chinese-gold rounded-full"></div>
                    <div class="w-8 h-8 border-2 border-chinese-gold transform rotate-45"></div>
                    <div class="w-6 h-6 bg-chinese-gold rounded-full"></div>
                    <div class="w-8 h-8 border-2 border-chinese-gold transform rotate-45"></div>
                </div>
            </div>
            
            <!-- Golden decorative stripes -->
            <div class="absolute top-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-chinese-gold to-transparent opacity-60"></div>
            <div class="absolute bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-chinese-gold to-transparent opacity-60"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div class="flex justify-between items-center h-20">
                    <div class="relative z-10">
                        ${Logo()}
                    </div>
                    
                    <!-- Desktop Menu -->
                    <div class="hidden md:flex space-x-8 relative z-10">
                        <a href="#pocetna" class="text-white hover:text-chinese-gold transition-all duration-300 font-medium text-lg relative group">
                            Početna
                            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-chinese-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#o-nama" class="text-white hover:text-chinese-gold transition-all duration-300 font-medium text-lg relative group">
                            O nama
                            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-chinese-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#meni" class="text-white hover:text-chinese-gold transition-all duration-300 font-medium text-lg relative group">
                            Meni
                            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-chinese-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#lokacije" class="text-white hover:text-chinese-gold transition-all duration-300 font-medium text-lg relative group">
                            Lokacije
                            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-chinese-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#kontakt" class="text-white hover:text-chinese-gold transition-all duration-300 font-medium text-lg relative group">
                            Kontakt
                            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-chinese-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>
                    
                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-btn" class="md:hidden text-white hover:text-chinese-gold relative z-10 p-2">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                
                <!-- Mobile Menu -->
                <div id="mobile-menu" class="hidden md:hidden pb-4 relative z-10">
                    <div class="flex flex-col space-y-3 bg-chinese-red bg-opacity-90 rounded-lg p-4 mt-2">
                        <a href="#pocetna" class="text-white hover:text-chinese-gold transition-colors duration-300 font-medium">Početna</a>
                        <a href="#o-nama" class="text-white hover:text-chinese-gold transition-colors duration-300 font-medium">O nama</a>
                        <a href="#meni" class="text-white hover:text-chinese-gold transition-colors duration-300 font-medium">Meni</a>
                        <a href="#lokacije" class="text-white hover:text-chinese-gold transition-colors duration-300 font-medium">Lokacije</a>
                        <a href="#kontakt" class="text-white hover:text-chinese-gold transition-colors duration-300 font-medium">Kontakt</a>
                    </div>
                </div>
            </div>
            
            <!-- Decorative bottom border -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-chinese-gold via-yellow-400 to-chinese-gold"></div>
        </nav>
    `
}