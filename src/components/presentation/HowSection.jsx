import React from "react";
import { Shield, Handshake, Megaphone } from "lucide-react";
import { conditions } from "../../data/how-section-data";

const HowSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Điều kiện để thực hiện sứ mệnh
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Ba điều kiện cần thiết để giai cấp công nhân hoàn thành sứ mệnh lịch
            sử
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Conditions Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {conditions.map((condition, index) => {
            const IconComponent = condition.icon;
            return (
              <div
                key={condition.id}
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group hover:-translate-y-1"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${condition.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-white font-bold text-lg">
                      {condition.step}
                    </span>
                  </div>
                </div>

                {/* Icon Container */}
                <div className="flex justify-center mb-6 mt-4">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${condition.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                    {condition.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {condition.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {condition.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 ${condition.bgColor} ${condition.textColor} rounded-full text-sm font-medium`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connecting Line (except last card) */}
                {index < conditions.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <div className="w-12 h-px bg-gradient-to-r from-gray-300 to-gray-400"></div>
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Process Flow Visualization */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <h4 className="text-xl font-bold text-gray-800 mb-4">
              Quy trình thực hiện
            </h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-red-600" />
                <span className="text-gray-700 font-medium">Đảng lãnh đạo</span>
              </div>
              <div className="hidden md:block text-gray-400">→</div>
              <div className="flex items-center gap-2">
                <Handshake className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-medium">
                  Liên minh giai cấp
                </span>
              </div>
              <div className="hidden md:block text-gray-400">→</div>
              <div className="flex items-center gap-2">
                <Megaphone className="w-6 h-6 text-green-600" />
                <span className="text-gray-700 font-medium">
                  Phong trào quần chúng
                </span>
              </div>
            </div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Ba điều kiện này phải được thực hiện đồng bộ và bổ trợ lẫn nhau để
              <span className="font-semibold text-gray-800">
                {" "}
                đảm bảo thành công của sứ mệnh lịch sử
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
