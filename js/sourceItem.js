// Function to create a single source item component
function createSourceItem({ number, text, link }) {
    return `
    <div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-200">
      <span class="inline-flex items-center justify-center h-6 w-6 rounded-full text-xs font-medium text-dark bg-transparent border border-black flex-shrink-0 mr-3">
        ${number}
      </span>
      <p class="text-sm md:text-base text-gray-800 flex-grow">
        ${text}
      </p>
      <a href="${link}" target="_blank" class="ml-auto text-gray-400 hover:text-blue-500 transition-colors duration-200" aria-label="Open source">
        <i class="fas fa-external-link-alt"></i>
      </a>
    </div>
  `;
}

// Function to render multiple source items
function renderSourceList(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = items
        .map((item, index) =>
            createSourceItem({
                number: index + 1,
                text: item.text,
                link: item.link,
            })
        )
        .join("");
}