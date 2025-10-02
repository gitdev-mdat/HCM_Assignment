// src/data/why-section-data.js
import { Bolt, Target, Globe, Building } from "lucide-react";

export const reasons = [
  {
    id: "r1",
    title: "Sức mạnh vô địch",
    description:
      "Đoàn kết tạo sức mạnh vô địch, quyết định mọi thắng lợi trong cách mạng và xây dựng đất nước.",
    fullText:
      "Chi tiết: Đoàn kết là yếu tố cốt lõi tạo nên sức mạnh tổng hợp. Khi các tầng lớp, lực lượng chính trị và nhân dân cùng mục tiêu, lợi ích chung sẽ tạo áp lực, nguồn lực và năng lực hành động mạnh mẽ hơn. Ví dụ ... (thêm nội dung chi tiết, dẫn nguồn).",
    tags: ["Sức mạnh", "Chiến thắng", "Thống nhất"],
    icon: Bolt,
    // updated to cool indigo → sky gradient
    colorClass: "from-indigo-500 to-sky-500",
    sources: [
      { title: "Tài liệu A", url: "https://example.com/source-a" },
      { title: "Tài liệu B", url: "https://example.com/source-b" },
    ],
  },
  {
    id: "r2",
    title: "Mục tiêu – Nhiệm vụ – Chiến lược",
    description:
      "Đoàn kết là mục tiêu hàng đầu, là nhiệm vụ chiến lược của Đảng trong suốt quá trình cách mạng.",
    fullText:
      "Chi tiết: Mục tiêu của đoàn kết là bảo vệ lợi ích dân tộc, củng cố lực lượng trong nước, tạo nền tảng phát triển lâu dài. Nhiệm vụ cụ thể bao gồm ... (thêm ví dụ, nguồn).",
    tags: ["Mục tiêu", "Nhiệm vụ", "Chiến lược"],
    icon: Target,
    // softer teal/cyan instead of harsh rose→amber
    colorClass: "from-teal-400 to-cyan-500",
    sources: [{ title: "Tài liệu C", url: "https://example.com/source-c" }],
  },
  {
    id: "r3",
    title: "Dân tộc gắn liền quốc tế",
    description:
      "Kết hợp sức mạnh dân tộc với sức mạnh thời đại, tạo nên sức mạnh tổng hợp trong xây dựng và bảo vệ Tổ quốc.",
    fullText:
      "Chi tiết: Đoàn kết quốc tế giúp tiếp thu kinh nghiệm, tìm kiếm sự ủng hộ chính trị - vật chất, đồng thời tăng vị thế quốc gia. Ví dụ cụ thể ...",
    tags: ["Dân tộc", "Quốc tế", "Thời đại"],
    icon: Globe,
    // gentle green → emerald
    colorClass: "from-emerald-500 to-teal-500",
    sources: [],
  },
  {
    id: "r4",
    title: "Xây dựng Chủ nghĩa Xã hội",
    description:
      "Đoàn kết giúp khắc phục khó khăn, huy động nguồn lực, xây dựng chủ nghĩa xã hội và phát triển bền vững.",
    fullText:
      "Chi tiết: Trong tiến trình xây dựng CNXH, đoàn kết nội bộ và hợp tác quốc tế là nhân tố giúp ổn định chính trị, huy động nguồn lực cho phát triển, đảm bảo tiến trình bền vững...",
    tags: ["Khó khăn", "CNXH", "Phát triển"],
    icon: Building,
    // calm violet → indigo for variety but still soft
    colorClass: "from-violet-500 to-indigo-500",
    sources: [],
  },
];

export default reasons;
