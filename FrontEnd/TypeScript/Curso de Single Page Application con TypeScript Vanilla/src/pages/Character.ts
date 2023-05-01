import { getHash, getCharacterById } from "../utils";

const Character = async () => {
    const id = parseInt(getHash());
    const character = await getCharacterById(id);

    const view = `
        <div class="Character-inner">
            <article class="Character-card">
                <img src="${character?.image}" alt="${character?.name}">
                <h2>${character?.name}</h2>
            </article>

            <article class="Character-card">
                <h3> Episodios:
                    <span>${character?.episode.length}</span>
                </h3>
                <h3> Status: 
                    <span>${character?.status}</span> 
                </h3>

                <h3> Species:
                    <span>${character?.species}</span> 
                </h3>

                <h3> Gender:
                    <span>${character?.gender}</span> 
                </h3>

                <h3> Origin:
                    <span>${character?.origin.name}</span> 
                </h3>

                <h3> Last Location:
                    <span>${character?.location.name}</span> 
                </h3>
            </article>
        </div>
    `;

    return view;
};

export { Character };
