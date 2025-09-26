import { memo, useEffect, useRef } from "react";
import Header from "./Header";
import laptop_device from "../assets/laptop_device_2.png"
interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = memo(({ className = "" }) => {
  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  const h2ARef = useRef<HTMLHeadingElement | null>(null);
  const h2BRef = useRef<HTMLHeadingElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const targets: Array<{ el: HTMLElement | null; delay: string }> = [
      { el: h1Ref.current, delay: "0ms" },
      { el: h2ARef.current, delay: "120ms" },
      { el: h2BRef.current, delay: "240ms" },
      { el: circleRef.current, delay: "300ms" },
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
            if (node === circleRef.current) node.classList.add("floaty");
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
        (t.el as HTMLElement).dataset.float = "1";
      }
      io.observe(t.el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <section
      className={`relative w-full bg-[#EDEDED] overflow-hidden pt-6 pb-12 lg:py-24 ${className}`}
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
          will-change: opacity, transform;
        }
        .fadeUp.reveal { opacity: 1; transform: translateY(0); }

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

      {/* <Header /> */}

      {/* Pull content a touch closer to header on mobile to kill the gap */}
      <div className="block lg:hidden h-0 mt-[10px]" aria-hidden="true" />

      {/* Circle (hidden on mobile) */}
      <div
        ref={circleRef}
        className="circleEnter pointer-events-none absolute top-0 right-0 hidden h-full w-96 rounded-l-full md:block"
        style={{ background: "linear-gradient(to bottom, #54B1F2, #0D3259)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Grid: image below text on mobile; side-by-side on lg */}
        <div className="grid items-center gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
          {/* Text column */}
          <div className="relative z-10 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-center">
            <h2
              ref={h1Ref}
              className="fadeUp font-bold leading-tight text-[#002741]"
              style={{ fontSize: "clamp(22px, 5vw, 78px)", fontFamily: "DIN Next LT Arabic, Inter, sans-serif" }}
              id="integrated-payment-heading"
            >
              حلول ذكية
            </h2>

            <h2
              ref={h2ARef}
              className="fadeUp leading-tight text-[#002741]"
              style={{ fontSize: "clamp(18px, 4.2vw, 65px)", fontFamily: "DIN Next LT Arabic, Inter, sans-serif" }}
              id="integrated-payment-subheading"
            >
              لمستقبـــــــــل أفضــــــل
            </h2>

            <h2
              ref={h2BRef}
              className="fadeUp font-bold leading-tight text-[#002741]"
              style={{ fontSize: "clamp(18px, 3.8vw, 70px)", fontFamily: "DIN Next LT Arabic, Inter, sans-serif" }}
              id="integrated-payment-subheading-en"
            >
              Smart Solutions
            </h2>
          </div>

          {/* Image column */}
          <div className="relative">
            {/* On mobile/tablet the image is just centered below text.
                On desktop we shift it right & down a bit for that hero overlap look. */}
            <div
              className="
                relative mx-auto
                w-[min(88vw,520px)]
                sm:w-[min(84vw,560px)]
                md:w-[min(80vw,640px)]
                lg:w-[640px] xl:w-[850px]
                lg:-translate-x-20 xl:-translate-x-10
                lg:translate-y-2 xl:translate-y-1
                z-20
              "
            >
              <img
                src={laptop_device}
                srcSet={`${laptop_device}?w=400 400w, ${laptop_device}?w=800 800w, ${laptop_device}?w=1200 1200w`}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 800px"
                alt="R.Pay payment device"
                className="w-full h-auto drop-shadow-2xl"
                loading="eager"
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
