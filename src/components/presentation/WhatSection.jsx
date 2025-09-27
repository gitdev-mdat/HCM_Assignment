import { BookOpen, Building, DollarSign, Users } from "lucide-react";
import { useState } from "react";
import { missions } from "../../data/what-section-data";
import QuizComponent from "../modals/QuizComponent";

const WhatSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Quy trình thực hiện
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Ba bước cơ bản trong quy trình thực hiện đại đoàn kết dân tộc và đoàn kết quốc tế
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {missions.map((mission) => {
            const IconComponent = mission.icon;
            return (
              <div
                key={mission.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-start">
                  {/* Icon Container */}
                  <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${mission.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {mission.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-600 mb-4">
                        {mission.subtitle}
                      </h4>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {mission.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {mission.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 ${mission.bgColor} ${mission.textColor} rounded-full text-sm font-medium`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-2xl p-8 border border-red-100">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4">
                <DollarSign className="w-8 h-8 text-emerald-600" />
                <Building className="w-8 h-8 text-blue-600" />
                <Users className="w-8 h-8 text-red-600" />
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Tổng quan quy trình
            </h4>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg">
              Ba bước thực hiện tuần tự và chặt chẽ từ
              <span className="font-semibold text-red-700">
                {" "}
                liên minh cơ bản đến tổ chức Mặt trận và sự lãnh đạo của Đảng
              </span>
              , tạo nên sức mạnh đại đoàn kết toàn dân tộc vững chắc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSection;
