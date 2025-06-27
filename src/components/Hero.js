export function Hero() {
    return `
        <section id="pocetna" class="relative text-white py-20 overflow-hidden">
            <!-- Background Image Slideshow -->
            <div class="absolute inset-0 bg-slideshow">
                <div class="slide active" style="background-image: url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'); background-size: cover; background-position: center;"></div>
                <div class="slide" style="background-image: url('https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg'); background-size: cover; background-position: center;"></div>
                <div class="slide" style="background-image: url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg'); background-size: cover; background-position: center;"></div>
                <div class="slide" style="background-image: url('https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg'); background-size: cover; background-position: center;"></div>
            </div>
            <div class="absolute inset-0 bg-black opacity-60"></div>
            
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h1 class="text-5xl md:text-7xl font-bold mb-6 font-chinese">
                        <span class="text-chinese-gold">北京屋</span>
                    </h1>
                    <h2 class="text-3xl md:text-5xl font-bold mb-8">Pekinska Kuća</h2>
                    <p class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                        Autentični ukusi Kine u srcu Srbije. Otkrijte bogatu tradiciju kineske kuhinje kroz naše pažljivo pripremljene specijalitete.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#meni" class="bg-chinese-gold text-chinese-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                            Pogledaj Meni
                        </a>
                        <a href="#lokacije" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-chinese-red transition-all duration-300">
                            Naše Lokacije
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="o-nama" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-bold text-chinese-red mb-6">Naša Priča</h2>
                        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                            Pekinska Kuća je osnovana sa vizijom da donese autentične ukuse Kine u Srbiju. Naši iskusni kuvari, obučeni u tradicionalnim kineskim tehnikama kuvanja, koriste samo najkvalitetnije sastojke da bi vam pružili nezaboravno kulinsko iskustvo.
                        </p>
                        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                            Kroz godine rada, postali smo sinonim za kvalitet i autentičnost u pripremi kineskih specijaliteta. Naša dva restorana pružaju toplu i gostoljubivu atmosferu gde se tradicija spaja sa modernim pristupom usluge.
                        </p>
                        <div class="flex items-center space-x-6">
                            <div class="text-center">
                                <div class="text-3xl font-bold text-chinese-red">15+</div>
                                <div class="text-sm text-gray-600">Godina iskustva</div>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl font-bold text-chinese-red">2</div>
                                <div class="text-sm text-gray-600">Lokacije</div>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl font-bold text-chinese-red">50+</div>
                                <div class="text-sm text-gray-600">Specijaliteta</div>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" alt="Kineski restoran" class="rounded-lg shadow-xl w-full h-96 object-cover">
                        <div class="absolute -bottom-6 -right-6 bg-chinese-red text-white p-6 rounded-lg shadow-lg">
                            <div class="text-2xl font-bold font-chinese">正宗</div>
                            <div class="text-sm">Autentično</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}