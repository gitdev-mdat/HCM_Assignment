🚀 Project Setup & Usage

Cách cài và chạy dự án (dành cho người dùng muốn thử chạy local):

Clone repo về máy:

git clone <https://github.com/gitdev-mdat/HCM_Assignment.git>
cd <your-repo-folder>


Cài đặt thư viện:

npm install
# hoặc yarn


Chạy trang web ở chế độ phát triển:

npm run dev
# trang sẽ mở ở http://localhost:5173 (hoặc terminal báo port khác)


(Tùy chọn) Build để deploy:

npm run build

🔗 Deployed Web URL

✍️ [https://hcm-assignment.vercel.app/]

💻 Project Introduction
a. Tổng quan

Trang web là một trang học tương tác trình bày Tư tưởng Hồ Chí Minh về Đại đoàn kết dân tộc và Đoàn kết quốc tế. Mục tiêu: giúp người học đọc nội dung, xem video minh họa, đọc chi tiết từng phần, làm quiz kiểm tra, và hỏi trợ lý AI (chat) để giải đáp nhanh.

b. Các chức năng chính & cách dùng (bằng ngôn ngữ đơn giản)

Trang chính / Hero

Nút Khám phá ngay: cuộn xuống phần nội dung.

Card QR: quét để tải eBook tham khảo.

Intro (Giới thiệu khái niệm)

Mỗi thẻ (card) có tiêu đề, tóm tắt, thumbnail video (nếu có).

Nút Xem video: mở video YouTube trong modal.

Nút Tìm hiểu thêm: mở modal chi tiết (DetailModal) chứa nội dung đầy đủ, ví dụ, nguồn tham khảo, tùy chọn Tải về (download dưới dạng .txt).

What / How / Why / Impact

Các phần được trình bày bằng card, mỗi card có: tiêu đề, tóm tắt, tag (nhãn), nút Xem chi tiết.

Nút Nguồn (nếu có) sẽ mở link tài liệu gốc trong tab mới.

Modal Chi tiết (DetailModal)

Hiển thị nội dung đầy đủ, có phân đoạn để đọc dễ.

Có nút Tải về để lưu nội dung dưới dạng file .txt.

Nhấn Esc hoặc click ngoài modal để đóng (khi đóng sẽ hỏi xác nhận nếu cần).

Video Modal (VideoModal)

Mở video YouTube trực tiếp trong modal (không chuyển tab).

Quiz (Kiểm tra)

Gồm 40 câu, thời gian 20 phút.

Giao diện rõ ràng: bắt đầu / hủy / điều hướng câu trước - câu tiếp.

Sau nộp: hiển thị điểm, chi tiết từng câu (đáp án của bạn và đáp án đúng).

Lưu ý: đóng modal giữa chừng sẽ cảnh báo mất tiến độ.

Floating Chat (Trợ lý AI)

Nút tròn ở góc dưới màn hình — click để mở chat.

Gõ câu hỏi rồi gửi. AI sẽ trả lời bằng tiếng Việt.

Cấu hình API key: nếu dự án sử dụng theo phương án client-side (demo), key được đặt trực tiếp trong file src/components/common/FloatingChatButton.jsx (hằng GEMINI_KEY). Nếu sử dụng proxy server (an toàn hơn), cần đặt biến môi trường GEMINI_API_KEY trên serverless (Vercel).

Cảnh báo: để key trên client = QUAN NGẠI bảo mật (mọi người nhìn thấy); nếu không rành, nhắn mình hướng dẫn cách deploy proxy (Vercel) để ẩn key.

Tải eBook

Nút/Tấm QR ở hero và footer: quét/mở để tải eBook tham khảo.

Copy Tag (nếu bật)

Một số tag có thể click để copy text của tag vào clipboard (giao diện có thông báo “Copied!”).

c. Điểm đặc biệt (Unique Features)

Tích hợp Chat AI (Gemini): người dùng có thể hỏi trợ lý bằng tiếng Việt để giải thích khái niệm, yêu cầu trích nguồn, hoặc hỏi ví dụ minh họa.

Modal chi tiết có xuất file: người dùng có thể lưu nội dung để in/đọc offline.

Quiz 40 câu: kiểm tra toàn diện, có đồng hồ và chi tiết đáp án sau khi nộp.

FE-first (không bắt buộc backend): dữ liệu tĩnh/quiz/điểm lưu local dễ dùng cho mục đích học tập.

d. Công nghệ & cách triển khai (ngắn gọn, để người dùng hiểu)

Frontend: React (JSX) + Tailwind CSS

Icons: lucide-react

Media: YouTube embedded trong modal

Lưu trữ tạm (nếu cần): localStorage (không có backend trong bản demo)

AI: Google Gemini (Generative Language API) — có thể gọi trực tiếp từ client (demo) hoặc qua một serverless proxy (khuyến nghị)

e. Kiến trúc dịch vụ & dữ liệu (nếu có backend)

Hiện tại (bản nộp học tập): frontend-only, không có database.
Nếu thêm backend: bạn có thể triển khai serverless (Vercel) để làm proxy gọi API Gemini (bảo mật key), hoặc thêm DB (Firestore / Postgres) để lưu điểm quiz, kết quả học tập, lịch sử người dùng.

🧠 Reflection (Phần suy nghĩ & phát triển thêm)
a. Nếu có thêm thời gian, sẽ mở rộng:

Đồng bộ lịch & nhắc nhở (Google Calendar, push notification).

Tài khoản người dùng + lưu tiến trình học, lịch sử quiz.

Thêm hình ảnh minh họa cho mỗi mục (gallery), infographics.

Nâng cấp trải nghiệm mobile & accessibility (hỗ trợ đọc màn hình).

b. Nếu mở rộng tích hợp AI:

Chuyển parsing AI sang server: gọi Gemini từ server (proxy) để ẩn API key, kiểm soát quota & log.

Dùng schema validation (JSON schema) để giảm hallucination — hiển thị preview cho người dùng trước khi lưu.

Tự động gợi ý trích nguồn/độ tin cậy nếu model trả lời không chắc chắn.

✅ Checklist (dành cho người kiểm thử / nộp bài)

 Code chạy không báo lỗi (npm run dev thành công).

 Tất cả chức năng chính hoạt động: Xem nội dung, Xem chi tiết, Mở video, Download nội dung.

 Quiz: bắt đầu, trả lời, nộp, xem kết quả.

 Chat AI: gửi câu hỏi, nhận trả lời (nếu bật Gemini).

 Tài liệu (README hoặc hướng dẫn) đã hoàn chỉnh.

 (Nếu bật) Đã thông báo rõ rủi ro nếu để API key trên client.

Hướng dẫn ngắn cho người dùng không chuyên (FAQ nhanh)

Muốn xem video minh họa: vào phần Giới thiệu, nhấn Xem video trên card tương ứng.

Muốn đọc chi tiết một mục: nhấn Tìm hiểu thêm hoặc Xem chi tiết, cửa sổ sẽ mở ra. Nhấn Tải về nếu muốn lưu.

Muốn làm Quiz: mở Quiz (từ menu hoặc nút trên trang), nhấn Bắt đầu quiz, làm từng câu, cuối cùng nhấn Nộp bài.

Muốn hỏi AI: bấm nút chat (góc dưới), gõ câu hỏi, gửi. Nếu không trả lời, thử viết lại ngắn gọn hơn.

Tải eBook: quét QR hoặc nhấn link eBook để tải file PDF.
