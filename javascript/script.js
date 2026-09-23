// Procura o elemento que possui o id "item"
let item = document.getElementById("item")
// Procura o elemento que possui o id "lista"
let lista = document.getElementById("lista")
// Procura o elemento que possui o id "busca"
let busca = document.getElementById("busca")
// Procura o elemento que possui o id "btnAdicionar"
let adicionar = document.getElementById("btnAdicionar")

//Cria uma matriz vazia para guardar os itens// é a casinha
let itens = [];
//Quando clicar no botão adicionar, executa a função adicionar()
adicionar.addEventListener("click", btnAdicionar)
//Quando o usuario digitar no campo de busca,
//Executa a função buscar()
//keyup quando apertar uma tecla na pesquisa ja pesquisara automatcamente//
busca.addEventListener("keyup", buscar);

function btnAdicionar(){
    //Adicionar o valor digitado no array // pega a galinha e leva pra casa
    itens.push(item.value);
    //Cria uma nova tag <li> // Cria etiqueta vazia
    let li = document.createElement("li")
    //Cria um texto com o valor digitado // Pega o nome "Galinha" do usuario
    let texto = document.createTextNode(item.value);
    //Coloca o texto dentro da tag <li> // Coloca o nome "Galinha" na etiqueta
    li.appendChild(texto);
    //Coloca o <li> dentro da lista <ul> // Leva a galinha até o curral com a etiqueta
    lista.appendChild(li);
}

function buscar()
{
    //Pega o valor digitado e converte para maísculas //A Denise falou "boi"
    let nome = busca.value.toLowerCase();
    //Busca todas as tags <li> da página // vai até o curral
    let itensLista = document.getElementsByTagName("li")
    for(let i = 0; i < itensLista.length; i++){
        //pega o texto do item atual e converte para maiusculas// nesse caso, no curral, etiquetas ficarão maiusculas no momento em que o Elvis percorrer cada animal
        let texto = itensLista[i].textContent.toLowerCase();
        if(texto.includes(nome)){
            itensLista[i].style.display = "block";
        }
        else{
            itensLista[i].style.display = "none"
        }
    }

}
