import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  Award,
  Clock,
  BookOpen,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { quiz } from "../../data/quiz";

const QuizComponent = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(0);

  // Timer effect
  useEffect(() => {
    if (quizStarted && !showResults && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResults) {
      handleSubmitQuiz();
    }
  }, [timeLeft, quizStarted, showResults]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer,
    });
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    quiz.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setTimeLeft(1200);
    setQuizStarted(false);
    setScore(0);
  };

  const getScoreColor = () => {
    const percentage = (score / quiz.length) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreMessage = () => {
    const percentage = (score / quiz.length) * 100;
    if (percentage >= 90)
      return "Xuất sắc! Bạn đã nắm vững kiến thức về sứ mệnh lịch sử của giai cấp công nhân.";
    if (percentage >= 80) return "Tốt! Bạn có hiểu biết khá tốt về chủ đề này.";
    if (percentage >= 60) return "Khá! Bạn nên ôn tập thêm một số nội dung.";
    return "Cần cải thiện! Hãy học kỹ lại lý thuyết về sứ mệnh lịch sử của giai cấp công nhân.";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {!quizStarted && !showResults ? (
          // Quiz Introduction
          <div className="p-8 text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-2xl mb-8">
              <BookOpen className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">
                Quiz: Sứ mệnh lịch sử của giai cấp công nhân
              </h2>
              <p className="text-red-100">
                Kiểm tra kiến thức của bạn về chủ đề quan trọng này
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800">Thời gian</h3>
                <p className="text-blue-600">20 phút</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800">Số câu hỏi</h3>
                <p className="text-green-600">{quiz.length} câu</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800">Điểm đạt</h3>
                <p className="text-purple-600">≥ 12/20</p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 mb-8">
              <h4 className="font-semibold text-gray-800 mb-2">Lưu ý:</h4>
              <ul className="text-sm text-gray-600 text-left space-y-1">
                <li>• Mỗi câu hỏi chỉ có một đáp án đúng</li>
                <li>
                  • Bạn có thể xem lại và thay đổi đáp án trước khi nộp bài
                </li>
                <li>• Thời gian làm bài là 20 phút</li>
              </ul>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setQuizStarted(true)}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl flex items-center gap-2 transform transition-all duration-300 hover:scale-105"
              >
                Bắt đầu quiz
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="px-8 py-4 border-2 border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold rounded-xl transition-all duration-300"
              >
                Hủy bỏ
              </button>
            </div>
          </div>
        ) : showResults ? (
          // Quiz Results
          <div className="p-8">
            <div className="text-center mb-8">
              <div
                className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  score >= quiz.length * 0.6 ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <Award
                  className={`w-10 h-10 ${
                    score >= quiz.length * 0.6
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Kết quả bài quiz
              </h2>
              <div className={`text-4xl font-bold mb-4 ${getScoreColor()}`}>
                {score}/{quiz.length}
              </div>
              <div className={`text-xl font-semibold mb-4 ${getScoreColor()}`}>
                {Math.round((score / quiz.length) * 100)}%
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {getScoreMessage()}
              </p>
            </div>

            {/* Detailed Results */}
            <div className="max-h-96 overflow-y-auto mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Chi tiết kết quả:
              </h3>
              <div className="space-y-4">
                {quiz.map((q, index) => {
                  const userAnswer = selectedAnswers[q.id];
                  const isCorrect = userAnswer === q.answer;
                  return (
                    <div
                      key={q.id}
                      className={`border rounded-lg p-4 ${
                        isCorrect
                          ? "border-green-200 bg-green-50"
                          : "border-red-200 bg-red-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-800 mb-2">
                            Câu {index + 1}: {q.question}
                          </p>
                          <div className="text-sm">
                            <p className="text-gray-600">
                              Bạn chọn:{" "}
                              <span
                                className={
                                  userAnswer ? "font-semibold" : "text-gray-400"
                                }
                              >
                                {userAnswer
                                  ? `${userAnswer}. ${q.options[userAnswer]}`
                                  : "Không trả lời"}
                              </span>
                            </p>
                            {!isCorrect && (
                              <p className="text-green-600 mt-1">
                                Đáp án đúng:{" "}
                                <span className="font-semibold">
                                  {q.answer}. {q.options[q.answer]}
                                </span>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl flex items-center gap-2 transition-all duration-300"
              >
                <RotateCcw className="w-5 h-5" />
                Làm lại
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 border-2 border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold rounded-xl transition-all duration-300"
              >
                Đóng
              </button>
            </div>
          </div>
        ) : (
          // Quiz Questions
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">
                    Câu {currentQuestion + 1}/{quiz.length}
                  </h2>
                  <div className="w-full bg-red-800 rounded-full h-2 mt-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${
                          ((currentQuestion + 1) / quiz.length) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-yellow-300">
                    <Clock className="w-5 h-5" />
                    <span className="font-mono text-lg">
                      {formatTime(timeLeft)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Question Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
                  {quiz[currentQuestion].question}
                </h3>

                <div className="space-y-3">
                  {Object.entries(quiz[currentQuestion].options).map(
                    ([key, value]) => (
                      <label
                        key={key}
                        className={`block p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
                          selectedAnswers[quiz[currentQuestion].id] === key
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name={`question-${quiz[currentQuestion].id}`}
                            value={key}
                            checked={
                              selectedAnswers[quiz[currentQuestion].id] === key
                            }
                            onChange={() =>
                              handleAnswerSelect(quiz[currentQuestion].id, key)
                            }
                            className="w-5 h-5 text-red-600"
                          />
                          <span className="font-semibold text-red-600 min-w-[24px]">
                            {key}.
                          </span>
                          <span className="text-gray-800">{value}</span>
                        </div>
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="border-t p-6">
              <div className="flex justify-between items-center">
                <button
                  onClick={() =>
                    setCurrentQuestion(Math.max(0, currentQuestion - 1))
                  }
                  disabled={currentQuestion === 0}
                  className="px-4 py-2 border-2 border-gray-300 text-gray-600 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 flex items-center gap-2 transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Câu trước
                </button>

                <div className="text-sm text-gray-600">
                  Đã trả lời: {Object.keys(selectedAnswers).length}/
                  {quiz.length}
                </div>

                {currentQuestion < quiz.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuestion(currentQuestion + 1)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-all duration-200"
                  >
                    Câu tiếp
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitQuiz}
                    disabled={Object.keys(selectedAnswers).length < quiz.length}
                    className="px-6 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all duration-200"
                  >
                    Nộp bài
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
