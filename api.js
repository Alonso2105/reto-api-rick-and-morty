// api.js
export async function fetchLocation(locationId) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/location/${locationId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchCharacter(resident) {
  try {
    const response = await fetch(resident);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
