import { memo, useEffect, useRef } from "react";
import Header from "./Header";

interface PaymentMethod {
  id: string;
  name: string;
  logo: string;
  alt: string;
}

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = memo(({ className = "" }) => {
  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  const h2ARef = useRef<HTMLHeadingElement | null>(null);
  const h2BRef = useRef<HTMLHeadingElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const targets: Array<{ el: HTMLElement | null; delay: string; extraClass?: string }> = [
      { el: h1Ref.current, delay: "0ms" },
      { el: h2ARef.current, delay: "120ms" },
      { el: h2BRef.current, delay: "240ms" },
      { el: circleRef.current, delay: "300ms", extraClass: "floaty" },
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
        t.el.dataset.float = "1";
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
      {/* Local CSS for animations */}
      <style>{`
        .fadeUp {
          opacity: 0;
          transform: translateY(14px);
          transition:
            opacity 600ms ease-out var(--delay, 0ms),
            transform 600ms ease-out var(--delay, 0ms);
        }
        .fadeUp.reveal { opacity: 1; transform: translateY(0); }

        .circleEnter {
          opacity: 0;
          transform: translateX(16px) scale(0.98);
          transition:
            opacity 700ms ease-out var(--delay, 0ms),
            transform 700ms ease-out var(--delay, 0ms);
        }
        .circleEnter.reveal {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        @keyframes floaty {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .floaty { animation: floaty 6s ease-in-out 800ms infinite; }

        @media (prefers-reduced-motion: reduce) {
          .fadeUp, .circleEnter { opacity: 1 !important; transform: none !important; transition: none !important; }
          .floaty { animation: none !important; }
        }
      `}</style>

      <Header />

      {/* Circle (hidden on mobile) */}
      <div
        ref={circleRef}
        className="circleEnter pointer-events-none absolute top-0 right-0 hidden h-full w-96 rounded-l-full md:block"
        style={{ background: "linear-gradient(to bottom, #54B1F2, #0D3259)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative z-10 space-y-8 text-center lg:text-right">
            <h2
              ref={h1Ref}
              className="fadeUp font-bold leading-tight text-[#002741]"
              style={{ fontSize: "clamp(24px, 5vw, 48px)", fontFamily: "DIN Next LT Arabic, Inter, sans-serif" }}
              id="integrated-payment-heading"
            >
              حلول ذكية
            </h2>

            <h2
              ref={h2ARef}
              className="fadeUp font-bold leading-tight text-[#002741]"
              style={{ fontSize: "clamp(4px, 4vw, 38px)", fontFamily: "DIN Next LT Arabic, Inter, sans-serif" }}
              id="integrated-payment-subheading"
            >
              لمستقبـــــــــل أفضــــــل
            </h2>

            <h2
              ref={h2BRef}
              className="fadeUp font-bold leading-tight text-[#002741]"
              style={{ fontSize: "clamp(24px, 2vw, 48px)", fontFamily: "DIN Next LT Arabic, Inter, sans-serif" }}
              id="integrated-payment-subheading-en"
            >
              Smart Solutions
            </h2>

            {/* Logo (centered on mobile) */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/lovable-uploads/rpay_logo.png"
                alt="R.Pay logo"
                className="relative z-10 h-auto w-[150px] object-contain"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="relative z-20 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/lovable-uploads/hero_laptop_device.png"
                alt="R.Pay payment device"
                className="relative z-10 h-auto w-full drop-shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";
export default HeroSection;
