import React from "react";
import { Globe, TrendingUp, Flag, Star, Users, Building2 } from "lucide-react";
import { impacts, vietnamAchievements } from "../../data/impact-section-data";

const ImpactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ý nghĩa của sứ mệnh lịch sử
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Tác động sâu sắc của sứ mệnh lịch sử đối với sự phát triển của nhân
            loại
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Global Impact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {impacts.map((impact) => {
            const IconComponent = impact.icon;
            return (
              <div
                key={impact.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${impact.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {impact.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vietnam Focus Section */}
        <div className="bg-red-500 rounded-3xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-10 h-10 text-red-600" fill="yellow" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ở Việt Nam: Vai trò lãnh đạo của giai cấp công nhân
            </h3>
            <p className="text-red-100 text-lg max-w-4xl mx-auto">
              Thông qua Đảng Cộng sản Việt Nam trong công cuộc đổi mới và xây
              dựng chủ nghĩa xã hội
            </p>
          </div>

          {/* Historical Quote */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-6 mb-8 backdrop-blur-sm border border-white border-opacity-20">
            <blockquote className="text-center">
              <p className="text-lg italic text-gray-600 mb-4">
                "Đảng ta là đại biểu trung thành của giai cấp công nhân, của
                nhân dân lao động và của cả dân tộc Việt Nam"
              </p>
              <cite className="text-yellow-600 font-semibold">
                - Chủ tịch Hồ Chí Minh
              </cite>
            </blockquote>
          </div>

          {/* Vietnam Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vietnamAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">
                    {achievement.title}
                  </h4>
                  <p className="text-red-100 text-sm">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vietnam Mission Emphasis */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-red-100">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Sứ mệnh của giai cấp công nhân Việt Nam
            </h4>
            <div className="w-16 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Current Mission */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-red-600" />
                <h5 className="text-lg font-bold text-gray-800">
                  Nhiệm vụ hiện tại
                </h5>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Phát triển dân chủ xã hội chủ nghĩa, đảm bảo quyền làm chủ
                    của nhân dân
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Xây dựng con người Việt Nam phát triển toàn diện</span>
                </li>
              </ul>
            </div>

            {/* Future Vision */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <h5 className="text-lg font-bold text-gray-800">
                  Tầm nhìn tương lai
                </h5>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Đưa Việt Nam trở thành nước phát triển, thu nhập cao
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Xây dựng xã hội công bằng, dân chủ, văn minh</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Góp phần vào sự nghiệp giải phóng nhân loại</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl p-6">
            <p className="text-lg font-semibold">
              Sứ mệnh lịch sử của giai cấp công nhân Việt Nam là
              <span className="text-yellow-300">
                {" "}
                tiếp tục đổi mới, phát triển đất nước
              </span>
              và góp phần vào sự nghiệp giải phóng nhân loại trên toàn thế giới.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
