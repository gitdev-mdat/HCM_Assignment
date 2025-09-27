import { Shield, Handshake, Megaphone } from "lucide-react";
export const conditions = [
  {
    id: 1,
    icon: Shield,
    title: "Truyền thống dân tộc",
    description:
      "Kế thừa truyền thống: yêu nước – nhân nghĩa – đoàn kết. Bài học từ lịch sử: 'Dân ta có một lòng nồng nàn yêu nước...'.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    textColor: "text-red-800",
    tags: ["Yêu nước", "Nhân nghĩa", "Truyền thống"],
    step: "01",
  },
  {
    id: 2,
    icon: Handshake,
    title: "Lòng khoan dung, độ lượng",
    description:
      "Hồ Chí Minh đề cao: trân trọng phần thiện dù nhỏ nhất, gác bỏ hận thù, đoàn kết cả những người từng đối lập. Quan điểm: 'Lấy chí công vô tư để cảm hóa con người'.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-800",
    tags: ["Khoan dung", "Bao dung", "Cầu đồng"],
    step: "02",
  },
  {
    id: 3,
    icon: Megaphone,
    title: "Tin vào nhân dân",
    description:
      "Hồ Chí Minh khẳng định: 'Trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng lực lượng đoàn kết của nhân dân'. Nhân dân là gốc rễ, nền tảng của khối đoàn kết.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-800",
    tags: ["Dân chủ", "Tin dân", "Dựa dân"],
    step: "03",
  },
];
