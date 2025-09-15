import { Shield, Handshake, Megaphone } from "lucide-react";
export const conditions = [
  {
    id: 1,
    icon: Shield,
    title: "Có Đảng Cộng sản lãnh đạo",
    description:
      "Đảng Cộng sản là đội tiên phong của giai cấp công nhân, có vai trò lãnh đạo toàn diện về chính trị, tư tưởng và tổ chức. Đảng cung cấp đường lối, chính sách đúng đắn và tổ chức thực hiện sứ mệnh lịch sử.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    textColor: "text-red-800",
    tags: ["Đội tiên phong", "Lãnh đạo toàn diện", "Đường lối đúng đắn"],
    step: "01",
  },
  {
    id: 2,
    icon: Handshake,
    title: "Liên minh công – nông – trí thức",
    description:
      "Sự đoàn kết chặt chẽ giữa giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức tạo nên khối đại đoàn kết toàn dân, là lực lượng vật chất mạnh mẽ để thực hiện cách mạng xã hội.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-800",
    tags: ["Đại đoàn kết", "Liên minh giai cấp", "Lực lượng vật chất"],
    step: "02",
  },
  {
    id: 3,
    icon: Megaphone,
    title: "Phong trào cách mạng quần chúng",
    description:
      "Phong trào đấu tranh cách mạng rộng lớn của quần chúng nhân dân, thể hiện ý chí và quyết tâm của toàn thể nhân dân trong việc thực hiện mục tiêu giải phóng và xây dựng xã hội mới.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-800",
    tags: ["Phong trào quần chúng", "Ý chí nhân dân", "Đấu tranh cách mạng"],
    step: "03",
  },
];
