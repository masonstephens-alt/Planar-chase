import React from 'react';
import ImageComponent from './ImageComponent';

interface FavoritesPageProps {
  favoriteImages: number[];
  images: string[];
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ favoriteImages, images }) => {
  return (
    <div>
      {favoriteImages.map((index) => (
        <ImageComponent key={index} url={images[index]} />
      ))}
    </div>
  );
};

export default FavoritesPage;
