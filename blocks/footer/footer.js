// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // Clear existing content
  block.textContent = '';

  // Create footer wrapper
  const footerWrapper = document.createElement('div');
  footerWrapper.className = 'footer-wrapper';

  // Create footer content
  const footerContent = document.createElement('div');
  footerContent.className = 'footer-content';

  // Mobile App Section
  const mobileAppSection = document.createElement('div');
  mobileAppSection.className = 'footer-section';
  mobileAppSection.innerHTML = `
    <h3>MOBILE APP</h3>
    <div class="app-buttons">
      <img src="../../images/logo-appstore.png" alt="Download on the App Store">
      <img src="../../images/logo-playstore.png" alt="Get it on Google Play">
    </div>
  `;
  footerContent.appendChild(mobileAppSection);

  // Follow Us Section
  const followUsSection = document.createElement('div');
  followUsSection.className = 'footer-section';
  followUsSection.innerHTML = `
    <h3>FOLLOW US</h3>
    <div class="social-icons">
      <a href="#"><img src="../../icons/facebook-logo.svg" alt="Facebook"></a>
      <a href="#"><img src="../../icons/twitter-logo.svg" alt="Twitter"></a>
      <a href="#"><img src="../../icons/youtube-logo.svg" alt="YouTube"></a>
      <a href="#"><img src="../../icons/instagram-logo.svg" alt="Instagram"></a>
      <a href="#"><img src="../../icons/Linkedin-icon.svg" alt="LinkedIn"></a>
    </div>
  `;
  footerContent.appendChild(followUsSection);

  // Contact Us Section
  const contactUsSection = document.createElement('div');
  contactUsSection.className = 'footer-section';
  contactUsSection.innerHTML = `
    <h3>CONTACT US</h3>
    <div class="contact-info">
      <img src="../../icons/call-icon.svg" alt="Phone">
      <span>+91-22 40548002 / +91-8108622222</span>
    </div>
    <div class="contact-info">
      <img src="../../icons/email-icon.svg" alt="Email">
      <span>amc@motilaloswai.com</span>
    </div>
  `;
  footerContent.appendChild(contactUsSection);

  footerWrapper.appendChild(footerContent);

  // Legal Text
  const legalText = document.createElement('div');
  legalText.className = 'legal-text';
  legalText.innerHTML = `
    Mutual Fund investments are subject to market risks, read all scheme related documents carefully.<br>
    KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc), you need not undergo the same process again when you approach another intermediary.
  `;
  footerWrapper.appendChild(legalText);

  // Footer Bottom
  const footerBottom = document.createElement('div');
  footerBottom.className = 'footer-bottom';
  footerBottom.innerHTML = `
    <div>CIN:U67120MH2008PLC188186</div>
    <div class="footer-bottom-links">
      <a href="#">Disclaimer</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Voting Policy</a>
      <a href="#">ODR Portal</a>
      <a href="#">SEBI SCORES</a>
      <a href="#">Sitemap</a>
      <a href="#">About Us</a>
      <a href="#">ISIN - All Schemes</a>
    </div>
  `;
  footerWrapper.appendChild(footerBottom);

  // Copyright and Browser Compatibility
  const copyrightAndCompatibility = document.createElement('div');
  copyrightAndCompatibility.className = 'footer-content';
  copyrightAndCompatibility.innerHTML = `
    <div class="copyright">© Copyright</div>
    <div class="browser-compatibility">
      Site best viewed in Google Chrome (Latest version), Firefox (Latest version), Safari (Latest version), Microsoft Edge(Latest version)
    </div>
  `;
  footerWrapper.appendChild(copyrightAndCompatibility);

  // Append the footer wrapper to the block
  block.append(footerWrapper);
}
