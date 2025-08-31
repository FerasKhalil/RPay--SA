const LogosSection = () => {
  const logos = [
    "Samsung",
    "Apple", 
    "Microsoft",
    "Toshiba",
    "Beko"
  ];

  return (
    <section className="w-full bg-white py-8 overflow-hidden">
      <div className="relative w-full">
        <div className="flex logos-scroll">
          {/* First set of logos */}
          <div className="flex items-center space-x-12 min-w-full">
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0">
                <img 
                  src={`https://via.placeholder.com/120x60/666666/FFFFFF?text=${logo}`}
                  alt={`${logo} Logo`}
                  className="h-12 w-auto object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          
          {/* Second set for seamless loop */}
          <div className="flex items-center space-x-12 min-w-full">
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0">
                <img 
                  src={`https://via.placeholder.com/120x60/666666/FFFFFF?text=${logo}`}
                  alt={`${logo} Logo`}
                  className="h-12 w-auto object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* Third set for seamless loop */}
          <div className="flex items-center space-x-12 min-w-full">
            {logos.map((logo, index) => (
              <div key={`third-${index}`} className="flex-shrink-0">
                <img 
                  src={`https://via.placeholder.com/120x60/666666/FFFFFF?text=${logo}`}
                  alt={`${logo} Logo`}
                  className="h-12 w-auto object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
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