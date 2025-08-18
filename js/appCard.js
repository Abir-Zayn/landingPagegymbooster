function ArticleCard({ title, description, imageUrl, readMoreLink }) {
    return `
    <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <img src="${imageUrl}" alt="${title}" class="w-full h-48 object-cover" />
      <div class="p-5">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">${title}</h3>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">${description}</p>
        <a href="${readMoreLink}" class="text-green-600 hover:text-green-800 font-medium text-sm inline-block">Read now</a>
      </div>
    </div>
  `;
}