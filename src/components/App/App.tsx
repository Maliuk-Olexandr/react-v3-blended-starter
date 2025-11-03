import Section from '../Section/Section';
import Container from '../Container/Container';
import Form from '../Form/Form';

import { useState, useEffect } from 'react';
import getPhotos from '../../services/photos';
import type { Photo } from '../../types/photo';
import PhotosGallery from '../PhotosGallery/PhotosGallery';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import Text from '../Text/Text';

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const results = await getPhotos(query);
      setPhotos(results);
    } catch (error) {
      console.error('Error fetching photos:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch default photos on initial render
  useEffect(() => {
    handleSearch('any');
  }, []);

  return (
    <Section>
      <Container>{<Form onSearch={handleSearch} />}</Container>
      <Container>
        {isLoading && <Loader />}
        {isError && (
          <Text textAlign="center" marginBottom="20">
            Error fetching photos
          </Text>
        )}
        {!isLoading && !isError && photos.length > 0 && (
          <PhotosGallery photos={photos} onClick={setSelectedPhoto} />
        )}
        {!isLoading && !isError && photos.length === 0 && (
          <Text textAlign="center" marginBottom="20">
            No photos found
          </Text>
        )}
        {selectedPhoto && (
          <Modal onClose={() => setSelectedPhoto(null)}>
            <img src={selectedPhoto.src.large} alt={selectedPhoto.alt} />
          </Modal>
        )}
      </Container>
    </Section>
  );
}
