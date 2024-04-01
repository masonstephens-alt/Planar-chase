// ImageComponent.tsx
import React from 'react';
import './ImageComponent.css';

interface ImageComponentProps {
  url: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ url }) => {
  return (
    <div className="container">
      <img src={url} alt="Image" className="image" />
      <div className="buttons">
        {/* Buttons go here */}
      </div>
    </div>
  );
};

export default ImageComponent;
