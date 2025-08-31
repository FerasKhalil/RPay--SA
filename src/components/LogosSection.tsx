const LogosSection = () => {
  const logos = [
    { name: "Samsung", url: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=120&h=60&fit=crop" },
    { name: "Apple", url: "https://images.unsplash.com/photo-1611532736946-4e5dae86c6d8?w=120&h=60&fit=crop" },
    { name: "Microsoft", url: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=120&h=60&fit=crop" },
    { name: "Toshiba", url: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=120&h=60&fit=crop" },
    { name: "Beko", url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=120&h=60&fit=crop" }
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-12 overflow-hidden">
      <div className="relative w-full">
        <div className="flex logos-scroll">
          {/* First set of logos */}
          <div className="flex items-center space-x-16 min-w-full justify-center">
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0">
                <img 
                  src={logo.url}
                  alt={`${logo.name} Logo`}
                  className="h-16 w-32 object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          
          {/* Second set for seamless loop */}
          <div className="flex items-center space-x-16 min-w-full justify-center">
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0">
                <img 
                  src={logo.url}
                  alt={`${logo.name} Logo`}
                  className="h-16 w-32 object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* Third set for seamless loop */}
          <div className="flex items-center space-x-16 min-w-full justify-center">
            {logos.map((logo, index) => (
              <div key={`third-${index}`} className="flex-shrink-0">
                <img 
                  src={logo.url}
                  alt={`${logo.name} Logo`}
                  className="h-16 w-32 object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;