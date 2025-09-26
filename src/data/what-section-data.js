import { BookOpen, Building, DollarSign, Users } from "lucide-react";

export const missions = [
  {
    id: 1,
    icon: DollarSign,
    title: "Phong trào cách mạng thế giới",
    subtitle: "Tham gia và cổ vũ phong trào chống đế quốc, bảo vệ hòa bình, dân chủ và CNXH",
    description:
      `- Góp phần đánh bại thực dân, phát xít.
        - Truyền cảm hứng và hỗ trợ các dân tộc bị áp bức đứng lên tự giải phóng.`,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-800",
    tags: ["Chống đế quốc", "Giải phóng dân tộc", "Hòa bình – dân chủ"],
  },
  {
    id: 2,
    icon: Building,
    title: "Chính trị",
    subtitle: "Kết hợp sức mạnh dân tộc với sức mạnh thời đại, tạo thế chính trị – ngoại giao thuận lợi",
    description:
      `- Liên kết phong trào cách mạng thế giới để giành thắng lợi.
        - Tranh thủ sự ủng hộ quốc tế cho độc lập và thống nhất đất nước.`,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-800",
    tags: ["Sức mạnh thời đại", "Ngoại giao cách mạng", "Kết hợp dân tộc – quốc tế"],
  },
  {
    id: 3,
    icon: Users,
    title: "Quan hệ quốc tế",
    subtitle: "Xây dựng khối đoàn kết khu vực và toàn cầu, tranh thủ sự giúp đỡ quốc tế",
    description:
      `- Thành lập các mặt trận đoàn kết: Việt – Miên – Lào; Á – Phi; phong trào nhân dân thế giới.
        - Nhận hỗ trợ chính trị, vật chất và tinh thần từ bạn bè quốc tế.`,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    textColor: "text-red-800",
    tags: ["Đoàn kết khu vực", "Liên minh nhân dân thế giới", "Hỗ trợ quốc tế"],
  },
  {
    id: 4,
    icon: BookOpen,
    title: "Giá trị nhân văn – quốc tế",
    subtitle: "Gắn chủ nghĩa yêu nước với chủ nghĩa quốc tế trong sáng, đề cao hòa bình và công lý",
    description:
      `- Khẳng định quyền tự quyết của các dân tộc.
        - Thúc đẩy hợp tác bình đẳng, tôn trọng lẫn nhau.`,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-800",
    tags: ["Quốc tế trong sáng", "Hòa bình – công lý", "Quyền tự quyết"],
  },
];
