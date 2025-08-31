import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-[#EDEDED] relative">
      <nav className="relative w-full h-full">
        {/* Logo - Positioned absolutely */}
        <div 
          className="absolute z-10 hidden lg:block"
          style={{ left: '32px', top: '133px' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=113&h=51&fit=crop"
            alt="R.Pay Logo"
            style={{ width: '113px', height: '51.26px' }}
            className="object-cover rounded"
          />
        </div>

        {/* Navigation Menu - Positioned absolutely */}
        <div 
          className="absolute z-10 hidden lg:flex items-center"
          style={{ left: '145px', top: '145px', width: '1006px', height: '28.14px' }}
        >
          <div className="flex items-center space-x-6 text-sm">
            <Button variant="ghost" className="text-primary font-medium bg-primary/10 hover:bg-primary/20 px-4 py-2">
              الرئيسية Home
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-4 py-2">
              عن R Pay About R Pay
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-4 py-2">
              مهامنا Our Mission
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-4 py-2">
              المميزات Features
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-4 py-2">
              الأجهزة Device
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-4 py-2">
              الدفع الذكي المتقدم Integrated Smart
            </Button>
          </div>
        </div>

        {/* Mobile responsive layout */}
        <div className="block lg:hidden max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img 
              src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=113&h=51&fit=crop"
              alt="R.Pay Logo"
              className="w-20 h-auto object-cover rounded"
            />
            <Button variant="outline">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Spacing for absolute positioning */}
        <div className="h-48 lg:h-64"></div>
      </nav>
    </header>
  );
};

export default Header;