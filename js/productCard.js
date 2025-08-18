// Reusable Product Card Component
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
                               productLink
                           }) {
    return `
  <div class="bg-teal-light rounded-2xl shadow mt-6 pb-6">
    <!-- Header -->
    <div class="mb-4">
      <span class="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded">${place}</span>
      <h2 class="text-2xl font-bold mt-2">${title}</h2>
      <p class="text-gray-500 text-sm">from ${from}</p>
      <p class="text-gray-700 mt-2 text-sm leading-relaxed">${description}</p>
      <p class="font-semibold mt-3">Price: ${price}</p>
    </div>

    <!-- Middle Section -->
    <div class="grid grid-cols-2 gap-6 items-center">
      <!-- Left: Image + Rating Badge -->
      <div class="relative">
        <img src="${image}" alt="${title}" class="w-40 mx-auto">
        <div class="absolute -bottom-4 -left-4 bg-white border-4 border-pink-200 rounded-full w-20 h-20 flex flex-col items-center justify-center shadow">
          <span class="font-bold text-lg">${badgeRating}</span>
          <span class="text-xs text-gray-500">out of 10</span>
        </div>
      </div>

      <!-- Right: Ratings -->
      <div class="space-y-3 text-sm">
        ${ratings.map(rating => `
          <div>
            <p class="flex justify-between"><span>${rating.label}</span><span>${rating.value}/10</span></p>
            <div class="w-full bg-gray-200 rounded h-2">
              <div class="bg-green-500 h-2 rounded" style="width:${rating.value * 10}%"></div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Advantages & Disadvantages -->
    <div class="grid grid-cols-2 gap-6 mt-10">
      <div>
        <h3 class="font-semibold mb-2">Advantages</h3>
        <ul class="space-y-2 text-sm text-gray-700">
          ${advantages.map(adv => `<li class="flex items-start"><span class="text-green-500 mr-2">✓</span> ${adv}</li>`).join("")}
        </ul>
      </div>
      <div>
        <h3 class="font-semibold mb-2">Disadvantages</h3>
        <ul class="space-y-2 text-sm text-gray-700">
          ${disadvantages.map(dis => `<li class="flex items-start"><span class="text-red-500 mr-2">✗</span> ${dis}</li>`).join("")}
        </ul>
      </div>
    </div>

    <!-- Button -->
    <div class="mt-8 text-center">
      <a href="${productLink}" target="_blank" class="bg-body-btn-bg text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition">
        To the product
      </a>
    </div>
  </div>
  `;
}
