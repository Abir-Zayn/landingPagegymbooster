function Footer() {
    return `
    <footer class="bg-gray-50 border-t border-gray-200 py-6 mt-12">
      <div class="container px-6 flex flex-col md:flex-row justify-between items-center">
        <!-- Logo Placeholder -->
        <div class="text-xl font-bold text-gray-800 mb-2 md:mb-0">
          AppLogo
        </div>

        <!-- Copyright & Links -->
        <div class="text-sm text-gray-600 text-right">
          <p>© Health Comparison Germany 2025</p>
          <div class="flex gap-3 mt-1 justify-center md:justify-end">
            <a href="#" class="hover:text-gray-800 transition">Privacy Policy</a>
            <a href="#" class="hover:text-gray-800 transition">Cookie settings</a>
            <a href="#" class="hover:text-gray-800 transition">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}