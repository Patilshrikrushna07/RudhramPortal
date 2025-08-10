// Force dark theme globally
export function forceDarkTheme() {
  // Add dark class to document element
  document.documentElement.classList.add('dark');
  
  // Remove any light theme class if it exists
  document.documentElement.classList.remove('light');
  
  // Set theme in localStorage to maintain consistency
  localStorage.setItem('rudhram-ui-theme', 'dark');
}

// Initialize dark theme when the module loads
if (typeof window !== 'undefined') {
  forceDarkTheme();
}