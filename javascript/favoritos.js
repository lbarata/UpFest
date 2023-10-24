let atualFavoritosGuardados = localStorage.getItem('favoritos')
let favoritos = [];

if (atualFavoritosGuardados !== null){
    favoritos = JSON.parse(atualFavoritosGuardados);

} else {
    let favoritos = [];
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    console.log(favoritos);
}


function adicionarFavoritos(id) {
    if (!favoritos.includes(id)) {
        favoritos.push(id);
        atualizarFavoritos(favoritos);

        console.log(favoritos)
    }
}


function removerFavoritos(id) {
    let index = favoritos.indexOf(id);
    if (index !== -1 ) {
        favoritos.splice(index,1);
        atualizarFavoritos(favoritos);
    }
}


function atualizarFavoritos() {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    atualizarImagemFavoritos();
}




function atualizarImagemFavoritos() {
    let favoritosBotoes = document.querySelectorAll('.favorito, .favoritoThumb');
    
    favoritosBotoes.forEach((button)=> {
        let id = button.dataset.id;
        
        if (favoritos.includes(id)) {
            button.innerHTML = '<img src="../assets/icons/heart_full.svg" alt="heart-full">';
        } else {
            button.innerHTML = '<img src="../assets/icons/heart_open.svg" alt="heart_open">';
        }
    });
}


function adicionarRemover(id) {

    if (favoritos.includes(id)) {
        removerFavoritos(id);

        //Remover do container
        atualizarFavoritosContainer();
        atualizarFavoritosContainerTodos();

    } else {
        adicionarFavoritos(id);

        // Adicionar ao container
        atualizarFavoritosContainer();
        atualizarFavoritosContainerTodos();
    }
}


function checkFavoritos() {

    let divs = document.querySelectorAll('.barraArtista, .barraFestival, .thumbSugestao, .thumbArtista');

    divs.forEach((div) => {
        let id = div.id;

        if (favoritos.includes(id)) {
            atualizarImagemFavoritos()
        } else {
            atualizarImagemFavoritos()
        }
    });
}

checkFavoritos();



function atualizarFavoritosContainer() {

    if (Array.isArray(favoritos) && favoritos.length >= 0) {

        let container = document.getElementById('favoritosContainer');

        if (container) {

            // Selecionar as divs deste container, ou seja, selecionar todos os items que podem ser favoritos
            let divs = container.querySelectorAll('.barraArtista, .barraFestival, .thumbEvento');

            // Criar um array com todos os items que estao configurados como favoritos
            let favoritosExibidos = [];

            for (let i = divs.length -1; i >= 0 ; i--) {
                let div = divs[i];
                let id = div.id;

                if (favoritos.includes(id) && favoritosExibidos.length < 3) {
                    div.style.display = 'flex';
                    favoritosExibidos.push(div);
                } else {
                    div.style.display = 'none';
                }
            }
        }
    }
}

atualizarFavoritosContainer();

function atualizarFavoritosContainerTodos() {

    if (Array.isArray(favoritos) && favoritos.length >= 0) {

        let container = document.getElementById('favoritosContainerTodos');

        if (container) {

            // Selecionar as divs deste container, ou seja, selecionar todos os items que podem ser favoritos
            let divs = container.querySelectorAll('.barraArtista, .barraFestival, .thumbEvento');

            divs.forEach((div) => {

                const id = div.id;

                if (favoritos.includes(id)) {
                    div.style.display = 'flex';
                } else {
                    div.style.display = 'none';
                }
            });
        }
    }
}

atualizarFavoritosContainerTodos();



