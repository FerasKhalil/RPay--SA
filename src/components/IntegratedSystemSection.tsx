import { memo, useEffect, useRef } from "react";

interface IntegratedSystemSectionProps {
  className?: string;
}

const IntegratedSystemSection: React.FC<IntegratedSystemSectionProps> = ({
  className = "",
}) => {
  // Text & image refs (stagger order)
  const arH2Ref = useRef<HTMLHeadingElement | null>(null);
  const arPRef = useRef<HTMLParagraphElement | null>(null);
  const enH3Ref = useRef<HTMLHeadingElement | null>(null);
  const enPRef = useRef<HTMLParagraphElement | null>(null);
  const laptopRef = useRef<HTMLDivElement | null>(null);

  // Decorative bubbles
  const decoTopRightRef = useRef<HTMLDivElement | null>(null);
  const decoBottomLeftRef = useRef<HTMLDivElement | null>(null);
  const accentArBubbleRef = useRef<HTMLDivElement | null>(null); // small cyan behind Arabic bubble card
  const accentEnBubbleRef = useRef<HTMLDivElement | null>(null); // small cyan behind English bubble card

  useEffect(() => {
    const targets: Array<{ el: HTMLElement | null; delay: string }> = [
      { el: arH2Ref.current, delay: "0ms" },
      { el: arPRef.current, delay: "120ms" },
      { el: enH3Ref.current, delay: "240ms" },
      { el: enPRef.current, delay: "360ms" },
      { el: laptopRef.current as unknown as HTMLElement, delay: "300ms" },

      // Decorative bubbles: enter slightly later, then float
      { el: decoTopRightRef.current, delay: "200ms" },
      { el: decoBottomLeftRef.current, delay: "260ms" },
      { el: accentArBubbleRef.current, delay: "200ms" },
      { el: accentEnBubbleRef.current, delay: "220ms" },
    ];

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observed: HTMLElement[] = [];

    if (prefersReduced) {
      targets.forEach(t => t.el?.classList.add("reveal"));
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
      // Mark bubbles to start floating after reveal
      if (
        t.el === decoTopRightRef.current ||
        t.el === decoBottomLeftRef.current ||
        t.el === accentArBubbleRef.current ||
        t.el === accentEnBubbleRef.current
      ) {
        t.el.dataset.float = "1";
      }
      io.observe(t.el);
      observed.push(t.el);
    });

    return () => {
      observed.forEach((el) => io.unobserve(el));
      io.disconnect();
    };
  }, []);

  return (
    <section
      className={`relative w-full overflow-hidden py-16 lg:py-24 ${className}`}
      style={{
        background: "linear-gradient(to bottom, #4387C7, #214261)",
      }}
      aria-labelledby="integrated-system-heading"
    >
      {/* Animation styles (same system as the rest) */}
      <style>{`
        /* Text/Image entrance: fade + slide up */
        .fadeUp {
          opacity: 0;
          transform: translateY(14px);
          transition:
            opacity 600ms ease-out var(--delay, 0ms),
            transform 600ms ease-out var(--delay, 0ms);
          will-change: opacity, transform;
        }
        .fadeUp.reveal { opacity: 1; transform: translateY(0); }

        /* Bubbles: subtle enter (fade + scale) */
        .bubbleEnter {
          opacity: 0;
          transform: scale(0.98);
          transition:
            opacity 700ms ease-out var(--delay, 0ms),
            transform 700ms ease-out var(--delay, 0ms), 
            filter 700ms ease-out var(--delay, 0ms);
          filter: saturate(0.9);
          will-change: opacity, transform, filter;
        }
        .bubbleEnter.reveal {
          opacity: 1;
          transform: scale(1);
          filter: saturate(1);
        }

        /* Gentle float loop after reveal */
        @keyframes floaty {
          0%   { transform: translateY(0) scale(1); }
          50%  { transform: translateY(-6px) scale(1); }
          100% { transform: translateY(0) scale(1); }
        }
        .floaty { animation: floaty 6s ease-in-out 800ms infinite; }

        /* Reduced motion safety */
        @media (prefers-reduced-motion: reduce) {
          .fadeUp, .bubbleEnter { opacity: 1 !important; transform: none !important; transition: none !important; }
          .floaty { animation: none !important; }
        }
      `}</style>

      {/* Decorative Elements */}
      <div
        ref={decoTopRightRef}
        className="bubbleEnter absolute top-20 right-20 w-32 h-32 bg-cyan-400 rounded-full opacity-20 blur-xl"
      />
      <div
        ref={decoBottomLeftRef}
        className="bubbleEnter absolute bottom-20 left-80 w-24 h-24 bg-cyan-300 rounded-full opacity-30 blur-lg"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Laptop Image */}
          <div className="relative z-10 order-2 lg:order-1">
            <div ref={laptopRef} className="fadeUp relative">
              <img
                src="/lovable-uploads/LaptopAngleMockup.png"
                alt="R.Pay integrated dashboard system interface on laptop"
                className="w-full h-auto object-contain drop-shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8 relative z-10 order-1 lg:order-2">
            {/* Arabic Section with Bubble */}
            <div className="relative">

              <div className="relative bg-cyan-400/90 rounded-3xl p-6 backdrop-blur-sm">
                <h2
                  ref={arH2Ref}
                  className="fadeUp text-white font-bold leading-tight text-center"
                  style={{
                    direction: "rtl",
                    fontSize: "clamp(18px, 4vw, 28px)",
                    fontFamily: "DIN Next LT Arabic, Inter, sans-serif",
                  }}
                  id="integrated-system-heading"
                >
                  ار باي يقدم لك منظومة متكاملة لإدارة
                  <br />
                  مكائن البيع الذاتي
                </h2>
              </div>
            </div>

            {/* Arabic Description */}
            <p
              ref={arPRef}
              className="fadeUp text-white/90 leading-relaxed text-center lg:text-right"
              style={{
                direction: "rtl",
                fontSize: "clamp(14px, 2.5vw, 18px)",
                fontFamily: "DIN Next LT Arabic, Inter, sans-serif",
                lineHeight: "1.8",
              }}
            >
              نتيح لك قبول المدفوعات بسهولة، وتنظيم عملياتك بكفاءة، وزيادة مبيعاتك. كما
              يمنح عملائك تجربة سلسة مدعومة بأدوات تحليل ذكية توفر لك رؤى أعمق وأداء أكثر
              فعالية
            </p>

            {/* English Section with Bubble */}
            <div className="relative mt-12">

              <div className="relative bg-cyan-400/90 rounded-3xl p-6 backdrop-blur-sm">
                <h3
                  ref={enH3Ref}
                  className="fadeUp text-white font-bold leading-tight text-center lg:text-left"
                  style={{
                    fontSize: "clamp(18px, 4vw, 28px)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  R Pay offers you an integrated system for
                  <br />
                  managing self-service machines
                </h3>
              </div>
            </div>

            {/* English Description */}
            <p
              ref={enPRef}
              className="fadeUp text-white/90 leading-relaxed text-center lg:text-left"
              style={{
                fontSize: "clamp(14px, 2.5vw, 18px)",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.8",
              }}
            >
              It enables you to accept payments easily, streamline your operations efficiently, and increase your sales. It
              also provides your customers with a seamless experience supported by smart analytics tools that give you
              deeper insights and enhanced performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(IntegratedSystemSection);
