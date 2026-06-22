const carros = [
    {
        nome: "Porsche 911 Carrera",
        preco: 850000,
        ano: "2023",
        km: "12.000 km",
        combustivel: "Gasolina",
        cambio: "Automático",
        cor: "Prata",
        potencia: "385 cv",
        descricao: "Esportivo alemão com motor boxer 6 cilindros. Dirigibilidade excepcional, interior refinado e desempenho que poucos carros conseguem igualar. Ideal para quem busca performance e sofisticação.",
        imagem: "https://s2-autoesporte.glbimg.com/sPSb8q_iDEvkB62zjWZTkW2dcK8=/0x0:1914x1261/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/D/s/8D8AVITVibR7BiPOiXeQ/new-carrera.jpg"
    },
    {
        nome: "Audi RS6 Avant",
        preco: 1100000,
        ano: "2024",
        km: "5.200 km",
        combustivel: "Gasolina",
        cambio: "Automático",
        cor: "Preto",
        potencia: "600 cv",
        descricao: "A perfeita combinação entre perua esportiva e supercar. Motor V8 biturbo com 600 cv, tração integral quattro e acabamento premium. Para quem não abre mão de espaço sem perder a adrenalina.",
        imagem: "https://images.unsplash.com/photo-1618056210931-39f730ebbf67?auto=format&fit=crop&w=800&q=80"
    },
    {
        nome: "BMW M3 Coupe",
        preco: 720000,
        ano: "2022",
        km: "28.500 km",
        combustivel: "Gasolina",
        cambio: "Manual",
        cor: "Azul",
        potencia: "510 cv",
        descricao: "Ícone do segmento esportivo. Motor inline-6 biturbo com 510 cv, chassi afinado para pistas e ruas. Uma das experiências de condução mais puras do mercado atual.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCw5K3Zuh1A1NKuMy5W858JBNCaPr1ho2wUg92xkC1vL40TLYcYTjVJn1n&s=10"
    },
    {
        nome: "Fiat Mobi",
        preco: 75000,
        ano: "2024",
        km: "3.100 km",
        combustivel: "Flex",
        cambio: "Manual",
        cor: "Branco",
        potencia: "75 cv",
        descricao: "Compacto urbano ideal para o dia a dia. Econômico, fácil de estacionar e com baixo custo de manutenção. Perfeito para quem busca praticidade na cidade com excelente custo-benefício.",
        imagem: "https://autobusiness.com.br/_next/image?url=https%3A%2F%2Fs3.carro57.com.br%2FFC%2F2495%2F6552028_6_W_542a99f3b0.jpeg&w=828&q=100"
    },
    {
        nome: "Honda Civic (Híbrido)",
        preco: 266000,
        ano: "2024",
        km: "9.800 km",
        combustivel: "Híbrido",
        cambio: "Automático",
        cor: "Cinza",
        potencia: "184 cv",
        descricao: "Sedã híbrido com tecnologia de ponta, design elegante e baixo consumo. Combina motor 2.0 a gasolina com motor elétrico, entregando eficiência e conforto num pacote moderno.",
        imagem: "https://image1.mobiauto.com.br/images/api/images/v1.0/206431623/transform/fl_progressive,f_webp,q_85,w_959"
    }
];
 
function carregarCarros(lista) {
    const grid = document.getElementById("car-grid");
    grid.innerHTML = "";
 
    if (lista.length === 0) {
        grid.innerHTML = `<p style="color:#bbb; text-align:center; grid-column:1/-1;">Nenhum veículo encontrado.</p>`;
        return;
    }
 
    lista.forEach(carro => {
        grid.innerHTML += `
        <div class="car-card">
            <img src="${carro.imagem}" alt="${carro.nome}">
            <div class="car-info">
                <h3>${carro.nome}</h3>
                <p>Ano: ${carro.ano} &nbsp;|&nbsp; Cor: ${carro.cor}</p>
                <div class="car-tags">
                    <span> ${carro.km}</span>
                    <span> ${carro.combustivel}</span>
                    <span> ${carro.cambio}</span>
                    <span> ${carro.potencia}</span>
                </div>
                <div class="price">R$ ${carro.preco.toLocaleString("pt-BR")}</div>
                <div class="botoes">
                    <button class="btn info-btn" onclick="mostrarInfo('${carro.nome}')">Ver Detalhes</button>
                    <button class="btn" onclick="demonstrarInteresse('${carro.nome}')">Tenho Interesse</button>
                </div>
            </div>
        </div>
        `;
    });
}
 
// Tema escuro/claro
const temaBtn = document.getElementById("tema-btn");
 
temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("claro");
    const tema = document.body.classList.contains("claro") ? "claro" : "escuro";
    localStorage.setItem("tema", tema);
    temaBtn.textContent = tema === "claro" ? "🌙" : "☀️";
});
 
window.onload = function () {
    if (localStorage.getItem("tema") === "claro") {
        document.body.classList.add("claro");
        temaBtn.textContent = "🌙";
    }
    carregarCarros(carros);
};
 
// Filtro de preço
document.getElementById("filtro-preco").addEventListener("change", function () {
    const tipo = this.value;
    const resultado = carros.filter(carro => {
        if (tipo === "popular") return carro.preco <= 100000;
        if (tipo === "medio") return carro.preco > 100000 && carro.preco <= 300000;
        if (tipo === "luxo") return carro.preco > 300000;
        return true;
    });
    carregarCarros(resultado);
});
 
// Pesquisa por nome
document.getElementById("search-input").addEventListener("input", function () {
    const texto = this.value.toLowerCase();
    const carrosFiltrados = carros.filter(carro =>
        carro.nome.toLowerCase().includes(texto)
    );
    carregarCarros(carrosFiltrados);
});
 
// Modal com detalhes completos
function mostrarInfo(nomeCarro) {
    const carro = carros.find(c => c.nome === nomeCarro);
 
    const janelaInfo = document.createElement("div");
    janelaInfo.classList.add("modal");
 
    janelaInfo.innerHTML = `
        <div class="modal-conteudo">
            <span class="fechar" onclick="fecharInfo()">✕</span>
            <img src="${carro.imagem}" alt="${carro.nome}">
            <h2>${carro.nome}</h2>
            <div class="price-modal">R$ ${carro.preco.toLocaleString("pt-BR")}</div>
            <div class="modal-tags">
                <span> ${carro.ano}</span>
                <span> ${carro.km}</span>
                <span> ${carro.combustivel}</span>
                <span> ${carro.cambio}</span>
                <span> ${carro.cor}</span>
                <span> ${carro.potencia}</span>
            </div>
            <p class="modal-descricao">${carro.descricao}</p>
            <button class="btn" onclick="fecharInfo(); demonstrarInteresse('${carro.nome}')">
                Tenho Interesse
            </button>
        </div>
    `;
 
    document.body.appendChild(janelaInfo);
}
 
function fecharInfo() {
    const modal = document.querySelector(".modal");
    if (modal) modal.remove();
}
 
// Redireciona para o formulário de contato
function demonstrarInteresse(nomeCarro) {
    const textarea = document.querySelector("#contact-form textarea");
    const secaoContato = document.getElementById("contato");
 
    textarea.value = `Tenho interesse no modelo ${nomeCarro}. Gostaria de mais informações.`;
    secaoContato.scrollIntoView({ behavior: "smooth" });
    textarea.focus();
}
 
