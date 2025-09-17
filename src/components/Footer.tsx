import { memo } from "react";
import rpay_logo from "../assets/rpay_logo.png"
interface NavigationLink {
  id: string;
  labelAr: string;
  labelEn: string;
  href: string;
}

interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: string;
  ariaLabel: string;
}

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = memo(({ className = "" }) => {
  const navigationLinks: NavigationLink[] = [
    { id: 'about', labelAr: 'عن ار باي', labelEn: 'About R Pay', href: '/about' },
    { id: 'services', labelAr: 'خدماتنا', labelEn: 'Our Services', href: '/services' },
    { id: 'solutions', labelAr: 'الحلول المتقدمة', labelEn: 'Advanced Solutions', href: '/solutions' },
    { id: 'support', labelAr: 'الدعم الفني', labelEn: 'Technical Support', href: '/support' },
    { id: 'contact', labelAr: 'اتصل بنا', labelEn: 'Contact Us', href: '/contact' }
  ];

  const socialLinks: SocialLink[] = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/rpay',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
      ariaLabel: 'Follow R.Pay on LinkedIn'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      href: 'https://twitter.com/rpay',
      icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
      ariaLabel: 'Follow R.Pay on Twitter'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      href: 'https://instagram.com/rpay',
      icon: 'M12.017 0C8.396 0 7.989.016 6.756.072 5.527.128 4.724.332 4.008.628a5.612 5.612 0 00-2.038 1.325A5.612 5.612 0 00.628 4.008C.332 4.724.128 5.527.072 6.756.016 7.989 0 8.396 0 12.017c0 3.624.016 4.031.072 5.264.056 1.229.26 2.032.556 2.748a5.612 5.612 0 001.325 2.038 5.612 5.612 0 002.038 1.325c.716.296 1.519.5 2.748.556 1.233.056 1.64.072 5.264.072 3.624 0 4.031-.016 5.264-.072 1.229-.056 2.032-.26 2.748-.556a5.612 5.612 0 002.038-1.325 5.612 5.612 0 001.325-2.038c.296-.716.5-1.519.556-2.748.056-1.233.072-1.64.072-5.264 0-3.624-.016-4.031-.072-5.264-.056-1.229-.26-2.032-.556-2.748A5.612 5.612 0 0020.008.953 5.612 5.612 0 0017.97.628C17.254.332 16.451.128 15.222.072 13.989.016 13.582 0 12.017 0zm0 2.165c3.553 0 3.97.016 5.37.072 1.295.059 1.998.272 2.466.452.62.24 1.062.527 1.527.992.465.465.752.907.992 1.527.18.468.393 1.171.452 2.466.056 1.4.072 1.817.072 5.37 0 3.553-.016 3.97-.072 5.37-.059 1.295-.272 1.998-.452 2.466-.24.62-.527 1.062-.992 1.527-.465.465-.907.752-1.527.992-.468.18-1.171.393-2.466.452-1.4.056-1.817.072-5.37.072-3.553 0-3.97-.016-5.37-.072-1.295-.059-1.998-.272-2.466-.452-.62-.24-1.062-.527-1.527-.992-.465-.465-.752-.907-.992-1.527-.18-.468-.393-1.171-.452-2.466-.056-1.4-.072-1.817-.072-5.37 0-3.553.016-3.97.072-5.37.059-1.295.272-1.998.452-2.466.24-.62.527-1.062.992-1.527.465-.465.907-.752 1.527-.992.468-.18 1.171-.393 2.466-.452 1.4-.056 1.817-.072 5.37-.072z',
      ariaLabel: 'Follow R.Pay on Instagram'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      href: 'https://youtube.com/@rpay',
      icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
      ariaLabel: 'Follow R.Pay on YouTube'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`w-full text-white py-8 ${className}`}
      style={{ background: 'linear-gradient(to right, #3289B4, #194874)' }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Section - Logo and Copyright */}
          <div className="space-y-4 text-center lg:text-left">
            {/* R.Pay Logo */}
            <div className="flex justify-center lg:justify-start items-center space-x-3">
              <img
                src={rpay_logo}
                alt="R.Pay - Smart payment solutions"
                className="w-20 h-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Copyright */}
            <div className="space-y-1">
              <p className="text-white/90 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Copyright © {currentYear} R.Pay
              </p>
              <p className="text-white/80 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                All rights reserved
              </p>
            </div>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="text-center lg:text-center">
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="text-white/90 hover:text-white text-sm transition-colors duration-200 block"
                      style={{ fontFamily: 'DIN Next LT Arabic, Inter, sans-serif' }}
                    >
                      <span>{link.labelEn}</span>
                      <span className="mx-2">•</span>
                      <span style={{ direction: 'rtl' }}>{link.labelAr}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Section - Social Media */}
          <div className="space-y-4 text-center lg:text-right">
            <h3
              className="text-white font-medium text-sm"
              style={{ fontFamily: 'DIN Next LT Arabic, Inter, sans-serif' }}
            >
              <span>Follow Us</span>
              <span className="mx-2">•</span>
              <span style={{ direction: 'rtl' }}>تابعنا</span>
            </h3>

            <div className="flex justify-center lg:justify-end items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Divider and Additional Info */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-xs text-white/70">
              <a href="/privacy" className="hover:text-white/90 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white/90 transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-white/90 transition-colors">Cookie Policy</a>
            </div>

            <p className="text-xs text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
              Made with ❤️ in Saudi Arabia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
