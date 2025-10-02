import { BookOpen, Building, DollarSign, Users } from "lucide-react";

export const missions = [
  {
    id: "m1",
    title: "Xây dựng liên minh cơ bản",
    subtitle: "Tạo nền tảng xã hội - chính trị",
    description:
      "Xác lập liên minh giữa công nhân, nông dân, trí thức và các tầng lớp yêu nước — đảm bảo khối đại đoàn kết trong nước làm nền tảng cho mọi hoạt động chính trị, kinh tế và văn hóa.",
    fullText: `Bước 1: Xây dựng liên minh cơ bản
Mục tiêu của bước này là tập hợp các lực lượng xã hội có lợi ích chung để tạo nên một tiền tuyến rộng rãi cho sự nghiệp xây dựng và bảo vệ Tổ quốc.
Nội dung thực hiện gồm:
- Tuyên truyền, vận động các tầng lớp tham gia phong trào yêu nước.
- Hoà giải, thu hút các lực lượng dân tộc nhỏ, người lao động và trí thức.
- Xác định điểm chung lợi ích để làm nền tảng hợp tác lâu dài.

Ví dụ thực tế:
Sau cách mạng tháng Tám, việc tổ chức mặt trận rộng rãi đã tạo ra sức mạnh tổng hợp giúp ổn định tình hình chính trị và mở rộng lực lượng ủng hộ.`,
    tags: ["Liên minh", "Xã hội", "Tuyên truyền"],
    icon: Users,
    // soft indigo → sky
    colorClass: "from-teal-400 to-cyan-500",
    tagBg: "bg-teal-50",
    tagText: "text-teal-600",
    hasQuiz: false,
    sources: [
      {
        title: "Tư liệu: Văn kiện Đảng về Mặt trận Dân tộc",
        url: "https://example.com/source1",
      },
    ],
  },
  {
    id: "m2",
    title: "Tổ chức Mặt trận và phong trào quần chúng",
    subtitle: "Kết nối và huy động rộng rãi",
    description:
      "Tổ chức các hình thức quần chúng, mặt trận, đoàn thể để huy động sức người, sức của phục vụ mục tiêu độc lập, hòa bình và phát triển — đảm bảo tính đại diện và bền vững.",
    fullText: `Bước 2: Tổ chức Mặt trận và phong trào quần chúng
Nội dung chính:
- Thiết lập cơ chế tổ chức: Mặt trận, đoàn thể, hiệp hội nghề nghiệp.
- Vận động quần chúng tham gia các chương trình xã hội, kinh tế, văn hoá.
- Bảo đảm tiếng nói đại diện của các nhóm xã hội trong chính sách.

Lưu ý phương pháp:
1. Làm sao để đảm bảo tính đại diện thực tế (không hình thức).
2. Xây dựng kênh phản ánh và giám sát từ cơ sở.
3. Phối hợp chặt chẽ giữa tổ chức quần chúng và cơ quan lãnh đạo chính trị.

(Phần này thường rất thực tế: phải có chính sách, ngân sách nhỏ cho hoạt động, và đội ngũ điều phối.)`,
    tags: ["Mặt trận", "Quần chúng", "Tổ chức"],
    icon: Building,
    // đổi từ harsh rose→amber thành teal→cyan mềm hơn
    colorClass: "from-teal-400 to-cyan-500",
    tagBg: "bg-teal-50",
    tagText: "text-teal-600",
    hasQuiz: false, // <-- đã tắt quiz cho mission này
    sources: [
      {
        title: "Bài viết phân tích về tổ chức quần chúng",
        url: "https://example.com/source2",
      },
    ],
  },
  {
    id: "m3",
    title: "Bảo đảm chính sách và lãnh đạo",
    subtitle: "Lãnh đạo chính trị và cơ chế bảo vệ",
    description:
      "Cần có cơ chế pháp lý, chính sách xã hội và sự lãnh đạo xuyên suốt để duy trì đoàn kết — việc này đảm bảo các mục tiêu lâu dài được thực hiện và bảo vệ lợi ích chung.",
    fullText: `Bước 3: Bảo đảm chính sách và lãnh đạo
Mục tiêu là tạo môi trường pháp lý và chính sách cho mọi hoạt động đoàn kết có hiệu quả.
Nội dung:
- Ban hành chính sách hỗ trợ các chương trình dân sinh.
- Bảo đảm quyền lợi chính đáng của các tầng lớp tham gia.
- Lãnh đạo, giám sát để tránh sai lệch và duy trì tính minh bạch.

Ví dụ:
Chính sách an sinh, giáo dục, chăm sóc y tế giúp giảm mâu thuẫn xã hội, tăng tính bền vững của liên minh.`,
    tags: ["Chính sách", "Lãnh đạo", "Bền vững"],
    icon: DollarSign,
    colorClass: "from-teal-400 to-cyan-500",
    tagBg: "bg-teal-50",
    tagText: "text-teal-600",
    hasQuiz: false,
    sources: [
      {
        title: "Văn kiện, chính sách liên quan",
        url: "https://example.com/source3",
      },
    ],
  },
];

export default missions;
