import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">R</span>
          </div>
          <span className="text-xl font-semibold text-foreground">Pay</span>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Button variant="ghost" className="text-primary font-medium bg-primary/10 hover:bg-primary/20">
            الرئيسية Home
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            عن R Pay About R Pay
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            مهامنا Our Mission
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            المميزات Features
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            الأجهزة Device
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            الدفع الذكي المتقدم Integrated Smart
          </Button>
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