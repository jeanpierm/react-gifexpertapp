const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=IkhRRwVVTTHFLyaH08HWpJQ5D6KHSaHM`;
  const response = await fetch(url);
  const { data } = await response.json();
  return data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));
};

export default getGifs;
