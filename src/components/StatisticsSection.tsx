import { memo, useState, useEffect, useRef } from "react";

interface StatisticItem {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  labelEn: string;
  color: string;
}

interface StatisticsSectionProps {
  className?: string;
}

// Custom hook for number animation
const useCountAnimation = (
  targetValue: number,
  suffix: string,
  duration: number = 2000,
  isVisible: boolean = false
) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isVisible || isAnimating) return;

    setIsAnimating(true);
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);

      const newValue = startValue + (targetValue - startValue) * easedProgress;
      setCurrentValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [targetValue, duration, isVisible, isAnimating]);

  // Format the display value
  const formatValue = (value: number): string => {
    if (suffix === '%') {
      return `${Math.round(value)}%`;
    } else if (suffix === 'k') {
      return `${(value / 1000).toFixed(value >= 1000 ? 0 : 1)}k`;
    } else if (suffix === 'M') {
      return `${(value / 1000000).toFixed(value >= 1000000 ? 0 : 1)}M`;
    }
    return Math.round(value).toString();
  };

  return formatValue(currentValue);
};

// Custom hook for intersection observer
const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
): [React.RefObject<HTMLElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Disconnect after first intersection to prevent re-triggering
        observer.disconnect();
      }
    }, {
      threshold: 0.3,
      ...options,
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

const StatisticsSection: React.FC<StatisticsSectionProps> = memo(({ 
  className = "" 
}) => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const statistics: StatisticItem[] = [
    {
      id: 'new-features',
      value: '142',
      numericValue: 142,
      suffix: '',
      labelEn: 'New Features',
      color: 'text-blue-600'
    },
    {
      id: 'app-downloads',
      value: '28k',
      numericValue: 28000,
      suffix: 'k',
      labelEn: 'App Download',
      color: 'text-green-600'
    },
    {
      id: 'active-users',
      value: '53M',
      numericValue: 53000000,
      suffix: 'M',
      labelEn: 'Active Users',
      color: 'text-orange-600'
    },
    {
      id: 'positive-rate',
      value: '90%',
      numericValue: 90,
      suffix: '%',
      labelEn: 'Positive Rate',
      color: 'text-purple-600'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`w-full bg-background py-16 lg:py-24 ${className}`}
      aria-labelledby="statistics-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 
            className="text-foreground font-bold leading-tight"
            style={{ 
              direction: 'rtl',
              fontSize: 'clamp(24px, 5vw, 48px)',
              fontFamily: 'DIN Next LT Arabic, Inter, sans-serif'
            }}
            id="statistics-heading"
          >
            مع ار باي ينمو عملك بذكاء أكبر
          </h2>
          
          <h3 
            className="text-foreground font-semibold leading-tight"
            style={{ 
              fontSize: 'clamp(18px, 4vw, 32px)',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            With R Pay, Your Business Grows Smarter
          </h3>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => {
            const animatedValue = useCountAnimation(
              stat.numericValue,
              stat.suffix,
              2000 + (index * 200), // Stagger animation timing
              isVisible
            );

            return (
              <div
                key={stat.id}
                className="text-center group"
              >
                <div className="space-y-2">
                  <div 
                    className={`font-bold leading-none transition-all duration-300 ${stat.color} ${
                      isVisible ? 'transform scale-100 opacity-100' : 'transform scale-90 opacity-70'
                    }`}
                    style={{ 
                      fontSize: 'clamp(32px, 6vw, 64px)',
                      fontFamily: 'Inter, sans-serif',
                      transitionDelay: `${index * 100}ms`
                    }}
                    aria-label={`${stat.value} ${stat.labelEn}`}
                  >
                    {animatedValue}
                  </div>
                  
                  <p 
                    className={`text-muted-foreground font-medium transition-all duration-300 ${
                      isVisible ? 'transform translateY-0 opacity-100' : 'transform translateY-4 opacity-0'
                    }`}
                    style={{ 
                      fontSize: 'clamp(12px, 2vw, 16px)',
                      fontFamily: 'Inter, sans-serif',
                      transitionDelay: `${(index * 100) + 200}ms`
                    }}
                  >
                    {stat.labelEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dashboard Image */}
        <div className="flex justify-center">
          <div 
            className={`relative max-w-2xl w-full transition-all duration-1000 ${
              isVisible ? 'transform translateY-0 opacity-100' : 'transform translateY-8 opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <img 
              src="/lovable-uploads/e9f3cf74-af0c-4183-bedb-763ea5a4ab47.png"
              alt="R.Pay analytics dashboard showing business metrics including total purchases, reversals, machine count, branch count, and user statistics"
              className="w-full h-auto object-contain drop-shadow-2xl"
              loading="lazy"
            />
            
            {/* Subtle background decoration */}
            <div 
              className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl blur-3xl transform scale-110"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

StatisticsSection.displayName = 'StatisticsSection';

export default StatisticsSection;