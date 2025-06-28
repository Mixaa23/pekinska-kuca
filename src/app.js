import { Logo } from './components/Logo.js'
import { Navigation } from './components/Navigation.js'
import { Hero } from './components/Hero.js'
import { Menu } from './components/Menu.js'
import { Locations } from './components/Locations.js'
import { Footer } from './components/Footer.js'
import { ReservationModal } from './components/ReservationModal.js'

export function createApp() {
    const app = document.getElementById('app')
    
    app.innerHTML = `
        <div class="min-h-screen bg-chinese-cream">
            ${Navigation()}
            ${Hero()}
            ${Menu()}
            ${Locations()}
            ${Footer()}
            ${ReservationModal()}
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
    
    // Background slideshow functionality
    const slides = document.querySelectorAll('.slide')
    let currentSlide = 0
    
    function nextSlide() {
        if (slides.length === 0) return
        
        slides[currentSlide].classList.remove('active')
        currentSlide = (currentSlide + 1) % slides.length
        slides[currentSlide].classList.add('active')
    }
    
    // Change slide every 5 seconds
    if (slides.length > 0) {
        setInterval(nextSlide, 5000)
    }
    
    // Reservation Modal Functionality
    const reservationModal = document.getElementById('reservation-modal')
    const successModal = document.getElementById('success-modal')
    const reservationForm = document.getElementById('reservation-form')
    const closeModalBtn = document.getElementById('close-modal')
    const closeSuccessModalBtn = document.getElementById('close-success-modal')
    const restaurantNameElement = document.getElementById('restaurant-name')
    const restaurantInput = document.getElementById('restaurant')
    
    // Set minimum date to today
    const dateInput = document.getElementById('date')
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0]
        dateInput.min = today
    }
    
    // Open reservation modal
    document.querySelectorAll('.reserve-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const restaurant = e.target.getAttribute('data-restaurant')
            const restaurantName = e.target.getAttribute('data-restaurant-name')
            
            restaurantNameElement.textContent = restaurantName
            restaurantInput.value = restaurant
            
            reservationModal.classList.remove('hidden')
            document.body.style.overflow = 'hidden'
        })
    })
    
    // Close modals
    function closeModal() {
        reservationModal.classList.add('hidden')
        successModal.classList.add('hidden')
        document.body.style.overflow = 'auto'
        reservationForm.reset()
    }
    
    closeModalBtn.addEventListener('click', closeModal)
    closeSuccessModalBtn.addEventListener('click', closeModal)
    
    // Close modal when clicking outside
    reservationModal.addEventListener('click', (e) => {
        if (e.target === reservationModal) {
            closeModal()
        }
    })
    
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            closeModal()
        }
    })
    
    // Handle form submission
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const formData = new FormData(reservationForm)
        const reservationData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            date: formData.get('date'),
            time: formData.get('time'),
            guests: formData.get('guests'),
            occasion: formData.get('occasion'),
            specialRequests: formData.get('specialRequests'),
            restaurant: formData.get('restaurant')
        }
        
        // Format date for display
        const dateObj = new Date(reservationData.date)
        const formattedDate = dateObj.toLocaleDateString('sr-RS', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        
        // Get restaurant name for display
        const restaurantNames = {
            'centar': 'Centar - Knez Mihailova 25',
            'novi-beograd': 'Novi Beograd - Bulevar Mihajla Pupina 10'
        }
        
        // Display reservation details
        const reservationDetails = document.getElementById('reservation-details')
        reservationDetails.innerHTML = `
            <div class="space-y-2">
                <div><strong>Ime:</strong> ${reservationData.firstName} ${reservationData.lastName}</div>
                <div><strong>Telefon:</strong> ${reservationData.phone}</div>
                ${reservationData.email ? `<div><strong>Email:</strong> ${reservationData.email}</div>` : ''}
                <div><strong>Restoran:</strong> ${restaurantNames[reservationData.restaurant]}</div>
                <div><strong>Datum:</strong> ${formattedDate}</div>
                <div><strong>Vreme:</strong> ${reservationData.time}</div>
                <div><strong>Broj gostiju:</strong> ${reservationData.guests}</div>
                ${reservationData.occasion ? `<div><strong>Povod:</strong> ${getOccasionText(reservationData.occasion)}</div>` : ''}
                ${reservationData.specialRequests ? `<div><strong>Posebni zahtevi:</strong> ${reservationData.specialRequests}</div>` : ''}
            </div>
        `
        
        // Here you would normally send the data to your backend
        console.log('Reservation data:', reservationData)
        
        // Show success modal
        reservationModal.classList.add('hidden')
        successModal.classList.remove('hidden')
    })
    
    // Helper function to get occasion text
    function getOccasionText(occasion) {
        const occasions = {
            'birthday': 'Rođendan',
            'anniversary': 'Godišnjica',
            'business': 'Poslovni ručak/večera',
            'date': 'Romantična večera',
            'family': 'Porodični obrok',
            'celebration': 'Proslava',
            'other': 'Ostalo'
        }
        return occasions[occasion] || occasion
    }
    
    // Phone number formatting
    const phoneInput = document.getElementById('phone')
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '')
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = value
                } else if (value.length <= 6) {
                    value = value.slice(0, 3) + '-' + value.slice(3)
                } else {
                    value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10)
                }
            }
            e.target.value = value
        })
    }
}

function getOccasionText(occasion) {
    const occasions = {
        'birthday': 'Rođendan',
        'anniversary': 'Godišnjica',
        'business': 'Poslovni ručak/večera',
        'date': 'Romantična večera',
        'family': 'Porodični obrok',
        'celebration': 'Proslava',
        'other': 'Ostalo'
    }
    return occasions[occasion] || occasion
}