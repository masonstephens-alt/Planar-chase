import React, { useState, useEffect } from 'react';
import ImageComponent from '../components/ImageComponent';
import { IonButton, IonMenuButton, IonIcon } from '@ionic/react';
import './Home.css'; // Import custom CSS file for Home component
import { menuOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [favoriteImageIndices, setFavoriteImageIndices] = useState<number[]>([]);
  const [lastDisplayedImageIndex, setLastDisplayedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://api.scryfall.com/cards/search?as=grid&order=name&q=type%3Aplane+(game%3Apaper)');
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        // Extract image URLs from the response
        const urls = data.data.map((card: any) => card.image_uris.normal);
        setImageUrls(urls);
        // Select a random image index
        const randomIndex = Math.floor(Math.random() * urls.length);
        setCurrentImageIndex(randomIndex);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const changeImage = () => {
    const newIndex = Math.floor(Math.random() * imageUrls.length);
    setLastDisplayedImageIndex(currentImageIndex);
    setCurrentImageIndex(newIndex);
  };

  const goToLastDisplayedImage = () => {
    if (lastDisplayedImageIndex !== null) {
      setCurrentImageIndex(lastDisplayedImageIndex);
    }
  };

  return (
    <div className="home-container">
{/*       <IonMenuButton autoHide={false} className="menu-button" slot="start">
        <IonIcon icon={menuOutline} />
      </IonMenuButton> */}

      <ImageComponent url={imageUrls[currentImageIndex]} />
      <div className="button-container">
        <IonButton onClick={changeImage}>Planeswalk</IonButton>
        <IonButton onClick={goToLastDisplayedImage}>Previous Plane</IonButton>
      </div>
    </div>
  );
};

export default Home;
