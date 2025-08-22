function createCircularProgress(
    score,
    maxScore = 10,
    size = 120,
    strokeWidth = 8
) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = (score / maxScore) * 100;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const innerRadius = radius - strokeWidth / 2;

  // Calculate angle for the indicator position (0° is at the top, clockwise)
  const angle = (percentage / 100) * 360 - 90; // -90 to start from top
  const indicatorRadius = radius - strokeWidth / 2;
  const indicatorX = size / 2 + indicatorRadius * Math.cos((angle * Math.PI) / 180);
  const indicatorY = size / 2 + indicatorRadius * Math.sin((angle * Math.PI) / 180);

  // Generate unique IDs for gradients
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
  const backgroundGradientId = `bg-gradient-${Math.random().toString(36).substr(2, 9)}`;

  return `
    <div class="relative flex flex-col items-center">
      <div class="relative">
        <svg width="${size}" height="${size}" class="transform -rotate-90">
          <!-- Define gradients -->
          <defs>
            <!-- Background gradient (full circle) -->
            <linearGradient id="${backgroundGradientId}" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#ef4444;stop-opacity:1" />
              <stop offset="50%" style="stop-color:#facc15;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#22c55e;stop-opacity:1" />
            </linearGradient>
            
            <!-- Progress gradient -->
            <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#ef4444;stop-opacity:1" />
              <stop offset="50%" style="stop-color:#facc15;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#22c55e;stop-opacity:1" />
            </linearGradient>
          </defs>

          <!-- White background circle -->
          <circle cx="${size / 2}" cy="${size / 2}" r="${innerRadius}" fill="white" />
          
          <!-- Background track (light gray) -->
          <circle 
            cx="${size / 2}" 
            cy="${size / 2}" 
            r="${radius}" 
            stroke="#e5e7eb" 
            stroke-width="${strokeWidth}" 
            fill="transparent" 
            opacity="0.3"
          />
          
          <!-- Full gradient background circle (subtle) -->
          <circle 
            cx="${size / 2}" 
            cy="${size / 2}" 
            r="${radius}" 
            stroke="url(#${backgroundGradientId})" 
            stroke-width="${strokeWidth*1.35}" 
            fill="transparent" 
            opacity="0"
          />
          
          <!-- Progress circle with gradient -->
          <circle 
            cx="${size / 2}" 
            cy="${size / 2}" 
            r="${radius}" 
            stroke="url(#${gradientId})" 
            stroke-width="${strokeWidth * 1.35}" 
            fill="transparent" 
            stroke-linecap="round" 
            stroke-dasharray="${strokeDasharray}" 
            stroke-dashoffset="${strokeDashoffset}" 
            class="transition-all duration-500 ease-out" 
            style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));"
          />
          

        </svg>
        
        <!-- Score text overlay -->
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <span class="text-xl font-bold text-gray-800">${score.toFixed(1)}</span>
          <span class="text-xs text-gray-500 font-medium">out of ${maxScore}</span>
        </div>
      </div>
    </div>
  `;
}

