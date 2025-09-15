import { BookOpen, Building, DollarSign, Users } from "lucide-react";

export const missions = [
  {
    id: 1,
    icon: DollarSign,
    title: "Kinh tế",
    subtitle: "Xóa bỏ tư hữu, xây dựng công hữu",
    description:
      "Thay thế chế độ tư hữu tư liệu sản xuất bằng chế độ công hữu, loại bỏ nguồn gốc của sự bóc lột và bất bình đẳng xã hội, tạo nền tảng kinh tế cho sự phát triển bình đẳng của toàn xã hội.",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-800",
    tags: ["Công hữu hóa", "Xóa bỏ tư hữu", "Kinh tế xã hội chủ nghĩa"],
  },
  {
    id: 2,
    icon: Building,
    title: "Chính trị",
    subtitle: "Thiết lập nhà nước của nhân dân lao động",
    description:
      "Xây dựng nhà nước kiểu mới do giai cấp công nhân lãnh đạo, thể hiện quyền lực của nhân dân lao động, thay thế máy móc nhà nước tư sản, đảm bảo quyền làm chủ thực sự của người lao động.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-800",
    tags: ["Chuyên chính vô sản", "Quyền làm chủ", "Nhà nước công nhân"],
  },
  {
    id: 3,
    icon: Users,
    title: "Xã hội",
    subtitle: "Xóa bỏ bóc lột, công bằng – dân chủ – văn minh",
    description:
      "Xóa bỏ mọi hình thức bóc lột con người bởi con người, xây dựng xã hội công bằng, dân chủ và văn minh, nơi mọi người được phát triển toàn diện và hưởng thụ thành quả lao động một cách bình đẳng.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    textColor: "text-red-800",
    tags: ["Xóa bỏ bóc lột", "Công bằng xã hội", "Dân chủ"],
  },
  {
    id: 4,
    icon: BookOpen,
    title: "Văn hóa – Tư tưởng",
    subtitle: "Xây dựng hệ giá trị mới, phát triển con người",
    description:
      "Tạo ra hệ giá trị văn hóa, đạo đức mới phù hợp với xã hội xã hội chủ nghĩa, phát triển con người toàn diện về trí tuệ, thể chất và tinh thần, xóa bỏ tư tưởng cá nhân chủ nghĩa tư sản.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-800",
    tags: ["Giá trị mới", "Phát triển toàn diện", "Văn hóa xã hội chủ nghĩa"],
  },
];
