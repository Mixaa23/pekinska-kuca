export function Footer() {
    return `
        <footer id="kontakt" class="bg-chinese-black text-white py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-4 gap-8">
                    <div class="md:col-span-2">
                        <div class="flex items-center space-x-3 mb-6">
                            <svg width="40" height="48" viewBox="0 0 40 48" class="text-chinese-red">
                                <rect x="2" y="42" width="36" height="4" fill="currentColor" rx="1"/>
                                <rect x="8" y="32" width="24" height="12" fill="currentColor" rx="1"/>
                                <rect x="6" y="30" width="28" height="3" fill="currentColor" rx="1"/>
                                <path d="M0 30 L8 26 L32 26 L40 30 L35 28 L5 28 Z" fill="currentColor"/>
                                <rect x="12" y="22" width="16" height="8" fill="currentColor" rx="1"/>
                                <rect x="10" y="20" width="20" height="3" fill="currentColor" rx="1"/>
                                <path d="M4 20 L12 16 L28 16 L36 20 L31 18 L9 18 Z" fill="currentColor"/>
                                <rect x="16" y="12" width="8" height="8" fill="currentColor" rx="1"/>
                                <rect x="14" y="10" width="12" height="3" fill="currentColor" rx="1"/>
                                <path d="M8 10 L16 6 L24 6 L32 10 L27 8 L13 8 Z" fill="currentColor"/>
                                <circle cx="20" cy="4" r="3" fill="currentColor"/>
                            </svg>
                            <div>
                                <h3 class="text-2xl font-bold text-chinese-red font-chinese">北京屋</h3>
                                <p class="text-lg font-medium">Pekinska Kuća</p>
                            </div>
                        </div>
                        <p class="text-gray-300 mb-6 leading-relaxed">
                            Autentični ukusi Kine u srcu Srbije. Pridružite nam se za nezaboravno kulinsko iskustvo koje spaja tradiciju sa modernim pristupom.
                        </p>
                        <div class="flex space-x-4">
                            <a href="#" class="bg-chinese-red p-3 rounded-full hover:bg-red-700 transition-colors duration-300">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" class="bg-chinese-red p-3 rounded-full hover:bg-red-700 transition-colors duration-300">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                </svg>
                            </a>
                            <a href="#" class="bg-chinese-red p-3 rounded-full hover:bg-red-700 transition-colors duration-300">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold mb-4 text-chinese-gold">Brze veze</h4>
                        <ul class="space-y-2">
                            <li><a href="#pocetna" class="text-gray-300 hover:text-chinese-gold transition-colors duration-300">Početna</a></li>
                            <li><a href="#o-nama" class="text-gray-300 hover:text-chinese-gold transition-colors duration-300">O nama</a></li>
                            <li><a href="#meni" class="text-gray-300 hover:text-chinese-gold transition-colors duration-300">Meni</a></li>
                            <li><a href="#lokacije" class="text-gray-300 hover:text-chinese-gold transition-colors duration-300">Lokacije</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold mb-4 text-chinese-gold">Kontakt</h4>
                        <div class="space-y-3">
                            <div class="flex items-center">
                                <svg class="w-4 h-4 text-chinese-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <span class="text-gray-300">info@pekinskakuca.rs</span>
                            </div>
                            <div class="flex items-center">
                                <svg class="w-4 h-4 text-chinese-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <span class="text-gray-300">011/123-4567</span>
                            </div>
                            <div class="flex items-start">
                                <svg class="w-4 h-4 text-chinese-red mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span class="text-gray-300">Pon-Ned: 11:00-23:00</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-gray-700 mt-12 pt-8 text-center">
                    <p class="text-gray-400">
                        &copy; 2024 Pekinska Kuća. Sva prava zadržana. | Dizajn i razvoj: Web Studio
                    </p>
                </div>
            </div>
        </footer>
    `
}