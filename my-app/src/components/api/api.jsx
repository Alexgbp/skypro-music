export  async function getAllTracks() {
  const fetchTracks =  await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/', {
      method: "GET"
    });
    if(!fetchTracks.ok){
      throw new Error("Не удалось отобразить треки")
    }
  const response =  await fetchTracks.json();
  return response;
}
