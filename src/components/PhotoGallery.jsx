import { useState } from "react";
import photoData from "../data/photos.json";
import "../styles/gallery.css";

function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = ["All", ...new Set(photoData.map((p) => p.category))];

  const filteredPhotos =
    activeCategory === "All"
      ? photoData
      : photoData.filter((photo) => photo.category === activeCategory);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? filteredPhotos.length - 1 : prev - 1
    );
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  return (
    <>
      <div className="gallery-container gradient-container">
        <h1 className="gallery-title">My Photo Gallery</h1>

        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-button ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => handleImageClick(index)}
            >
              <img src={photo.src} alt={`Photo ${index}`} />
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
          <div className="lightbox" onClick={closeLightbox}>
            <button
              className="lightbox-arrow left"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              ‹
            </button>
            <img
              src={filteredPhotos[selectedIndex].src}
              alt="Full view"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="lightbox-arrow right"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default PhotoGallery;
