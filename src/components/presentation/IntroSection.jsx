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
                Giai cấp công nhân là gì?
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-lg">
                Giai cấp công nhân là những người lao động bán sức lao động của
                mình để sinh sống, không sở hữu tư liệu sản xuất, tạo ra của cải
                vật chất cho xã hội thông qua lao động trong các nhà máy, xí
                nghiệp và các ngành công nghiệp.
              </p>

              {/* Key characteristics */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Lao động trực tiếp
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Tập thể
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Kỷ luật cao
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
                Sứ mệnh lịch sử là gì?
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-lg">
                Sứ mệnh lịch sử của giai cấp công nhân là lãnh đạo cuộc đấu
                tranh giải phóng toàn thể nhân loại khỏi chế độ bóc lột, xây
                dựng xã hội xã hội chủ nghĩa và cộng sản chủ nghĩa.
              </p>

              {/* Mission goals */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Giải phóng
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Lãnh đạo
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Cách mạng
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
