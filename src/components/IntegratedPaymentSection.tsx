import { memo, useEffect, useRef } from "react";

interface PaymentMethod {
  id: string;
  name: string;
  logo: string;
  alt: string;
}

interface IntegratedPaymentSectionProps {
  className?: string;
}

const IntegratedPaymentSection: React.FC<IntegratedPaymentSectionProps> = memo(({ className = "" }) => {
  const paymentMethods: PaymentMethod[] = [
    { id: "mada", name: "Mada", logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=60&h=40&fit=crop", alt: "Mada payment card logo" },
    { id: "mastercard", name: "Mastercard", logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=60&h=40&fit=crop", alt: "Mastercard payment logo" },
    { id: "american-express", name: "American Express", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=40&fit=crop", alt: "American Express payment logo" },
    { id: "visa", name: "Visa", logo: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=60&h=40&fit=crop", alt: "Visa payment card logo" },
    { id: "apple-pay", name: "Apple Pay", logo: "https://images.unsplash.com/photo-1611532736946-4e5dae86c6d8?w=60&h=40&fit=crop", alt: "Apple Pay digital payment logo" },
    { id: "samsung-pay", name: "Samsung Pay", logo: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=60&h=40&fit=crop", alt: "Samsung Pay digital payment logo" },
  ];

  // ----- Animation refs (stagger order) -----
  const h2ArRef = useRef<HTMLHeadingElement | null>(null); // Arabic h2
  const h3ArRef = useRef<HTMLHeadingElement | null>(null); // Arabic h3 "كيف يعمل"
  const pArRef = useRef<HTMLParagraphElement | null>(null); // Arabic paragraph
  const h4EnRef = useRef<HTMLHeadingElement | null>(null); // English h4
  const h5HowRef = useRef<HTMLHeadingElement | null>(null); // English h5 "How it works"
  const pHowRef = useRef<HTMLParagraphElement | null>(null); // English paragraph (how)
  const h5BenRef = useRef<HTMLHeadingElement | null>(null); // English h5 "Benefits"
  const pBenRef = useRef<HTMLParagraphElement | null>(null); // English paragraph (benefits)
  const h6Ref = useRef<HTMLHeadingElement | null>(null); // English h6 "Supported..."

  // Right gradient circle
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const targets: Array<{ el: HTMLElement | null; delay: string }> = [
      { el: h2ArRef.current, delay: "0ms" },
      { el: h3ArRef.current, delay: "120ms" },
      { el: pArRef.current, delay: "240ms" },
      { el: h4EnRef.current, delay: "300ms" },
      { el: h5HowRef.current, delay: "360ms" },
      { el: pHowRef.current, delay: "420ms" },
      { el: h5BenRef.current, delay: "480ms" },
      { el: pBenRef.current, delay: "540ms" },
      { el: h6Ref.current, delay: "600ms" },
      { el: circleRef.current, delay: "300ms" }, // circle appears around same time as h4
    ];

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      targets.forEach((t) => t.el?.classList.add("reveal"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const node = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            node.classList.add("reveal");
            if (node.dataset.float === "1") node.classList.add("floaty");
            io.unobserve(node);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    );

    targets.forEach((t) => {
      if (!t.el) return;
      t.el.style.setProperty("--delay", t.delay);
      if (t.el === circleRef.current) {
        t.el.dataset.float = "1"; // start float after reveal
      }
      io.observe(t.el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <section
      className={`relative w-full bg-[#EDEDED] overflow-hidden py-16 lg:py-24 ${className}`}
      aria-labelledby="integrated-payment-heading"
    >
      {/* Local CSS (same system as hero/about) */}
      <style>{`
        /* Text: fade + slide-up */
        .fadeUp {
          opacity: 0;
          transform: translateY(14px);
          transition:
            opacity 600ms ease-out var(--delay, 0ms),
            transform 600ms ease-out var(--delay, 0ms);
          will-change: opacity, transform;
        }
        .fadeUp.reveal { opacity: 1; transform: translateY(0); }

        /* Circle: enter (fade + slight slide/scale) */
        .circleEnter {
          opacity: 0;
          transform: translateX(16px) scale(0.98);
          transition:
            opacity 700ms ease-out var(--delay, 0ms),
            transform 700ms ease-out var(--delay, 0ms);
          will-change: opacity, transform;
        }
        .circleEnter.reveal {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        /* Gentle float after reveal */
        @keyframes floaty {
          0%   { transform: translateY(0); }
          50%  { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .floaty { animation: floaty 6s ease-in-out 800ms infinite; }

        /* A11y */
        @media (prefers-reduced-motion: reduce) {
          .fadeUp, .circleEnter { opacity: 1 !important; transform: none !important; transition: none !important; }
          .floaty { animation: none !important; }
        }
      `}</style>

      {/* Right gradient half circle - Background for device (animated + hidden on mobile) */}
      <div
        ref={circleRef}
        className="circleEnter absolute top-0 right-0 hidden h-full w-96 rounded-l-full md:block"
        style={{ background: "linear-gradient(to bottom, #54B1F2, #0D3259)" }}
        aria-hidden="true"
      />

      {/* Decorative WiFi Icons (unchanged) */}
      <div className="absolute top-10 right-20 w-16 h-16 opacity-30 z-10">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
          <path d="M12 20h.01M8.5 16.5a5 5 0 017 0M5 13a10 10 0 0114 0M2 9.5a15.5 15.5 0 0120 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute top-32 right-32 w-12 h-12 opacity-20 z-10">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
          <path d="M12 20h.01M8.5 16.5a5 5 0 017 0M5 13a10 10 0 0114 0M2 9.5a15.5 15.5 0 0120 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8 relative z-10">
            {/* Arabic Heading */}
            <h2
              ref={h2ArRef}
              className="fadeUp text-foreground font-bold leading-tight"
              style={{ direction: "rtl", fontSize: "clamp(24px, 5vw, 48px)", fontFamily: "DIN Next LT Arabic, Inter, sans-serif" }}
              id="integrated-payment-heading"
            >
              نظام الدفع الذكي المدمج
            </h2>

            {/* Arabic Subheading */}
            <h3
              ref={h3ArRef}
              className="fadeUp text-primary font-semibold leading-tight"
              style={{ direction: "rtl", fontSize: "clamp(16px, 3vw, 30px)", fontFamily: "DIN Next LT Arabic, Inter, sans-serif" }}
            >
              كيف يعمل
            </h3>

            {/* Arabic Description */}
            <p
              ref={pArRef}
              className="fadeUp text-foreground/180 leading-relaxed"
              style={{ direction: "rtl", fontSize: "clamp(14px, 2.5vw, 25px)", fontFamily: "DIN Next LT Arabic, Inter, sans-serif", lineHeight: "1.6" }}
            >
              وحدة دفع إلكترونية داخل كل جهاز تدعم البطاقات والمحافظ الرقمية غير
              العمليات مباشرة في لوحة التحكم
            </p>

            {/* English Heading */}
            <h4
              ref={h4EnRef}
              className="fadeUp text-foreground font-bold leading-tight mt-8 text-[#002741]"
              style={{ fontSize: "clamp(20px, 4vw, 36px)", fontFamily: "Inter, sans-serif" }}
            >
              Integrated Smart Payment
            </h4>

            {/* How it works */}
            <div className="space-y-4">
              <h5
                ref={h5HowRef}
                className="fadeUp text-primary font-semibold"
                style={{ fontSize: "clamp(14px, 2.5vw, 30px)", fontFamily: "Inter, sans-serif" }}
              >
                How it works
              </h5>

              <p
                ref={pHowRef}
                className="fadeUp text-foreground/180 leading-relaxed"
                style={{ fontSize: "clamp(13px, 2vw, 20px)", fontFamily: "Inter, sans-serif", lineHeight: "1.6" }}
              >
                Embedded electronic payment unit in every machine Supports cards and digital wallets with real-time dashboard integration
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h5
                ref={h5BenRef}
                className="fadeUp text-primary font-semibold"
                style={{ fontSize: "clamp(14px, 2.5vw, 30px)", fontFamily: "Inter, sans-serif" }}
              >
                Benefits
              </h5>

              <p
                ref={pBenRef}
                className="fadeUp text-foreground/180 leading-relaxed"
                style={{ fontSize: "clamp(13px, 2vw, 20px)", fontFamily: "Inter, sans-serif", lineHeight: "1.6" }}
              >
                Secure seamless payment, Less cash handling, and enhanced professionalism
              </p>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4">
              <h6
                ref={h6Ref}
                className="fadeUp text-foreground font-medium"
                style={{ fontSize: "clamp(12px, 2vw, 20px)", fontFamily: "Inter, sans-serif" }}
              >
                Supported Payment Methods
              </h6>

              <div className="flex flex-wrap items-center gap-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <img
                      src={method.logo}
                      alt={method.alt}
                      className="w-12 h-8 object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Device Image */}
          <div className="relative z-20 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/lovable-uploads/mobile-left.png"
                alt="R.Pay integrated smart payment device showing Remote Pay interface with contactless payment capabilities"
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl relative z-10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

IntegratedPaymentSection.displayName = "IntegratedPaymentSection";
export default IntegratedPaymentSection;
