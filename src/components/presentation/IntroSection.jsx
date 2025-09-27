import { Factory, Flag, Target, Users } from "lucide-react";

const IntroSection = () => {
  return (
    <section
      id="content-section"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Giới thiệu khái niệm
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Column 1: Giai cấp công nhân */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                {/* Factory icon as decoration */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                  <Factory className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Đại đoàn kết dân tộc
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-lg">
                Đoàn kết mọi tầng lớp, giai cấp, dân tộc, tôn giáo, không phân biệt quá khứ, 
                miễn là yêu nước và vì lợi ích dân tộc.
              </p>

              {/* Key characteristics */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Toàn dân
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Toàn diện
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Toàn cầu
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Sứ mệnh lịch sử */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                {/* Flag icon as decoration */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Flag className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Đoàn kết quốc tế
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-lg">
                Liên kết, hợp tác với các lực lượng cách mạng và tiến bộ trên thế giới 
                để tạo sức mạnh thời đại.
              </p>

              {/* Mission goals */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Chiến lược
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Động lực
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Cầu nối
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom connecting element */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-red-500 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-l from-red-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
