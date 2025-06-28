export function ReservationModal() {
    return `
        <!-- Reservation Modal -->
        <div id="reservation-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center p-4">
            <div class="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                <!-- Modal Header -->
                <div class="bg-gradient-to-r from-chinese-red to-red-600 text-white p-6 rounded-t-lg relative">
                    <button id="close-modal" class="absolute top-4 right-4 text-white hover:text-chinese-gold transition-colors duration-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div class="flex items-center space-x-3">
                        <svg class="w-8 h-8 text-chinese-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10m-6-4h6"></path>
                        </svg>
                        <div>
                            <h3 class="text-2xl font-bold">Rezervacija stola</h3>
                            <p id="restaurant-name" class="text-chinese-gold font-medium"></p>
                        </div>
                    </div>
                </div>
                
                <!-- Modal Body -->
                <div class="p-6">
                    <form id="reservation-form" class="space-y-4">
                        <!-- Lični podaci -->
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">
                                    Ime *
                                </label>
                                <input type="text" id="firstName" name="firstName" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red focus:border-transparent">
                            </div>
                            <div>
                                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">
                                    Prezime *
                                </label>
                                <input type="text" id="lastName" name="lastName" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red focus:border-transparent">
                            </div>
                        </div>
                        
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
                                Broj telefona *
                            </label>
                            <input type="tel" id="phone" name="phone" required placeholder="06x-xxx-xxxx"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red focus:border-transparent">
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                                Email adresa
                            </label>
                            <input type="email" id="email" name="email" placeholder="vasa@email.com"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red focus:border-transparent">
                        </div>
                        
                        <!-- Datum i vreme -->
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="date" class="block text-sm font-medium text-gray-700 mb-1">
                                    Datum *
                                </label>
                                <input type="date" id="date" name="date" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red focus:border-transparent">
                            </div>
                            <div>
                                <label for="time" class="block text-sm font-medium text-gray-700 mb-1">
                                    Vreme *
                                </label>
                                <select id="time" name="time" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red focus:border-transparent">
                                    <option value="">Izaberite vreme</option>
                                    <option value="11:00">11:00</option>
                                    <option value="11:30">11:30</option>
                                    <option value="12:00">12:00</option>
                                    <option value="12:30">12:30</option>
                                    <option value="13:00">13:00</option>
                                    <option value="13:30">13:30</option>
                                    <option value="14:00">14:00</option>
                                    <option value="14:30">14:30</option>
                                    <option value="15:00">15:00</option>
                                    <option value="15:30">15:30</option>
                                    <option value="16:00">16:00</option>
                                    <option value="16:30">16:30</option>
                                    <option value="17:00">17:00</option>
                                    <option value="17:30">17:30</option>
                                    <option value="18:00">18:00</option>
                                    <option value="18:30">18:30</option>
                                    <option value="19:00">19:00</option>
                                    <option value="19:30">19:30</option>
                                    <option value="20:00">20:00</option>
                                    <option value="20:30">20:30</option>
                                    <option value="21:00">21:00</option>
                                    <option value="21:30">21:30</option>
                                    <option value="22:00">22:00</option>
                                    <option value="22:30">22:30</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label for="guests" class="block text-sm font-medium text-gray-700 mb-1">
                                Broj gostiju *
                            </label>
                            <select id="guests" name="guests" required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red focus:border-transparent">
                                <option value="">Izaberite broj gostiju</option>
                                <option value="1">1 osoba</option>
                                <option value="2">2 osobe</option>
                                <option value="3">3 osobe</option>
                                <option value="4">4 osobe</option>
                                <option value="5">5 osoba</option>
                                <option value="6">6 osoba</option>
                                <option value="7">7 osoba</option>
                                <option value="8">8 osoba</option>
                                <option value="9">9 osoba</option>
                                <option value="10">10+ osoba</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="occasion" class="block text-sm font-medium text-gray-700 mb-1">
                                Povod (opciono)
                            </label>
                            <select id="occasion" name="occasion"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red focus:border-transparent">
                                <option value="">Izaberite povod</option>
                                <option value="birthday">Rođendan</option>
                                <option value="anniversary">Godišnjica</option>
                                <option value="business">Poslovni ručak/večera</option>
                                <option value="date">Romantična večera</option>
                                <option value="family">Porodični obrok</option>
                                <option value="celebration">Proslava</option>
                                <option value="other">Ostalo</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="specialRequests" class="block text-sm font-medium text-gray-700 mb-1">
                                Posebni zahtevi (opciono)
                            </label>
                            <textarea id="specialRequests" name="specialRequests" rows="3" 
                                placeholder="Alergije, dijetetski zahtevi, posebne želje..."
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chinese-red focus:border-transparent resize-none"></textarea>
                        </div>
                        
                        <!-- Hidden field for restaurant -->
                        <input type="hidden" id="restaurant" name="restaurant" value="">
                        
                        <!-- Submit Button -->
                        <div class="pt-4">
                            <button type="submit" 
                                class="w-full bg-gradient-to-r from-chinese-red to-red-600 text-white py-3 px-6 rounded-md font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-chinese-red focus:ring-offset-2">
                                <span class="flex items-center justify-center space-x-2">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Potvrdi rezervaciju</span>
                                </span>
                            </button>
                        </div>
                        
                        <p class="text-xs text-gray-500 text-center mt-4">
                            * Obavezna polja. Kontaktiraćemo vas u roku od 2 sata radi potvrde rezervacije.
                        </p>
                    </form>
                </div>
            </div>
        </div>
        
        <!-- Success Modal -->
        <div id="success-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center p-4">
            <div class="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 text-center">
                <div class="mb-4">
                    <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Rezervacija poslata!</h3>
                    <p class="text-gray-600 mb-4">
                        Vaša rezervacija je uspešno poslata. Kontaktiraćemo vas u roku od 2 sata radi potvrde.
                    </p>
                    <div id="reservation-details" class="bg-gray-50 rounded-lg p-4 text-left text-sm">
                        <!-- Detalji rezervacije će biti ubačeni ovde -->
                    </div>
                </div>
                <button id="close-success-modal" 
                    class="bg-chinese-red text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
                    Zatvori
                </button>
            </div>
        </div>
    `
}