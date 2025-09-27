import { ChevronDown, Cog, Flame, ExternalLink } from "lucide-react";
import TextReveal from "../common/TextReveal";
import HoverShadowButton from "../nurui/shadow-button";
import qrEbook from "../../assets/qr.png";

/**
 * Palette used:
 *  - NAVY: #071028
 *  - MID:  #153444
 *  - GOLD: #C9A455 (antique gold)
 *  - CHAMP: #EDE6DA
 */

const HeroSection = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById("content-section");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      aria-label="Hero - Đại đoàn kết dân tộc"
      style={{
        background:
          "linear-gradient(135deg, #071028 0%, #0f2b3a 40%, #153444 100%)",
      }}
    >
      {/* subtle glass overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "rgba(6,10,15,0.28)" }}
      />

      {/* faint decorative pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(237,230,218,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          mixBlendMode: "overlay",
          opacity: 0.6,
        }}
        aria-hidden="true"
      />

      {/* subtle floating icons */}
      <div
        className="absolute top-16 left-6 opacity-20 hidden sm:block"
        aria-hidden="true"
      >
        <Cog
          className="w-14 h-14"
          style={{ color: "#C9A455", opacity: 0.25 }}
        />
      </div>
      <div
        className="absolute top-36 right-12 opacity-18 hidden md:block"
        aria-hidden="true"
      >
        <Flame
          className="w-10 h-10"
          style={{ color: "#D4AF37", opacity: 0.22 }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[rgba(237,230,218,0.98)] mb-5 md:mb-8 leading-tight">
            <div data-aos="zoom-out-up">
              <span
                className="block mb-1 md:mb-2 text-lg sm:text-xl md:text-2xl font-semibold"
                style={{ color: "#EDE6DA" }}
              >
                Tư tưởng Hồ Chí Minh về
              </span>
            </div>

            <div data-aos="zoom-out-up" className="mt-1">
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(201,164,85,1) 0%, rgba(212,175,55,1) 100%)",
                  letterSpacing: "-0.5px",
                }}
              >
                Đại đoàn kết dân tộc và Đoàn kết quốc tế
              </span>
            </div>
          </h1>

          {/* subtitle */}
          <div className="mx-auto max-w-3xl">
            <TextReveal
              className="text-[rgba(237,230,218,0.92)]"
              text="Đại đoàn kết dân tộc và đoàn kết quốc tế là chiến lược cách mạng xuyên suốt, tạo nên sức mạnh tổng hợp"
            />
          </div>

          {/* decorative line */}
          <div className="flex items-center justify-center mb-6 mt-6">
            <div
              className="h-px w-32"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201,164,85,0.8), transparent)",
              }}
            />
            <Flame
              className="mx-3 w-5 h-5"
              style={{ color: "#C9A455", opacity: 0.9 }}
            />
            <div
              className="h-px w-32"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201,164,85,0.8), transparent)",
              }}
            />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <HoverShadowButton
              text={"Khám phá ngay"}
              onClick={scrollToContent}
              className="!shadow-lg"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #D4AF37 0%, #B78B2F 100%)",
                color: "#071028",
              }}
            />
            <a
              href="https://heyzine.com/flip-book/4825bc2069.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border"
              style={{
                borderColor: "rgba(237,230,218,0.12)",
                color: "#EDE6DA",
                background: "transparent",
              }}
            >
              <ExternalLink className="w-4 h-4" style={{ color: "#EDE6DA" }} />
              Tải eBook
            </a>
          </div>

          {/* glass card */}
          <div className="relative mx-auto max-w-lg">
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(237,230,218,0.06)",
                backdropFilter: "blur(6px)",
              }}
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "#C9A45520" }}
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{ color: "#071028" }}
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3
                    className="text-sm md:text-base font-semibold"
                    style={{ color: "#EDE6DA" }}
                  >
                    Biểu tượng của sức mạnh
                  </h3>
                  <p className="text-[rgba(237,230,218,0.88)] text-xs md:text-sm mt-1 max-w-xl">
                    Biểu tượng của sức mạnh và ý chí cách mạng — tôn vinh tinh
                    thần đoàn kết, đổi mới và sáng tạo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR floating card */}
      <aside
        className="fixed right-6 bottom-6 z-40 w-40 md:w-44 rounded-xl p-3 md:p-4 shadow-lg"
        role="region"
        aria-label="Mã QR tải ebook"
        style={{
          background:
            "linear-gradient(180deg, rgba(237,230,218,0.02), rgba(6,10,15,0.06))",
          border: "1px solid rgba(237,230,218,0.06)",
          backdropFilter: "blur(4px)",
        }}
      >
        <a
          href={qrEbook}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-2"
        >
          <img
            src={qrEbook}
            alt="Mã QR tải ebook"
            className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-md"
            loading="lazy"
          />
          <div className="text-center">
            <p
              className="text-xs md:text-sm font-medium"
              style={{ color: "#EDE6DA" }}
            >
              Scan để tải eBook
            </p>
            <p
              className="text-[10px] md:text-xs"
              style={{ color: "rgba(237,230,218,0.7)" }}
            >
              Hoặc chạm để mở
            </p>
          </div>
        </a>
      </aside>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToContent}
          aria-label="Cuộn xuống nội dung"
          className="flex items-center justify-center w-10 h-10 rounded-full"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(237,230,218,0.06)",
          }}
        >
          <ChevronDown
            className="w-5 h-5"
            style={{ color: "#EDE6DA", opacity: 0.95 }}
          />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
