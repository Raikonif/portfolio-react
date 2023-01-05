import axios from "axios"

export const getPokemon = async (name: string) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return data
}