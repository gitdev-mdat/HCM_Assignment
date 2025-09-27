import { Cog, Factory, Users } from "lucide-react";
import { reasons } from "../../data/why-section-data";

const WhySection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Vì sao cần đoàn kết?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Những lý do cơ bản cho sự cần thiết của đoàn kết dân tộc và quốc tế
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                    {reason.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {reason.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 justify-center">
                    {reason.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 ${reason.bgColor} ${reason.textColor} rounded-full text-xs font-medium`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-3">
                <Factory className="w-6 h-6 text-red-600" />
                <Cog className="w-6 h-6 text-red-600 animate-spin-slow" />
                <Users className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Kết luận</h4>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Chính những đặc điểm khách quan này đã quyết định sứ mệnh lịch sử
              của giai cấp công nhân:
              <span className="font-semibold text-red-700">
                {" "}
                lãnh đạo cuộc đấu tranh giải phóng toàn thể nhân loại
              </span>
              và xây dựng xã hội mới.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
