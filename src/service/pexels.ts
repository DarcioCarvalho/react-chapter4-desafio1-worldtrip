export type PexelsPhoto = {
  src: {
    large: string
  }
}

interface PexelsPhotosSearchProps {
  query: string;
  size?: 'large' | 'medium' | 'small';
  page?: number;
  per_page?: number;
}

export async function getPexelsPhotosSearch(
  { query, page = 1, per_page = 15, size }: PexelsPhotosSearchProps): Promise<string[]> {

  const url = `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=${per_page}` + (size ? `&size=${size}` : "");

  const data = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
    }
  })
    .then(response => response.json());


  return data.photos.map((photo: PexelsPhoto) => photo.src.large);

}