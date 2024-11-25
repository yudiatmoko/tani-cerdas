import React, { useState } from "react";

const TestimonialModal = ({ isOpen, onClose, onSubmit }) => {
  const [testimonial, setTestimonial] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(testimonial);
    setTestimonial("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Testimoni</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full border rounded p-2"
            rows="4"
            placeholder="Tulis testimoni Anda di sini..."
            value={testimonial}
            onChange={(e) => setTestimonial(e.target.value)}
            required
          />
          <div className="flex justify-end mt-4 gap-2">
            <button
              type="submit"
              className="bg-primary-200 text-white px-4 py-2 rounded-md"
            >
              Kirim
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestimonialModal;
