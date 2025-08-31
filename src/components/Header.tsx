import { Button } from "@/components/ui/button";
import { memo } from "react";

interface NavigationItem {
  id: string;
  labelAr: string;
  labelEn: string;
  href: string;
  isActive?: boolean;
}

interface HeaderProps {
  className?: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'home', labelAr: 'الرئيسية', labelEn: 'Home', href: '/', isActive: true },
  { id: 'about', labelAr: 'عن R Pay', labelEn: 'About R Pay', href: '/about' },
  { id: 'mission', labelAr: 'مهامنا', labelEn: 'Our Mission', href: '/mission' },
  { id: 'features', labelAr: 'المميزات', labelEn: 'Features', href: '/features' },
  { id: 'devices', labelAr: 'الأجهزة', labelEn: 'Device', href: '/devices' },
  { id: 'smart-payment', labelAr: 'الدفع الذكي المتقدم', labelEn: 'Integrated Smart', href: '/smart-payment' },
];

const Header: React.FC<HeaderProps> = memo(({ className = "" }) => {
  return (
    <header 
      className={`w-full bg-[#EDEDED] relative ${className}`}
      role="banner"
    >
      <nav 
        className="relative w-full h-full"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo - Desktop positioned absolutely */}
        <div 
          className="absolute z-10 hidden lg:block"
          style={{ left: '32px', top: '133px' }}
        >
          <img 
            src="/lovable-uploads/f5776377-e440-44c1-ab5f-cb9635956f15.png"
            alt="R.Pay - Smart payment solutions logo"
            style={{ width: '113px', height: '51.26px' }}
            className="object-contain"
            loading="eager"
          />
        </div>

        {/* Navigation Menu - Desktop positioned absolutely */}
        <nav 
          className="absolute z-10 hidden lg:flex items-center"
          style={{ left: '145px', top: '145px', width: '1006px', height: '28.14px' }}
          aria-label="Primary navigation"
        >
          <ul className="flex items-center space-x-6 text-sm" role="menubar">
            {navigationItems.map((item) => (
              <li key={item.id} role="none">
                <Button 
                  variant={item.isActive ? "default" : "ghost"}
                  className={`px-4 py-2 transition-colors duration-200 ${
                    item.isActive 
                      ? "text-white hover:bg-[#4386C6]/90" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  style={item.isActive ? { backgroundColor: '#4386C6' } : {}}
                  asChild
                  role="menuitem"
                >
                  <a href={item.href} className="block">
                    {item.labelAr} {item.labelEn}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile responsive layout */}
        <div className="block lg:hidden max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img 
              src="/lovable-uploads/f5776377-e440-44c1-ab5f-cb9635956f15.png"
              alt="R.Pay - Smart payment solutions logo"
              className="w-20 h-auto object-contain"
              loading="eager"
            />
            <Button 
              variant="outline" 
              size="sm"
              aria-label="Open mobile menu"
              aria-expanded="false"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Spacing for absolute positioning */}
        <div className="h-48 lg:h-64" aria-hidden="true" />
      </nav>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;