function createTestWinnerBadge(place) {
  // Only show TEST WINNER badge for 1st place
  if (place !== '1ST PLACE') return '';

  return `
    <div class="absolute -top-28 -right-2 z-20 w-32 sm:w-40 lg:w-44 rounded-lg border border-yellow-400 shadow-[0_4px_12px_rgba(0,0,0,0.2)] bg-gradient-to-b from-yellow-200 to-yellow-100 p-1 sm:p-1.5">
      <div class="border border-black">
        <div class="text-center font-bold text-xs sm:text-sm text-black">TEST</div>
        <div class="text-center font-bold text-sm sm:text-lg text-black mb-1">WINNER</div>
        
        <div class="grid grid-cols-2 border-t border-black text-[8px] sm:text-[10px]">
          <div class="bg-black text-white text-center flex items-center justify-center p-1 sm:p-1.5 font-semibold">
            <span class="text-[7px] sm:text-[10px]">The big<br />product<br />test</span>
          </div>
          <div class="bg-white text-black flex flex-col items-center justify-center p-1 sm:p-1.5 font-bold">
            <span class="text-[8px] sm:text-[10px]">VERY<br />GOOD<br /></span>
            <span class="font-normal text-[7px] sm:text-[10px]">(9.5/10)</span>
          </div>
          
          <div class="bg-red-600 text-white flex flex-col items-center justify-center p-1 sm:p-1.5">
            <div class="text-lg sm:text-2xl font-bold leading-none">✓</div>
            <span class="text-[6px] sm:text-[8px] font-semibold text-center">HEALTH<br />COMPARISON</span>
          </div>
          <div class="bg-white border-t border-black text-black p-1 sm:p-1.5 flex flex-col justify-center">
            <p class="text-[7px] sm:text-[9px]">Tested based on<br />quality criteria</p>
            <p class="mt-1 font-medium text-[7px] sm:text-[9px]">Issue 01/2025</p>
            <p class="mt-1 text-[6px] sm:text-[8px] leading-tight">www.gesundheits-<br />vergleichdeutschland.<br>de</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function createProductCard({
                             place,
                             title,
                             from,
                             description,
                             price,
                             image,
                             ratings,
                             badgeRating,
                             advantages,
                             disadvantages,
                             productLink,
                           }) {
  // Determine styling based on place
  const isFirstPlace = place === '1ST PLACE';
  const placeBadgeClasses = isFirstPlace
      ? 'bg-yellow-200 text-black'
      : 'bg-white text-green-700';

  return `
  <div class="relative mx-auto bg-teal-light rounded-lg shadow-md overflow-visible">
    ${createTestWinnerBadge(place)}
    
    <!-- Product Review Container -->
    <div class="ProductReview p-4">
      <!-- Header Section -->
      <div class="border-b border-gray-200 pb-6">
        <div class="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <span class="inline-block ${placeBadgeClasses} px-3 py-1 rounded-full text-sm font-medium mb-2">${place}</span>
            <h1 class="text-2xl font-bold text-gray-900">${title}</h1>
            <p class="text-gray-600">by ${from}</p>
          </div>
        </div>

        <!-- Product Description -->
        <div class="mt-4 text-gray-700">
          <p>${description}</p>
        </div>

        <!-- Price -->
        <div class="mt-4">
          <strong>Price:</strong>
          <span class="text-blue-600">${price}</span>
        </div>
      </div>

      <!-- Body Section -->
      <div class="border-b border-gray-200 py-6">
        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-6">
          <!-- Product Image and Rating -->
          <div class="relative mx-auto">
            <img src="${image}" alt="${title}" class="w-48 sm:w-56 lg:w-48 max-w-xs mx-auto" />
            
            <!-- Rating Circle - Bottom Left of Image -->
            <div class="absolute bottom-2 -left-10 z-10 px-2 py-1">
              ${createCircularProgress(badgeRating, 10, 80, 6)}
            </div>
          </div>

          <!-- Scores -->
          <div class="space-y-4 mt-4 lg:mt-0">
            ${ratings
      .map(
          (rating) => `
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <strong class="font-medium text-gray-700">${
              rating.label
          }</strong>
                    <span class="font-bold">${
              rating.value
          }/10</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-green-500 h-2 rounded-full" style="width: ${
              rating.value * 10
          }%"></div>
                  </div>
                </div>
                `
      )
      .join('')}
          </div>
        </div>

        <!-- Pros and Cons -->
        <div class="mt-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h3 class="text-lg font-bold mb-3">Advantages</h3>
              <ul class="space-y-2">
                ${advantages
      .map(
          (adv) =>
              `<li class="flex items-start">
                        <span class="text-green-500 mr-2 mt-1">✓</span>
                        <span class="text-sm text-gray-700">${adv}</span>
                      </li>`
      )
      .join('')}
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-3">Disadvantages</h3>
              <ul class="space-y-2">
                ${disadvantages
      .map(
          (dis) =>
              `<li class="flex items-start">
                        <span class="text-red-500 mr-2 mt-1">✗</span>
                        <span class="text-sm text-gray-700">${dis}</span>
                      </li>`
      )
      .join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="mt-6 text-center">
          <a href="${productLink}" target="_blank" class="inline-block bg-body-btn-bg text-white font-medium py-3 px-6 rounded-lg hover:bg-green-700 transition">
            To the product
          </a>
        </div>
      </div>
    </div>
  </div>
  `;
}