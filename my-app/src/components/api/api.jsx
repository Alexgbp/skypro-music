export  async function getAllTracks() {
  const fetchTracks =  await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/' );
  const response =  await fetchTracks.json();
  return response;
}
