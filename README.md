
# Projeto LandPage Petshop Amor a Vida
Este projeto visa colocar em prática conhecimentos adquiridos em sala de aula na area de desenvolvimento Web focando nas tecnologias HTML5, CSS3, Javascript e a utilização de alguns Frameworks e Bibliotecas.

### Autor:
[@Geovane_Santos](https://github.com/GuittarJr) :raising_hand:
### Tecnologias utilizadas: 
  <div style= "display: inline_block">
    <img align = "center" alt = "html5" src = "https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white">
    <img align = "center" alt = "bootstrap" src = "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">
    <img align = "center" alt = "jquery" src = "https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
    <img align = "center" alt = "bootstrap" src = "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    <img align = "center" alt = "Javascript" src = "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  </div>
  
## O Projeto: 

O projeto PetShop Amor a vida, conta com uma landpage de uma empresa ficticia que conta com 3 sessões na página principal + uma página para desenvolvimento de formulário.

### Pagina principal:
![image](https://github.com/user-attachments/assets/65415bfc-2fe0-4a01-a68e-fc19cb0fe870)

### Formulario:
![image](https://github.com/user-attachments/assets/6e89941f-abf4-44d4-bd51-ce7bb6de92c1)

## Construção:
A construção da pagina é uma mescla entre desenvolvimento e estático e dinâmico onde podemos até contar com uma simulação de inserção de elementos html através de um array de objeto: <br>
No projeto é possível ver um wrapper vazio que está renderizando alguns cards.
<div align= "center">

Código HTML: <br>
![image](https://github.com/user-attachments/assets/8cf81245-3e3d-4628-8131-0beece3cecb0)

Preview:
![image](https://github.com/user-attachments/assets/0571aabe-2ae2-49eb-8f7d-94bb328ce190)

</div>
Isto está sendo possível pela manipulação do dom com o Jquery, a solução projetada para a simulação da inserção dos elementos está sendo através da manipulação do DOM com a biblioteca do JQuery.

Passos executados: 
  1. Leitura dos dados através de uma base de dados(neste caso está sendo feita a simulação através de um array de objetos);
  2. Criação e Inserção dos dados com a manipulação do dom

Objeto com planos:

```javascript
const planos = [
    {
        cardTitle: "Plano Au Au",
        imgUrl: "./utils/img/1.png",
        cardPlan: ["Banho", "Tosa", "50% Desconto em compras"],
        cardPrice: 89.00
    },
    {
        cardTitle: "Plano Miau Miau",
        imgUrl: "./utils/img/2.png",
        cardPlan: ["Consulta Veterinária", "Vacinação Anual", "10% Desconto em rações"],
        cardPrice: 129.50
    },
    {
        cardTitle: "Plano Muu",
        imgUrl: "./utils/img/3.png",
        cardPlan: ["Exames Laboratoriais", "Assistência 24h", "Entrega de ração em domicílio"],
        cardPrice: 199.99
    }
];
```
Inserindo dados na DOM via Jquery:

```javascript
 planos.forEach(plano =>{
        const card = $("<div>").addClass("cards");

        const cardTitle = $("<div>").addClass("cardTitle");
        $("<span>").text(plano.cardTitle).appendTo(cardTitle);

        const cardImage = $("<div>").addClass("cardImage");
        $("<img>").attr("src", plano.imgUrl).attr("alt", "cardImage").appendTo(cardImage);

        const cardPlan = $("<div>").addClass("cardPlan");
        const ul = $("<ul>");
        plano.cardPlan.forEach(item => {
            $("<li>").text(item).appendTo(ul);
        });
        ul.appendTo(cardPlan);

        const cardFooter = $("<div>").addClass("cardFooter");
        $("<a>").attr("href", "./form.html").text(`R$ ${plano.cardPrice.toFixed(2).replace('.', ',')}`).appendTo(cardFooter);

        card.append(cardTitle, cardImage, cardPlan, cardFooter);
        cardWrapper.append(card);
    });
```
## Responsividade
O projeto conta com um layout responsivo fazendo com que assim seja possível atender grandes partes de telas:
<div align = "center">

  ![image](https://github.com/user-attachments/assets/60a97728-9468-495d-a156-b2c68ac51304)
  
</div>
Isso é possivel através do @media com o css:
<div align = "center">

  ![image](https://github.com/user-attachments/assets/bf2b684c-1e50-4ba7-b25f-905cd9e26555)
  
</div>

Sobre o botão hamburguer foi inserido uma classe open assim que inserida através do botão hamburguer que faz um toggle na tag menu adicionando e retirando a classe ela apresenta o comportamento diferente
<div align = "center">
<div>
  Classe Open:
</div>
  
![image](https://github.com/user-attachments/assets/2924c39c-80e6-4eee-8764-3ddc847bf284)

<div>  
  Classe Open funcionando:
</div>

![image](https://github.com/user-attachments/assets/d977b808-aa05-403a-b45d-6db62dc00a8c)

</div>

Lógica toggle:

```javascript
mobileBtn.on('click', function() {
        mainNav.toggleClass('open');
    });
```
## Formulário
O formulario é simples e conta com a utilização do framework bootstrap:

![image](https://github.com/user-attachments/assets/6ccf1c6e-a46b-4ed1-8587-7f55762c646c)

Foi inserida uma mensagem de sucesso com display none.
```html
<div id="mensagem-sucesso" class="alert alert-success mt-3 d-none" role="alert">
    Plano solicitado com sucesso!
</div>
```

Assim que o formulário é preenchido e enviado intercedo o evento e assim emito uma mensagem de sucesso de 3 segundos.
```javascript
$('form').on('submit', function (event) {
        event.preventDefault();
        const $mensagemSucesso = $('#mensagem-sucesso');

        setTimeout(function() {
            $mensagemSucesso.removeClass('d-none');
            setTimeout(function() {
                $mensagemSucesso.addClass('d-none');
            }, 3000);
        }, 1500);
    });    
```
### Fim
Agradeço pelo acompanhamento do projeto.
