import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-[#EDEDED]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://via.placeholder.com/113x51/54B1F2/FFFFFF?text=R.Pay"
            alt="R.Pay Logo"
            style={{ width: '113px', height: '51.26px' }}
            className="object-contain"
          />
        </div>

        {/* Navigation Menu */}
        <div 
          className="hidden md:flex items-center justify-center"
          style={{ width: '1006px', height: '28.14px' }}
        >
          <div className="flex items-center space-x-8">
            <Button variant="ghost" className="text-primary font-medium bg-primary/10 hover:bg-primary/20">
              الرئيسية Home
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              عن R Pay About R Pay
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              مهامنا Our Mission
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              المميزات Features
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              الأجهزة Device
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              الدفع الذكي المتقدم Integrated Smart
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="outline" className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </nav>
    </header>
  );
};

export default Header;