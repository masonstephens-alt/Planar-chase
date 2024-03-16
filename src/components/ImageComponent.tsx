import React from 'react';

interface ImageComponentProps {
  url: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ url }) => {
  return (
    <div>
      <img src={url} alt="Random Image" />
    </div>
  );
};

export default ImageComponent;
