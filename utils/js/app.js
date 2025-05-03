$(document).ready(function() {
    const mobileBtn = $('.mobile-btn');
    const mainNav = $('.main-nav');
    const cardWrapper = $(".cardWrapper")
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
    
    //Toggle Classe Open
    mobileBtn.on('click', function() {
        mainNav.toggleClass('open');
    });

    planos.forEach(plano =>{
        const card = $("<div>").addClass("card");

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
        $("<a>").attr("href", "#").text(`R$ ${plano.cardPrice.toFixed(2).replace('.', ',')}`).appendTo(cardFooter);

        card.append(cardTitle, cardImage, cardPlan, cardFooter);
        cardWrapper.append(card);
    })

});