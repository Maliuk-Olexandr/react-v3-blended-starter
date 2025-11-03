import axios from 'axios';
import type { Photo } from '../types/photo';

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

const instance = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: {
    Authorization: API_KEY,
  },
  params: {
    orientation: 'landscape',
  },
});

interface PhotosResponse {
  photos: Photo[];
}

export default async function getPhotos(query: string): Promise<Photo[]> {

  if (!API_KEY) {
    console.warn('⚠️  Pexels API key is missing');
    return [];
  }
  try {
  const response = await instance.get<PhotosResponse>('search', {
    params: {
      query,
    },
  });
  return response.data.photos;
} catch (error) {
  console.error('Error fetching photos:', error);
  return [];
}
}