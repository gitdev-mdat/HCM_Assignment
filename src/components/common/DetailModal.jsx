// src/components/common/DetailModal.jsx
import React, { useEffect, useRef, useState } from "react";

const DetailModal = ({ open, onClose, item }) => {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(true);

  useEffect(() => {
    if (open) {
      // animate in
      setIsVisible(true);
      // focus first focusable element in modal
      const prev = document.activeElement;
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 120);
      return () => {
        prev?.focus?.();
      };
    } else {
      setIsVisible(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") {
        onClose?.();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !item) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(item.fullText || item.summary || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error("copy failed", err);
      setCopied(false);
    }
  };

  const handleDownload = () => {
    const filename = `${(item.title || "detail").replace(/\s+/g, "_")}.txt`;
    const blob = new Blob(
      [`# ${item.title}\n\n${item.fullText || item.summary || ""}`],
      {
        type: "text/plain;charset=utf-8",
      }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    // simple print: open new window with content and call print
    const w = window.open("", "_blank", "noopener,noreferrer");
    if (!w) return;
    w.document.write(`
      <html>
        <head>
          <title>${item.title}</title>
        </head>
        <body>
          <h1>${item.title}</h1>
          <pre style="white-space:pre-wrap;font-family:inherit">${(
            item.fullText ||
            item.summary ||
            ""
          ).replace(/</g, "&lt;")}</pre>
        </body>
      </html>`);
    w.document.close();
    w.focus();
    setTimeout(() => w.print(), 300);
  };

  // split fullText into paragraphs for nicer layout (if present)
  const paragraphs = (item.fullText || item.summary || "")
    .split(/\n{1,}/)
    .filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — chi tiết`}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 transform transition-all duration-200 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* header */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 text-gray-800 font-semibold">
                {item.step}
              </div>
              <div>
                <div className="text-sm text-gray-500">Bước {item.step}</div>
                <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
            {item.summary && (
              <div className="text-sm text-gray-600 mt-3 whitespace-pre-line">
                {item.summary}
              </div>
            )}
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              {/* <button
                ref={closeBtnRef}
                onClick={handleCopy}
                className="px-3 py-1 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm"
                title="Sao chép nội dung"
                aria-label="Sao chép nội dung"
              >
                {copied ? "Đã sao chép" : "Sao chép"}
              </button> */}

              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm whitespace-nowrap"
                title="Tải về"
                aria-label="Tải về"
              >
                Tải về
              </button>

              {/* 
              <button
                onClick={handlePrint}
                className="px-3 py-1 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm"
                title="In nội dung"
                aria-label="In nội dung"
              >
                In
              </button> */}

              <button
                onClick={onClose}
                className="ml-1 rounded-full p-2 text-gray-600 hover:bg-gray-100"
                aria-label="Đóng"
                title="Đóng"
              >
                ✕
              </button>
            </div>

            <div className="text-xs text-gray-400">Nhấn Esc để đóng</div>
          </div>
        </div>

        <hr className="my-4" />

        {/* details accordion */}
        <div className="prose max-w-none text-gray-700">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-lg font-semibold text-gray-800">
              Nội dung chi tiết
            </h4>
            <button
              onClick={() => setDetailsOpen((s) => !s)}
              className="text-sm text-indigo-600 hover:underline"
              aria-expanded={detailsOpen}
            >
              {detailsOpen ? "Thu gọn" : "Mở rộng"}
            </button>
          </div>

          <details open={detailsOpen} className="mb-4">
            <summary className="sr-only">Nội dung</summary>
            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-gray-700 leading-relaxed"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </details>

          {/* optional extras: tags */}
          {item.tags?.length > 0 && (
            <div className="mt-2">
              <h5 className="text-sm font-medium text-gray-700 mb-2">Tags</h5>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* sources */}
          {item.sources?.length > 0 && (
            <>
              <h4 className="mt-4 font-semibold text-gray-800">
                Nguồn tham khảo
              </h4>
              <ul className="list-none pl-0 mt-2 space-y-2">
                {item.sources.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between gap-3"
                  >
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-blue-600 hover:underline max-w-[80%] break-words"
                    >
                      {s.title}
                    </a>
                    <div className="flex items-center gap-2">
                      {/* <button
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(s.url);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 1400);
                          } catch (e) {
                            console.error(e);
                          }
                        }}
                        className="text-sm text-gray-500 hover:text-gray-700"
                        aria-label="Sao chép link"
                        title="Sao chép link"
                      >
                        Sao chép
                      </button> */}
                      {/* <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-gray-500 hover:text-gray-700"
                        aria-label="Mở nguồn"
                        title="Mở nguồn"
                      >
                        Mở
                      </a> */}
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* footer actions */}
        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
