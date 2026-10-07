const dogImage = document.querySelector("#dogImage");
const btnDog = document.querySelector("#btnDog");

async function buscarHusky() {
    try {
        const resposta = await fetch(
            "https://dog.ceo/api/breed/husky/images/random"
        );

        const dados = await resposta.json();

        dogImage.src = dados.message;
    } catch (erro) {
        console.error("Erro ao buscar o Husky:", erro);
    }
}

buscarHusky();

btnDog.addEventListener("click", buscarHusky);
