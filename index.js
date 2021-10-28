const products = [
    {
        id: "1",
        name: "Biotic Balance - Espuma facial de limpieza",
        description: "Piel suave, limpia, y equilibrada en un solo paso",
        price: "$2800.-",
        height: "card-height-500",
        img: "../images/BioticBalanceEspuma.png",
        msj: "Biotic%20Balance%20Espuma",
    },
    {
        id: "2",
        name: "Biotic Balance Día",
        description: "Hidratante y fortalecedor",
        price: "$3800.-",
        height: "card-height-500",
        img: "../images/BioticBalanceDia.png",
        msj: "Biotic%20Balance%Dia",
    },
    {
        id: "3",
        name: "Biotic Balance Noche",
        description: "Renovador, aclarante y protector",
        price: "$3800.-",
        height: "card-height-500",
        img: "../images/BioticBalancenoche.png",
        msj: "Biotic%20Balance%20Noche",
    },
    {
        id: "4",
        name: "Suero de Ácido Hialurónico con Vit.C",
        description: "Restauración y descongetión, piel hidratada y vitalizada",
        price: "$2800.-",
        height: "card-height-500",
        img: "../images/SueroAcHialvitC.png",
        msj: "Suero%20de%20acido%20%hialuronico%20con%20VitC",
    },
    {
        id: "5",
        name: "Exfoliante Rosa Mosqueta",
        description: "Limpieza de células muertas",
        price: "$2500.-",
        height: "card-height-500",
        img: "../images/ExfolianteRosaMosqueta.png",
        msj: "Exfoliante%20rosa%20mosuqeta",
    },
    {
        id: "6",
        name: "Agua Micelar",
        description: "Agua micelar",
        price: "$2800.-",
        height: "card-height-500",
        img: "../images/aguaMicelar.png",
        msj: "Agua%20micelar",
    },    
    {
        id: "7",
        name: "Bruma Retinol",
        description: "Bruma Retinol",
        price: "$2800.-",
        height: "card-height-500",
        img: "../images/BrumaDeREtinol.jpg",
        msj: "Bruma%20Retinol",
    },
    {
        id: "8",
        name: "Global Perfection",
        description: "Global Perfection",
        price: "$5700.-",
        height: "card-height-500",
        img: "../images/GlobalPerfection.jpg",
        msj: "Global%20perfection",
    },
    {
        id: "9",
        name: "Ultra Richi Q10",
        description: "Ultra Richi Q10",
        price: "$5000.-",
        height: "card-height-500",
        img: "../images/ultraRichQ.jpg",
        msj: "Ultra%20Richi%20Q10",
    },
    {
        id: "10",
        name: "New Body",
        description: "Espuma corporal",
        price: "$4100.-",
        height: "card-height-500",
        img: "../images/NewBody.png",
        msj: "New%20Body",
    },
    {
        id: "11",
        name: "Crema Lumiere 48hs",
        description: "Crema Lumiere 48hs",
        price: "$5500.-",
        height: "card-height-500",
        img: "../images/Lumiere48.png",
        msj: "Crema%20Lumiere48hs%20",
    },
    {
        id: "12",
        name: "Contorno de ojos Lumiere",
        description: "Contorno de ojos Lumiere",
        price: "$3800.-",
        height: "card-height-500",
        img: "../images/LumiereContorno.png",
        msj: "Contorno%20de%20de%20ojos",
    },
    {
        id: "13",
        name: "Crema Solution Lift",
        description: "Crema Solution Lift",
        price: "$5500.-",
        height: "card-height-500",
        img: "../images/SolutionLifeCrema.png",
        msj: "Crema%20Solution%20Lift",
    },
    {
        id: "14",
        name: "Suero Solution Lift",
        description: "Suero Solution Lift",
        price: "$4700.-",
        height: "card-height-500",
        img: "../images/SolutionLifeSerum.png",
        msj: "Suero%20Solution%20Lift",
    },
    {
        id: "15",
        name: "Contorno de ojos Solution Lift",
        description: "Contorno de ojos Solution Lift",
        price: "$4000.-",
        height: "card-height-500",
        img: "../images/SolutionLifeContorno.png",
        msj: "Contorno%20de%20Ojos%20Solution%20Lift",
    },
    {
        id: "33",
        name: "My Cream",
        description: "Crema personalizada, con ampollas específicas",
        price: "$5700.-",
        height: "card-height-500",
        img: "../images/my-cream.png",
        msj: "My%20Cream",
    },
    {
        id: "16",
        name: "Máscara Aloe y melón",
        description: "Máscara Aloe y melón",
        price: "$2500.-",
        height: "card-height-500",
        img: "../images/mascara-melon.png",
        msj: "Mascara%20Aloe%20y%20melon",
    },
    {
        id: "21",
        name: "Crema de Noche Extrafirm",
        description: "Crema renovadora nocturna",
        price: "$4500.-",
        height: "card-height-500",
        img: "../images/extrafirm-renov.png",
        msj: "Crema%20de%20noche",
    },
    {
        id: "19",
        name: "Emulsión Corporal extrafirm",
        description: "Emulsión corporal extrafirm",
        price: "$3200.-",
        height: "card-height-200",
        img: "../images/none.png",
        msj: "Emulsion%20Corproal%20Extrafirm",
    },
    {
        id: "20",
        name: "Crema de día extrafirm",
        description: "Crema de día extrafirm",
        price: "$4500",
        height: "card-height-200",
        img: "../images/none.png",
        msj: "Crema%20de%20dia",
    },
    {
        id: "17",
        name: "Máscara de mango",
        description: "Máscara de mango",
        price: "$2500.-",
        height: "card-height-200",
        img: "../images/none.png",
        msj: "Mascara%20de%20mango",
    },
    {
        id: "34",
        name: "Máscara solution Lift",
        description: "Máscara solution Lift",
        price: "$2500.-",
        height: "card-height-200",
        img: "../images/none.png",
        msj: "Mascara%20Solution%20Lift",
    },
    {
        id: "18",
        name: "Agua termal",
        description: "Agua Termal",
        price: "$2800.-",
        height: "card-height-200",
        img: "../images/none.png",
        msj: "Agua%20termal",
    },
    {
        id: "22",
        name: "Contorno de ojos ExtraFirm",
        description: "Contorno de ojos Extrafirm",
        price: "$3800.-",
        height: "card-height-200",
        img: "../images/none.png",
        msj: "Contorno%20de%20ojos",
    },
    {
        id: "30",
        name: "Emulsión de limpieza Oil-free",
        description: "Emulsión de limpieza Oil-free",
        price: "$2800.-",
        height: "card-height-200",
        img: "../images/none.png",
        msj: "Espuma%20de%20limpieza-oil-free",
    },
    {
        id: "31",
        name: "Efumel TX",
        description: "Efumel TX",
        price: "$2000.-",
        height: "card-height-200",
        img: "../images/none.png",
        msj: "Efumel%20TX",
    },
    {
        id: "32",
        name: "Contorno de Ojos",
        description: " Molecular Spert",
        price: "$4500.-",
        height: "card-height-200",
        img: "../images/none.png",
        msj: "Contorno%20de%20ojos",
    },
    
]
const sets = [
    {
        id: "23",
        name: "Set Lumiere Visage",
        description: "Complejo Hidratante antiarrugas <br><br> - 1 Contorno de ojos Lumiere No más arrugas <br> - 1 Emulsión Lumiere Visage 48hs <br><br>",
        price: "$7000.-",
        height: "card-height-500",
        img: "../images/SetLumiere.png",
        msj: "Set%20Lumiere%20Visage",
    },
    {
        id: "24",
        name: "Set Solution Lift",
        description: "Proteger y estimular las células madre de la piel <br><br>- 1 Serum <br>- 1 Crema <br>- 1 Contorno de ojos",
        price: "$8700.-",
        height: "card-height-500",
        img: "../images/Set SolutionLife.png",
        msj: "Set%20solution%20lift",
    },
    {
        id: "25",
        name: "Set ExtraFirm",
        description: "- 1 Crema Tratamiento intensivo Noche <br> - 1 Crema Ultra Tensora Día <br> - 1 Suero tensor plus Contorno de ojos <br> - 1 Ampolla para combinar ",        
        price: "$8700.-",
        height: "card-height-500",
        img: "../images/SetExtrafirm.png",
        msj: "Set%20estrafirm",
    },
    {
        id: "26",
        name: "Set Biotic Balance - Nuevo!!",
        description: "- 1 Biotic Día <br> - 1 Biotic Noche <br> - 1 A elección (Opc: Esp. de limpieza/Agua micelar/Agua Termal/Bruma de Retinol) <br>",       
        price: "$7500.-",
        height: "card-height-500",
        img: "../images/SetBioticBalance.png",
        msj: "Set%20bioticbalance",
    },
    {
        id: "27",
        name: "Set Despigmentante Global - Nuevo!!",
        description: "- 1 Global Perfection <br> - 1 A elección (Opc: Esp. de limpieza/Agua micelar/Agua Termal/Bruma de Retinol) <br> - Combinar con medicación de profesional <br>",       
        price: "$8700.-",
        height: "card-height-500",
        img: "../images/GlobalPerfection.jpg",
        msj: "Set%20GlobalPerfection",
    },
    {
        id: "28",
        name: "Set Blue Light - Nuevo!!",
        description: "- 1 Ultra Richi Q10  <br> - 1 A elección (Opc: Esp. de limpieza/Agua micelar/Agua <br> Previene el fotoenvejecimiento <br>",       
        price: "$7500.-",
        height: "card-height-500",
        img: "../images/ultraRichQ.jpg",
        msj: "Set%20ultraRichQ",
    },
    {
        id: "29",
        name: "Set Corporal New Body- NUEVO!!",
        description: " - 1 New Body espuma <br>- 1 Exfoliante <br>- 1 Emulsión corporal <br>",       
        price: "$7000.-",
        height: "card-height-500",
        img: "../images/NewBody.png",
        msj: "Set%20NewBody",
    },
]
const productsContainer = document.querySelector(".main-products-big-container")
const setsContainer = document.querySelector(".main-beautybox-big-container")

