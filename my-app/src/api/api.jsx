export  async function getAllTracks() {
  const fetchTracks =  await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/', {
      method: "GET"
    });
    if(!fetchTracks.ok){
      throw new Error("Не удалось загрузить плейлист, попробуйте позже")
    }
  const response =  await fetchTracks.json();
  return response;
}

export async function registartionUser() {

  const regUser =  await fetch('https://skypro-music-api.skyeng.tech/user/signup/', {
    method: 'POST',
    body: JSON.stringify({
      email: 'gleb@fokin.ru',
      password: 'Aa12345!!',
      username: 'gleb@fokin.ru',
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
  const response = await regUser.json();
  return response
}