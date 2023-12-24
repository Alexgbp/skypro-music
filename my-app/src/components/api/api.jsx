export function getAllTracks() {
  const fetchTracks = fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/',
    {
      method: 'GET',
    }
  );
  const response = fetchTracks.json();
  return response;
}
