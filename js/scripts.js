const characterList = document.getElementById('charactersList');
const searchCharactersByName = document.getElementById('searchCharactersByName');

const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');

const infoPage = document.getElementById('infoPage');

let currentPage = 1
let totalPages = 0;
let isLoading = false;

async function loadCharacters(name = '', page) {


    try {
        isLoading = true;

        const params = {
            name,
            page
        }

        const response = await api.get('/character', { params })
        console.log(response.data)
        totalPages = response.data.info.pages

        prevPage.disabled = true;
        nextPage.disabled = true;



        characterList.innerHTML = ``

        response.data.results.forEach(character => {
            const characterDivBoot = document.createElement('div');
            characterDivBoot.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'card-group');

            const characterCard = document.createElement('div');
            characterCard.classList.add('card', 'bg-dark', 'ml-3', 'mr-3', 'border-success', 'mb-4', 'card-style');


            characterCard.innerHTML = `
                <img src="${character.image}" class = "card-img-top"/>
                
                <div class="p-2 card-body">
                  

                    <h5 class="card-title text-light p-0 m-0 font-weight-bold mb-0"> ${character.name}</h5>
                
                                    
                   <div class="card-status mb-2">
                                  <div class='${character.status == "Dead"
                    ? "dead"
                    : character.status == "Alive"
                        ? "alive"
                        : "unknown"}'>
                        </div>
                    <p class="card-text text-light fw-semibold">
                            
                    ${character.status == "Dead"
                    ? "Morto"
                    : character.status == "Alive"
                        ? "Vivo"
                        : "Desconhecido"}&nbsp - &nbsp
                        ${character.species == "Human" ? "Humano" : character.species}</p>
                    </div>
                    
                    <small class="text-white-50 font-weight-bold"
                          >Última localização conhecida</small>
                    <p class="fs-1 mb-0 pb-0 fs-6 text-light mb-2">${character.location.name}</p>
                            <small class="text-white-50 font-weight-bold"
                            >Visto a última vez em:</small
                         >
                         <p class="card-text text-light font-weight-bold">
                             Nome do capítulo
                         </p>

                </div>
                   
                   
            `;

            characterDivBoot.appendChild(characterCard)
            characterList.appendChild(characterDivBoot)



            infoPage.innerHTML = `<p> Página: ${currentPage}/${totalPages} </p>`

            prevPage.disabled = !response.data.info.prev
            nextPage.disabled = !response.data.info.next

        })



    } catch (e) {
        console.log(`Erro ao buscar personagens ${e}`);
    } finally {
        isLoading = false;
    }
}

loadCharacters()

searchCharactersByName.addEventListener('input', () => {
    currentPage = 1
    loadCharacters(searchCharactersByName.value, currentPage)

    prevPage.disabled = !response.data.info.prev
    nextPage.disabled = !response.data.info.next


});

prevPage.addEventListener('click', () => {

    if (currentPage > 1 && !isLoading) {
        currentPage--
        loadCharacters(searchCharactersByName.value, currentPage)
    }
});

nextPage.addEventListener('click', () => {
    if (currentPage < totalPages && !isLoading) {
        currentPage++
        loadCharacters(searchCharactersByName.value, currentPage)


    }
});





/*        
    const characterCard = document.createElement('div');
            characterCard.classList.add('characters-card');


            characterCard.innerHTML = `
            <img src="${character.image}" class = "characters-image"/>
                    <h2> ${character.name}</h2>
                    <div class="cardStatus">
                        <div class='${character.status == 'Dead'
                    ? 'dead' : character.status == 'Alive' ? 'alive'
                        : 'unknown'}'>
                         </div> 
                         ${character.status == 'Dead'
                    ? 'Morto' : character.status == 'Alive' ? 'Vivo'
                        : 'Desconhecido'}&nbsp - &nbsp${character.species ==
                            'Human' ? "Humano" : character.species}
                   </div>
                   <p>Última localização conhecida:</p>
                   <h4>${character.location.name}</h4> 
            `

            characterList.appendChild(characterCard)


*/