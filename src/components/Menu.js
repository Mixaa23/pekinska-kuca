export function Menu() {
    return `
        <section id="meni" class="py-20 bg-chinese-cream relative overflow-hidden">
            <!-- Decorative background elements -->
            <div class="absolute inset-0 opacity-5">
                <div class="absolute top-10 left-10 w-32 h-32 border-2 border-chinese-gold rounded-full"></div>
                <div class="absolute bottom-20 right-20 w-24 h-24 border-2 border-chinese-gold rounded-full"></div>
                <div class="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-chinese-gold transform rotate-45"></div>
            </div>
            
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-chinese-red mb-4 font-chinese">菜单</h2>
                    <h3 class="text-3xl font-bold text-chinese-red mb-4">Naš Meni</h3>
                    <p class="text-xl text-gray-700 max-w-2xl mx-auto">
                        Otkrijte bogatu paletu ukusa kroz naše pažljivo odabrane specijalitete
                    </p>
                </div>
                
                <!-- Complete Chinese Scroll Container -->
                <div class="relative max-w-4xl mx-auto">
                    <!-- Top Scroll Section with Cylinder -->
                    <div class="relative">
                        <!-- Horizontal Cylinder -->
                        <div class="relative mb-2 flex justify-center">
                            <div class="relative w-full max-w-2xl">
                                <!-- Main horizontal cylinder -->
                                <div class="w-full h-6 bg-gradient-to-b from-amber-700 via-amber-600 to-amber-800 rounded-full shadow-lg relative overflow-hidden">
                                    <!-- Wood grain effect -->
                                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-40"></div>
                                    <div class="absolute top-0.5 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60"></div>
                                    <div class="absolute bottom-0.5 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-900 to-transparent opacity-60"></div>
                                    
                                    <!-- Decorative bands -->
                                    <div class="absolute left-8 top-0 bottom-0 w-1 bg-chinese-gold opacity-80"></div>
                                    <div class="absolute right-8 top-0 bottom-0 w-1 bg-chinese-gold opacity-80"></div>
                                    <div class="absolute left-16 top-0 bottom-0 w-0.5 bg-yellow-400 opacity-60"></div>
                                    <div class="absolute right-16 top-0 bottom-0 w-0.5 bg-yellow-400 opacity-60"></div>
                                </div>
                                
                                <!-- Left end cap -->
                                <div class="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-8 bg-gradient-to-b from-amber-800 via-amber-700 to-amber-900 rounded-full shadow-md">
                                    <div class="absolute inset-0.5 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full"></div>
                                    <div class="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-chinese-gold rounded-full opacity-80"></div>
                                    <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-amber-900 rounded-full"></div>
                                </div>
                                
                                <!-- Right end cap -->
                                <div class="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-8 bg-gradient-to-b from-amber-800 via-amber-700 to-amber-900 rounded-full shadow-md">
                                    <div class="absolute inset-0.5 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full"></div>
                                    <div class="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-chinese-gold rounded-full opacity-80"></div>
                                    <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-amber-900 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Top Red Scroll Section -->
                        <div class="bg-gradient-to-b from-chinese-red via-red-600 to-chinese-red rounded-t-lg shadow-lg relative">
                            <!-- Golden decorative border -->
                            <div class="absolute inset-0 border-4 border-chinese-gold rounded-t-lg border-b-0"></div>
                            
                            <!-- Golden decorative patterns on sides -->
                            <div class="absolute left-2 top-4 bottom-0 w-6 bg-gradient-to-b from-chinese-gold via-yellow-500 to-chinese-gold opacity-80 rounded-t-lg">
                                <div class="h-full flex flex-col justify-around items-center py-2">
                                    <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                    <div class="w-2 h-2 bg-yellow-300 transform rotate-45"></div>
                                    <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                </div>
                            </div>
                            
                            <div class="absolute right-2 top-4 bottom-0 w-6 bg-gradient-to-b from-chinese-gold via-yellow-500 to-chinese-gold opacity-80 rounded-t-lg">
                                <div class="h-full flex flex-col justify-around items-center py-2">
                                    <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                    <div class="w-2 h-2 bg-yellow-300 transform rotate-45"></div>
                                    <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                </div>
                            </div>
                            
                            <!-- Top section content -->
                            <div class="relative px-12 py-6 text-white">
                                <div class="text-center">
                                    <h3 class="text-3xl font-bold font-chinese text-chinese-gold mb-2">美食菜单</h3>
                                    <div class="w-24 h-1 bg-chinese-gold mx-auto rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Main Scroll Content -->
                    <div class="relative bg-gradient-to-b from-chinese-red via-red-600 to-chinese-red shadow-2xl">
                        <!-- Golden decorative border -->
                        <div class="absolute inset-0 border-l-4 border-r-4 border-chinese-gold"></div>
                        
                        <!-- Golden decorative patterns on sides -->
                        <div class="absolute left-2 top-0 bottom-0 w-6 bg-gradient-to-b from-chinese-gold via-yellow-500 to-chinese-gold opacity-80">
                            <div class="h-full flex flex-col justify-around items-center py-4">
                                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                <div class="w-2 h-2 bg-yellow-300 transform rotate-45"></div>
                                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                <div class="w-2 h-2 bg-yellow-300 transform rotate-45"></div>
                                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                <div class="w-2 h-2 bg-yellow-300 transform rotate-45"></div>
                                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                <div class="w-2 h-2 bg-yellow-300 transform rotate-45"></div>
                                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                <div class="w-2 h-2 bg-yellow-300 transform rotate-45"></div>
                                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                            </div>
                        </div>
                        
                        <div class="absolute right-2 top-0 bottom-0 w-6 bg-gradient-to-b from-chinese-gold via-yellow-500 to-chinese-gold opacity-80">
                            <div class="h-full flex flex-col justify-around items-center py-4">
                                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                <div class="w-2 h-2 bg-yellow-300 transform rotate-45"></div>
                                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                <div class="w-2 h-2 bg-yellow-300 transform rotate-45"></div>
                                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                <div class="w-2 h-2 bg-yellow-300 transform rotate-45"></div>
                                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                <div class="w-2 h-2 bg-yellow-300 transform rotate-45"></div>
                                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                <div class="w-2 h-2 bg-yellow-300 transform rotate-45"></div>
                                <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                            </div>
                        </div>
                        
                        <!-- Menu Content -->
                        <div class="relative px-12 py-8 text-white">
                            <!-- Menu Grid -->
                            <div class="grid md:grid-cols-2 gap-8">
                                <!-- Predjela -->
                                <div class="mb-8">
                                    <h4 class="text-2xl font-bold text-chinese-gold mb-4 font-chinese border-b-2 border-chinese-gold pb-2">
                                        前菜 • Predjela
                                    </h4>
                                    <div class="space-y-3">
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Prolećne rolnice</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Hrskave rolnice sa povrćem</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">450 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Dim Sum</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Tradicionalni kineski knedle</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">520 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Wonton supa</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Bogata supa sa knedlama</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">380 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Kineska salata</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Svež miks povrća</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">420 RSD</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Glavna jela -->
                                <div class="mb-8">
                                    <h4 class="text-2xl font-bold text-chinese-gold mb-4 font-chinese border-b-2 border-chinese-gold pb-2">
                                        主菜 • Glavna Jela
                                    </h4>
                                    <div class="space-y-3">
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Peking patka</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Tradicionalna pečena patka</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">1,200 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Kung Pao piletina</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Ljuta piletina sa kikirikijem</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">850 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Sweet & Sour svinjetina</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Slatko-kisela svinjetina</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">920 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Mongolska govedina</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Začinjena govedina</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">980 RSD</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Nudla i pirinač -->
                                <div class="mb-8">
                                    <h4 class="text-2xl font-bold text-chinese-gold mb-4 font-chinese border-b-2 border-chinese-gold pb-2">
                                        面条 • Nudla & Pirinač
                                    </h4>
                                    <div class="space-y-3">
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Chow Mein</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Pržene nudla sa povrćem</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">720 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Fried Rice</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Prženi pirinač sa jajima</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">650 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Lo Mein</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Meke nudla u sosu</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">680 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Pad Thai</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Azijske nudla sa kikirikijem</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">750 RSD</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Vegetarijanska jela -->
                                <div class="mb-8">
                                    <h4 class="text-2xl font-bold text-chinese-gold mb-4 font-chinese border-b-2 border-chinese-gold pb-2">
                                        素食 • Vegetarijanska
                                    </h4>
                                    <div class="space-y-3">
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Ma Po Tofu</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Začinjeni tofu u sosu</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">620 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Pohovano povrće</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Hrskavo sezonsko povrće</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">580 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Kineski brokoli</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Sa beli lukom i đumbir</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">520 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Vegetarian Spring Rolls</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Rolnice sa povrćem</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">420 RSD</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Deserti i Pića -->
                            <div class="grid md:grid-cols-2 gap-8 mt-8">
                                <!-- Deserti -->
                                <div class="mb-8">
                                    <h4 class="text-2xl font-bold text-chinese-gold mb-4 font-chinese border-b-2 border-chinese-gold pb-2">
                                        甜品 • Deserti
                                    </h4>
                                    <div class="space-y-3">
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Sesame Balls</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Kuglice sa susam</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">320 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Mango Pudding</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Kremasti mango puding</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">380 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Fortune Cookies</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Keksići sa porukom</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">250 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Fried Ice Cream</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Prženi sladoled</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">420 RSD</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Pića -->
                                <div class="mb-8">
                                    <h4 class="text-2xl font-bold text-chinese-gold mb-4 font-chinese border-b-2 border-chinese-gold pb-2">
                                        饮料 • Pića
                                    </h4>
                                    <div class="space-y-3">
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Kineski čaj</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Tradicionalni zeleni čaj</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">180 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Jasmine čaj</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Aromatični jasmin čaj</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">200 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Tsingtao pivo</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Kineski premium pivo</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">280 RSD</span>
                                        </div>
                                        <div class="flex justify-between items-center border-b border-yellow-600 pb-2">
                                            <div>
                                                <span class="font-medium text-lg">Lychee sok</span>
                                                <p class="text-sm text-yellow-200 opacity-80">Egzotični lychee sok</p>
                                            </div>
                                            <span class="text-chinese-gold font-bold text-lg">220 RSD</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Bottom Scroll Section -->
                    <div class="relative">
                        <!-- Bottom Red Scroll Section -->
                        <div class="bg-gradient-to-b from-chinese-red via-red-600 to-chinese-red rounded-b-lg shadow-lg relative">
                            <!-- Golden decorative border -->
                            <div class="absolute inset-0 border-4 border-chinese-gold rounded-b-lg border-t-0"></div>
                            
                            <!-- Golden decorative patterns on sides -->
                            <div class="absolute left-2 top-0 bottom-4 w-6 bg-gradient-to-b from-chinese-gold via-yellow-500 to-chinese-gold opacity-80 rounded-b-lg">
                                <div class="h-full flex flex-col justify-around items-center py-2">
                                    <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                    <div class="w-2 h-2 bg-yellow-300 transform rotate-45"></div>
                                    <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                </div>
                            </div>
                            
                            <div class="absolute right-2 top-0 bottom-4 w-6 bg-gradient-to-b from-chinese-gold via-yellow-500 to-chinese-gold opacity-80 rounded-b-lg">
                                <div class="h-full flex flex-col justify-around items-center py-2">
                                    <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                    <div class="w-2 h-2 bg-yellow-300 transform rotate-45"></div>
                                    <div class="w-3 h-3 bg-yellow-300 rounded-full"></div>
                                </div>
                            </div>
                            
                            <!-- Bottom section content -->
                            <div class="relative px-12 py-6 text-white">
                                <div class="text-center pt-2 border-t-2 border-chinese-gold">
                                    <p class="text-chinese-gold font-chinese text-lg">品尝正宗中华美食</p>
                                    <p class="text-yellow-200 text-sm mt-1">Uživajte u autentičnim kineskim ukusima</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Bottom Horizontal Cylinder -->
                        <div class="relative mt-2 flex justify-center">
                            <div class="relative w-full max-w-2xl">
                                <!-- Main horizontal cylinder -->
                                <div class="w-full h-6 bg-gradient-to-b from-amber-700 via-amber-600 to-amber-800 rounded-full shadow-lg relative overflow-hidden">
                                    <!-- Wood grain effect -->
                                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-40"></div>
                                    <div class="absolute top-0.5 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60"></div>
                                    <div class="absolute bottom-0.5 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-900 to-transparent opacity-60"></div>
                                    
                                    <!-- Decorative bands -->
                                    <div class="absolute left-8 top-0 bottom-0 w-1 bg-chinese-gold opacity-80"></div>
                                    <div class="absolute right-8 top-0 bottom-0 w-1 bg-chinese-gold opacity-80"></div>
                                    <div class="absolute left-16 top-0 bottom-0 w-0.5 bg-yellow-400 opacity-60"></div>
                                    <div class="absolute right-16 top-0 bottom-0 w-0.5 bg-yellow-400 opacity-60"></div>
                                </div>
                                
                                <!-- Left end cap -->
                                <div class="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-8 bg-gradient-to-b from-amber-800 via-amber-700 to-amber-900 rounded-full shadow-md">
                                    <div class="absolute inset-0.5 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full"></div>
                                    <div class="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-chinese-gold rounded-full opacity-80"></div>
                                    <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-amber-900 rounded-full"></div>
                                </div>
                                
                                <!-- Right end cap -->
                                <div class="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-8 bg-gradient-to-b from-amber-800 via-amber-700 to-amber-900 rounded-full shadow-md">
                                    <div class="absolute inset-0.5 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full"></div>
                                    <div class="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-chinese-gold rounded-full opacity-80"></div>
                                    <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-amber-900 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}