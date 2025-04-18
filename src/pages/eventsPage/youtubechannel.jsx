import React from 'react';

const YoutubeChannel = () => {
  return (
    <div className="max-w-4xl mx-auto text-center py-10">
      <h2 className="text-2xl font-bold text-[#F2C14E] mb-4">Discover Integrity Trust</h2>
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/6Y6hxQ68IMU"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <a
        href="https://www.youtube.com/@Integritytrust"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-2 bg-[#2D6A4F] text-white rounded-full hover:bg-red-700 transition"
      >
        Learn more about our mission, our impact, and how you can be part of the change.
      </a>
    </div>
  );
};

export default YoutubeChannel;
