import React from "react";

export default function Newsletter() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center max-w-xl">
        <h2 className="text-2xl font-bold text-[#0d1b2a] mb-4">
          Stay in the Loop
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Subscribe to our newsletter to get updates on new features and insights.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-[#6c5dd3]"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#6c5dd3] text-white rounded-md hover:bg-[#5947c5] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
