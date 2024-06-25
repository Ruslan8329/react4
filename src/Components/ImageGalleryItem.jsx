import React from "react";

const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li
      className="imageGalleryItem"
      onClick={() => onImageClick(image.largeImageURL)}
    >
      <img src={image.webformatURL} alt="" className="imageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
