import React, { useState } from "react";
import vid from "../images/vid.mp4";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewType, setPreviewType] = useState(""); // "image" or "video"
  const [previewSrc, setPreviewSrc] = useState("");

  const openPreview = (type, src) => {
    setPreviewType(type);
    setPreviewSrc(src);
    setIsModalOpen(true);
  };

  const closePreview = () => {
    setIsModalOpen(false);
    setPreviewSrc("");
  };
  return (
    <div>
      {/* Banner */}
      <div className="relative bg-gray-500 text-white">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative p-8 text-center py-16">
          <h1 className="text-4xl font-bold">Our Portfolio</h1>
          <p className="mt-4 text-lg text-gray-200">
            Transform Your Vision with Expertise
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4 m-4">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-110"
              src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
              alt="gallery-photo"
              onClick={() =>
                openPreview(
                  "image",
                  "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                )
              }
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-110"
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="gallery-photo"
              onClick={() =>
                openPreview(
                  "image",
                  "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                )
              }
            />
          </div>
          <div>
            <video
              className="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-110 cursor-pointer"
              controls
              onClick={(e) => {
                e.preventDefault();
                openPreview(
                  "video",
                  "https://www.w3schools.com/html/mov_bbb.mp4"
                );
              }}
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-110"
              src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
              alt="gallery-photo"
              onClick={() =>
                openPreview(
                  "image",
                  "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                )
              }
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-110"
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="gallery-photo"
              onClick={() =>
                openPreview(
                  "image",
                  "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                )
              }
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-110"
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
              onClick={() =>
                openPreview(
                  "image",
                  "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                )
              }
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-110"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt="gallery-photo"
              onClick={() =>
                openPreview(
                  "image",
                  "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                )
              }
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-110"
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
              onClick={() =>
                openPreview(
                  "image",
                  "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                )
              }
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-110"
              src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
              alt="gallery-photo"
              onClick={() =>
                openPreview(
                  "image",
                  "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                )
              }
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-110"
              src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
              alt="gallery-photo"
              onClick={() =>
                openPreview(
                  "image",
                  "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                )
              }
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-110"
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="gallery-photo"
              onClick={() =>
                openPreview(
                  "image",
                  "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                )
              }
            />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            {/* Close Button */}
            <span
              className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer"
              onClick={closePreview}
            >
              &times;
            </span>
            {/* Conditional Rendering for Image or Video */}
            {previewType === "image" ? (
              <img
                src={previewSrc}
                alt="preview"
                className="max-w-full max-h-screen rounded-lg mt-4"
              />
            ) : (
              <video
                onClick={closePreview}
                src={previewSrc}
                controls
                autoPlay
                className="w-auto h-80 object-contain rounded-lg"
              ></video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