for ( product of products) {
    productsContainer.innerHTML += 
    `
    <article class="main-products-container-article ${product.height}">
                    <div class="products-circle">
                        <p class="send">Envío<br>gratis</p>
                    </div>
                    <img src="${product.img}" alt="${product.name}">
                    <div>
                        <p class="products-price">${product.price}</p>
                        <h4>${product.name}</h4>
                        <p>${product.description}</p>
                    </div>
                    <a class="products-button"
                        href="https://api.whatsapp.com/send?phone=5491131709144&text=%C2%A1Hola!%20%C2%A1Me%20gustar%C3%ADa%20encargar%20un${product.msj}">Encargar
                        <i class="icon-whatsapp meddia-button"></i></a>
                </article>
    `
}
for ( set of sets) {
    setsContainer.innerHTML += 
    `
    <article class="main-beautybox-container-article ${set.height}">
                    <div class="beautybox-circle">
                        <p class="send">Envío<br>gratis</p>
                    </div>
                    <img src="${set.img}" alt="${set.name}">
                    <div>
                        <p class="products-price">${set.price}</p>
                        <h4>${set.name}</h4>
                        <p>${set.description}</p>
                    </div>
                    <a class="products-button"
                        href="https://api.whatsapp.com/send?phone=5491131709144&text=%C2%A1Hola!%20%C2%A1Me%20gustar%C3%ADa%20encargar%20un${set.msj}">Encargar
                        <i class="icon-whatsapp meddia-button"></i></a>
                </article>
    `
}

// burger-button
var navbar = document.querySelector('.navbar')
var ham = document.querySelector('.ham')
var menuLink = document.querySelectorAll(".main-menu-container-button")

ham.addEventListener("click", toggleHamburger)
function toggleHamburger() {
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")
}
menuLink.forEach(
    function (menuLink) {
        menuLink.addEventListener("click", toggleHamburger)
    }
)