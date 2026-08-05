// Add this to a shared JavaScript file
class DisclaimerFooter {
  static inject() {
      const footer = document.createElement('footer');
      footer.className = 'disclaimer-footer';
      footer.innerHTML = `
          <div class="disclaimer-content">
              <p class="disclaimer-text">
                  <span class="disclaimer-icon">⚠️</span>
                  <strong>Educational Purpose Only:</strong> 
                  This tool is designed for educational and training purposes only. It should not be used for clinical decision-making or patient treatment planning.
                  All calculations and visualizations are approximations and should be verified using commissioned clinical systems.
              </p>
              <p class="disclaimer-version">
                  Last Updated: ${DisclaimerFooter.getLastUpdated()} | Version ${DisclaimerFooter.getVersion()}
              </p>
          </div>
      `;
      document.body.appendChild(footer);
  }

  static getVersion() {
      return '1.0'; // Manage version centrally
  }

  static getLastUpdated() {
      return 'October 2024'; // Could be automated from build process
  }
}

// Use it in your tools
document.addEventListener('DOMContentLoaded', () => {
  DisclaimerFooter.inject();
});