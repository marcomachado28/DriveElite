const carros = [

    {
        nome: "Porsche 911 Carrera",
        preco: 850000,
        ano: "2023",
        imagem: "https://s2-autoesporte.glbimg.com/sPSb8q_iDEvkB62zjWZTkW2dcK8=/0x0:1914x1261/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/D/s/8D8AVITVibR7BiPOiXeQ/new-carrera.jpg"
    },

    {
        nome: "Audi RS6 Avant",
        preco: 1100000,
        ano: "2024",
        imagem: "https://images.unsplash.com/photo-1618056210931-39f730ebbf67?auto=format&fit=crop&w=800&q=80"
    },

    {
        nome: "BMW M3 Coupe",
        preco: 720000,
        ano: "2022",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCw5K3Zuh1A1NKuMy5W858JBNCaPr1ho2wUg92xkC1vL40TLYcYTjVJn1n&s=10"
    },

    {
        nome: "Fiat Mobi",
        preco: 75000,
        ano: "2024",
        imagem: "https://autobusiness.com.br/_next/image?url=https%3A%2F%2Fs3.carro57.com.br%2FFC%2F2495%2F6552028_6_W_542a99f3b0.jpeg&w=828&q=100"
    },

    {
        nome: "Honda Civic (Híbrido)",
        preco: 266000,
        ano: "2024",
        imagem: "https://image1.mobiauto.com.br/images/api/images/v1.0/206431623/transform/fl_progressive,f_webp,q_85,w_959"
    }

];



function carregarCarros(lista) {
    

    const grid = document.getElementById("car-grid");

    grid.innerHTML = "";


    lista.forEach(carro => {


        grid.innerHTML += `

        <div class="car-card">

            <img src="${carro.imagem}">


            <div class="car-info">

                <h3>${carro.nome}</h3>

                <p>Ano: ${carro.ano}</p>

                <div class="price">
                    R$ ${carro.preco.toLocaleString("pt-BR")}
                </div>

                <br>

<button class="btn" onclick="demonstrarInteresse('${carro.nome}')">
    Tenho Interesse
</button>
            </div>

        </div>

        `;

    });

}



// carrega ao abrir
window.onload = function(){

    carregarCarros(carros);

};



// filtro de preço

document
.getElementById("filtro-preco")
.addEventListener("change", function(){


    let tipo = this.value;


    let resultado = carros.filter(carro => {


        if(tipo == "popular"){

            return carro.preco <= 100000;

        }


        if(tipo == "medio"){

            return carro.preco > 100000 &&
                   carro.preco <= 300000;

        }


        if(tipo == "luxo"){

            return carro.preco > 300000;

        }


        return true;


    });



    carregarCarros(resultado);


});

function mostrarInfo(nomeCarro) {

    const carro = carros.find(c => c.nome === nomeCarro);


    alert(
        "Modelo: " + carro.nome +
        "\nAno: " + carro.ano +
        "\nPreço: R$ " + carro.preco.toLocaleString("pt-BR")
    );

}

function mostrarInfo(nomeCarro) {

    const carro = carros.find(
        c => c.nome === nomeCarro
    );


    alert(
        "Modelo: " + carro.nome +
        "\nAno: " + carro.ano +
        "\nPreço: R$ " +
        carro.preco.toLocaleString("pt-BR")
    );

}

function mostrarInfo(nomeCarro) {

    const carro = carros.find(
        c => c.nome === nomeCarro
    );


    const janelaInfo = document.createElement("div");

    janelaInfo.classList.add("modal");


    janelaInfo.innerHTML = `

        <div class="modal-conteudo">

            <span class="fechar" onclick="fecharInfo()">
                X
            </span>


            <img src="${carro.imagem}">


            <h2>${carro.nome}</h2>


            <p>
                <strong>Ano:</strong> ${carro.ano}
            </p>


            <p>
                <strong>Preço:</strong>
                R$ ${carro.preco.toLocaleString("pt-BR")}
            </p>


            <p>
                <strong>Descrição:</strong>
                ${carro.descricao}
            </p>


            <button class="btn">
                Entrar em contato
            </button>


        </div>

    `;


    document.body.appendChild(janelaInfo);

}


function fecharInfo(){

    document.querySelector(".modal").remove();

}

// Pesquisa pelo nome do carro

document
.getElementById("search-input")
.addEventListener("input", function () {

    const texto =
        this.value.toLowerCase();


    const carrosFiltrados = carros.filter(carro => {

        return carro.nome
        .toLowerCase()
        .includes(texto);

    });


    carregarCarros(carrosFiltrados);

});

// Adicione esta função
function demonstrarInteresse(nomeCarro) {
    const textarea = document.querySelector("#contact-form textarea");
    const secaoContato = document.getElementById("contato");

    textarea.value = `Tenho interesse no modelo ${nomeCarro}. Gostaria de mais informações.`;

    secaoContato.scrollIntoView({ behavior: "smooth" });

    textarea.focus();
}