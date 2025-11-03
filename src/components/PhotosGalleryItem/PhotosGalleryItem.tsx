import GridItem from "../GridItem/GridItem";
import styles from "./PhotosGalleryItem.module.css";
import type { Photo } from "../../types/photo";

interface PhotosGalleryItemProps {
  photo: Photo;
  onSelect?: (photo: Photo) => void;
}

export default function PhotosGalleryItem({ photo, onSelect }: PhotosGalleryItemProps) {
  return (
    <GridItem onClick={() => onSelect?.(photo)}>
      <div
        className={styles.thumb}
        style={{
          backgroundColor: photo.avg_color,
          borderColor: photo.avg_color,
        }}
      >
        <img src={photo.src.large} alt={photo.alt} loading="lazy"/>
      </div>
    </GridItem>
  );
}
