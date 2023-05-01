import { getCharacters } from "../utils";

const Home = async () => {
    const characters = await getCharacters();
    console.log(characters);

    const view = `
        <div class="Characters">
            ${characters
                ?.map(
                    (character) => `
                <article class="Character-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}">
                        <h2 class="Characters-name">${character.name}</h2>
                    </a>
                </article>
            `
                )
                .join("")}
        </div>
    `;

    return view;
};

export { Home };
