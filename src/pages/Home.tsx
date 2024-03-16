import React, { useState } from 'react';
import ImageComponent from '../components/ImageComponent';
import { IonButton } from '@ionic/react';
import imageUrls from '../imageData'; // Import imageUrls from imageData.ts

const HomePage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [favoriteImages, setFavoriteImages] = useState<number[]>([]);
  const [lastDisplayedImage, setLastDisplayedImage] = useState<number | null>(null);
  // Use imageUrls instead of a static array
  // const images = [/* Array of image URLs */];

  const changeImage = () => {
    const newIndex = Math.floor(Math.random() * imageUrls.length);
    setLastDisplayedImage(currentImage);
    setCurrentImage(newIndex);
  };

  const addToFavorites = () => {
    setFavoriteImages([...favoriteImages, currentImage]);
  };

  const goToLastDisplayedImage = () => {
    if (lastDisplayedImage !== null) {
      setCurrentImage(lastDisplayedImage);
    }
  };

  return (
    <div>
      <ImageComponent url={imageUrls[currentImage]} />
      <IonButton onClick={changeImage}>Change Image</IonButton>
      <IonButton onClick={addToFavorites}>Add to Favorites</IonButton>
      <IonButton onClick={goToLastDisplayedImage}>Go to Last Displayed Image</IonButton>
    </div>
  );
};

export default HomePage;
