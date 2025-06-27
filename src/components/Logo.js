export function Logo() {
    return `
        <div class="flex items-center space-x-3">
            <div class="relative">
                <!-- Pagoda Logo -->
                <svg width="40" height="48" viewBox="0 0 40 48" class="text-chinese-red">
                    <!-- Base -->
                    <rect x="2" y="42" width="36" height="4" fill="currentColor" rx="1"/>
                    
                    <!-- First Floor -->
                    <rect x="8" y="32" width="24" height="12" fill="currentColor" rx="1"/>
                    <rect x="6" y="30" width="28" height="3" fill="currentColor" rx="1"/>
                    <!-- Roof 1 -->
                    <path d="M0 30 L8 26 L32 26 L40 30 L35 28 L5 28 Z" fill="currentColor"/>
                    
                    <!-- Second Floor -->
                    <rect x="12" y="22" width="16" height="8" fill="currentColor" rx="1"/>
                    <rect x="10" y="20" width="20" height="3" fill="currentColor" rx="1"/>
                    <!-- Roof 2 -->
                    <path d="M4 20 L12 16 L28 16 L36 20 L31 18 L9 18 Z" fill="currentColor"/>
                    
                    <!-- Third Floor -->
                    <rect x="16" y="12" width="8" height="8" fill="currentColor" rx="1"/>
                    <rect x="14" y="10" width="12" height="3" fill="currentColor" rx="1"/>
                    <!-- Roof 3 -->
                    <path d="M8 10 L16 6 L24 6 L32 10 L27 8 L13 8 Z" fill="currentColor"/>
                    
                    <!-- Top ornament -->
                    <circle cx="20" cy="4" r="3" fill="currentColor"/>
                </svg>
            </div>
            <div>
                <h1 class="text-2xl font-bold text-chinese-red font-chinese">北京屋</h1>
                <p class="text-sm text-chinese-black font-medium">Pekinska Kuća</p>
            </div>
        </div>
    `
}