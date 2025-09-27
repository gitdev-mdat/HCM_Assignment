import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Book,
  Users,
  Copyright,
  ExternalLink,
  Star,
} from "lucide-react";
import qrEbook from "../../assets/qr.png";

const Footer = () => {
  const references = [
    {
      title: "Giáo trình Chủ nghĩa xã hội khoa học",
      author: "Học viện Chính trị Quốc gia Hồ Chí Minh",
      year: "2019",
      type: "Giáo trình",
      link: "https://moet.gov.vn/content/vanban/Lists/VBDH/Attachments/2730/GT%20h%E1%BB%8Dc%20ph%E1%BA%A7n%20Ch%E1%BB%A7%20ngh%C4%A9a%20x%C3%A3%20h%E1%BB%99i%20khoa%20h%E1%BB%8Dc%20(C)%20Tr%20%C4%91%E1%BA%A7u%20-%20tr60.pdf",
    },
  ];

  const teamMembers = [
    { name: "Thi Minh Đạt", role: "Trưởng nhóm", id: "SE184167" },
    { name: "Nguyễn Ngọc Bảo Phúc", role: "Làm Quiz", id: "SE184167" },
    { name: "Nguyễn Long Nguyễn", role: "Nghiên cứu nội dung", id: "SE161940" },
    {
      name: "Nguyễn Tuấn Kiệt",
      role: "Nghiên cứu nội dung và làm Ebook",
      id: "SE172079",
    },
    { name: "Chu Hữu Phước", role: "Nghiên cứu nội dung", id: "SE172185" },
    { name: "Trần Hải Long", role: "Nghiên cứu nội dung", id: "SE150884" },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6 text-red-400" />
              Thông tin liên hệ
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Trường Đại học FPT</p>
                  <p className="text-gray-300 text-sm">
                    7 Đ. D1, Long Thạnh Mỹ, Thủ Đức, Hồ Chí Minh
                  </p>
                </div>
              </div>

              {/* QR block: visible, responsive, clickable */}
              <div className="mt-4">
                <a
                  href={qrEbook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-4 bg-gray-800 p-3 rounded-lg hover:scale-[1.02] transition-transform duration-150"
                >
                  <img
                    src={qrEbook}
                    alt="QR Ebook - Scan để tải ebook"
                    className="w-20 h-20 object-cover rounded-md shadow-md flex-shrink-0"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-sm text-gray-100">
                      Scan để tải eBook
                    </p>
                    <p className="text-xs text-gray-400">
                      Ebook: "Tư tưởng Hồ Chí Minh về Đại đoàn kết dân tộc" (tài
                      liệu tham khảo)
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Mở ảnh → tải về
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* References */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Book className="w-6 h-6 text-blue-400" />
              Nguồn tài liệu tham khảo
            </h3>

            <div className="space-y-4">
              {references.map((ref, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4
                      className="font-semibold text-blue-200 text-sm leading-tight cursor-pointer"
                      onClick={() => window.open(ref.link, "_blank")}
                    >
                      {ref.title}
                    </h4>
                    <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded ml-2 flex-shrink-0">
                      {ref.type}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{ref.author}</p>
                  <p className="text-gray-400 text-xs">
                    Năm xuất bản: {ref.year}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-3 bg-blue-900 bg-opacity-50 rounded-lg border border-blue-700">
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <ExternalLink className="w-4 h-4" />
                <span>
                  Tài liệu được tham khảo từ các nguồn chính thức và uy tín
                </span>
              </div>
            </div>
          </div>

          {/* Team Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-green-400" />
              Nhóm thực hiện
            </h3>

            <div className="space-y-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-200">
                        {member.name}
                      </h4>
                      <p className="text-gray-300 text-sm">{member.role}</p>
                      <p className="text-gray-400 text-xs">MSSV: {member.id}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Info */}
            <div className="mt-6 p-4 bg-green-900 bg-opacity-50 rounded-lg border border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <h4 className="font-semibold text-green-200">
                  Sản phẩm sáng tạo
                </h4>
              </div>
              <p className="text-green-100 text-sm">
                Bài thuyết trình: "Tư tưởng Hồ Chí Minh về Đại đoàn kết dân tộc"
              </p>
              <p className="text-green-200 text-xs mt-1">Học kỳ Fall 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400">
              <Copyright className="w-4 h-4" />
              <span className="text-sm">
                Được thực hiện cho mục đích học tập.
              </span>
            </div>

            {/* Additional Info */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Môn: HCM</span>
              <span>•</span>
              <span>FPT University</span>
              <span>•</span>
              <span>Fall 2025</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-center text-xs text-gray-500">
              Đây là sản phẩm học tập của sinh viên. Mọi nội dung được tham khảo
              từ các nguồn tài liệu chính thức và được trình bày với mục đích
              giáo dục.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
