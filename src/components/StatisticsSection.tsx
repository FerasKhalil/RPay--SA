import { memo } from "react";

interface StatisticItem {
  id: string;
  value: string;
  labelEn: string;
  color: string;
}

interface StatisticsSectionProps {
  className?: string;
}

const StatisticsSection: React.FC<StatisticsSectionProps> = memo(({ 
  className = "" 
}) => {
  const statistics: StatisticItem[] = [
    {
      id: 'new-features',
      value: '142',
      labelEn: 'New Features',
      color: 'text-blue-600'
    },
    {
      id: 'app-downloads',
      value: '28k',
      labelEn: 'App Download',
      color: 'text-green-600'
    },
    {
      id: 'active-users',
      value: '53M',
      labelEn: 'Active Users',
      color: 'text-orange-600'
    },
    {
      id: 'positive-rate',
      value: '90%',
      labelEn: 'Positive Rate',
      color: 'text-purple-600'
    }
  ];

  return (
    <section 
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
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="text-center group"
            >
              <div className="space-y-2">
                <div 
                  className={`font-bold leading-none ${stat.color}`}
                  style={{ 
                    fontSize: 'clamp(32px, 6vw, 64px)',
                    fontFamily: 'Inter, sans-serif'
                  }}
                  aria-label={`${stat.value} ${stat.labelEn}`}
                >
                  {stat.value}
                </div>
                
                <p 
                  className="text-muted-foreground font-medium"
                  style={{ 
                    fontSize: 'clamp(12px, 2vw, 16px)',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {stat.labelEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Image */}
        <div className="flex justify-center">
          <div className="relative max-w-2xl w-full">
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