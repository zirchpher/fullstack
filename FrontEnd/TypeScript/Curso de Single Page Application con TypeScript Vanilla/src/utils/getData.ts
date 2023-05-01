import axios from "axios";
import { Character } from "../model/character.model";

enum API {
    "URL" = "https://rickandmortyapi.com/api/character",
}

const getCharacters = async () => {
    try {
        const response = await axios.get(API.URL);
        const characters: Character[] = response.data.results;
        return characters;
    } catch (error) {
        console.log("Fetch Error", error);
    }
};

const getCharacterById = async (id: number) => {
    try {
        const { data } = await axios.get<Character>(`${API.URL}/${id}`);
        return data;
    } catch (error) {
        console.log("Fetch Error", error);
    }
};

export { getCharacters, getCharacterById };
