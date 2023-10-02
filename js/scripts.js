const characterList = document.getElementById('charactersList');
const searchCharactersByName = document.getElementById('searchCharactersByName');

const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');

async function loadCharacters() {
    try {
        const response = await api.get('/character')
        console.log(response.data)

        response.data.results.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('characters-card');

            const characterImage = document.createElement('img');
            characterImage.classList.add('characters-image');
            characterImage.src = character.image

            const characterName = document.createElement('h2');
            characterName.textContent = character.name;


            characterCard.appendChild(characterImage)
            characterCard.appendChild(characterName)


            characterList.appendChild(characterCard)

            // parei em 1:10
        })

    } catch (e) {
        console.log(`Erro ao buscar personagens ${e}`);
    }
}

loadCharacters()