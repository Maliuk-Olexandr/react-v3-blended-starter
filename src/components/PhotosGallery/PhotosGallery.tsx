import Grid from "../Grid/Grid";
import type { Photo } from "../../types/photo";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

interface PhotosGalleryProps {
  photos: Photo[];
  onClick?: (photo: Photo) => void;
}

export default function PhotosGallery({ photos, onClick }: PhotosGalleryProps) {
  return (
    <Grid>
      {photos.map(photo => (
        <PhotosGalleryItem key={photo.id} photo={photo} onSelect={onClick} />
      ))}
    </Grid>
  );
}

