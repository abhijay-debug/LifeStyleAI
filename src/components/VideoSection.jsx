import React from "react";

export default function VideoSection() {
  return (
    <section className="bg-[#0d1b2a] py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">See LifestyleAI in Action</h2>
        <div className="aspect-w-16 h-[60vh] max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="LifestyleAI demo video"
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
