import { ChevronDown, Cog, Flame } from "lucide-react";
import TextReveal from "../common/TextReveal";
import HoverShadowButton from "../nurui/shadow-button";

const HeroSection = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById("content-section");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20">
        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
        {/* Diagonal Lines Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 20px
            )`,
          }}
        ></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 animate-bounce opacity-30">
        <Cog className="w-16 h-16 text-yellow-300 animate-spin-slow" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse opacity-40">
        <Flame className="w-12 h-12 text-orange-400" />
      </div>
      <div
        className="absolute bottom-40 left-20 animate-bounce opacity-20"
        style={{ animationDelay: "1s" }}
      >
        <Cog className="w-10 h-10 text-yellow-200 animate-spin-slow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <div data-aos="zoom-out-up">
              <span className="block mb-2">Sứ mệnh lịch sử</span>
            </div>
            <div data-aos="zoom-out-up">
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                của giai cấp công nhân
              </span>
            </div>
          </h1>

          {/* Subtitle/Message */}
          <TextReveal text="Từ khổ đau đến lãnh đạo – Giai cấp công nhân và sứ mệnh lịch sử giải phóng nhân loại." />

          {/* Decorative Line */}
          <div className="flex items-center justify-center mb-10">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-64"></div>
            <Flame className="mx-4 w-6 h-6 text-yellow-400" />
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-64"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <HoverShadowButton
              text={"Khám phá ngay"}
              onClick={scrollToContent}
            />
          </div>

          {/* Historical Illustration Placeholder */}
          <div className="relative mx-auto max-w-lg">
            <div className="bg-black bg-opacity-20 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20">
              <div className="flex items-center justify-center space-x-6">
                {/* Worker Icon */}
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>

                {/* Gear */}
                <Cog className="w-12 h-12 text-yellow-300 animate-spin-slow" />

                {/* Torch */}
                <Flame className="w-12 h-12 text-orange-400 animate-pulse" />
              </div>
              <p className="text-red-100 text-sm mt-4 opacity-80">
                Biểu tượng của sức mạnh và ý chí cách mạng
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white opacity-60" />
      </div>
    </section>
  );
};

export default HeroSection;
