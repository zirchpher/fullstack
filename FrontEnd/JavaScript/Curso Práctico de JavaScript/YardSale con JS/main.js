// Funciones
function toggleMenu() {
    desktopMenu.classList.toggle("inactive");
}

function toggleBurgerMenu() {
    productDetail.classList.add("inactive");
    productCharacteristics.classList.add("inactive");
    mobileBurgerMenu.classList.toggle("inactive");
}

function toggleShoppinCart() {
    mobileBurgerMenu.classList.add("inactive");
    productCharacteristics.classList.add("inactive");
    productDetail.classList.toggle("inactive");
}

function openProductCharacteristics() {
    mobileBurgerMenu.classList.add("inactive");
    productDetail.classList.toggle("inactive");
    productCharacteristics.classList.remove("inactive");
}

function closeProductCharacteristics() {
    mobileBurgerMenu.classList.add("inactive");
    productDetail.classList.add("inactive");
    productCharacteristics.classList.add("inactive");
}

function renderProduct(object) {
    for (const product of object) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productImage.addEventListener("click", openProductCharacteristics)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productDivContainer = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$/ ${product.price
            }`;

        const productName = document.createElement('p');
        productName.innerText = `$/ ${product.name
            }`;

        const productFigure = document.createElement('figure');

        const productFigureCart = document.createElement('img');
        productFigureCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        // Vamos a meter cada elemnto hijo a su contenedor padre

        // <productFigure>
        //     <productFigureCart />
        // </productFigure>
        productFigure.append(productFigureCart);

        // <productDivContainer>
        //     <productPrice />
        //     <productName />
        // </productDivContainer>
        productDivContainer.append(productPrice);
        productDivContainer.append(productName);

        // <productInfo >
        //     <productDivContainer />
        //     <productFigure />
        // </productInfo>
        productInfo.append(productDivContainer);
        productInfo.append(productFigure);

        // <productCard>
        //     <productImage />
        //     <productInfo />
        // </productCard>
        productCard.append(productImage);
        productCard.append(productInfo);

        // <div class="cards-container"> Base principal
        //     <div class="product-card"></div>
        // </div>
        cardsContainer.append(productCard);
    }
}
//


// Variables
const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector("#toggle-menu");

const burgerMenuIcon = document.querySelector("#burger-menu-icon");
const mobileBurgerMenu = document.querySelector("#mobile-menu");

const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container");

const productCharacteristics = document.querySelector("#productCharacteristics");
const productCharacteristicsIconsClose = document.querySelector(".product-characteristics-close");
//


// Eventos
// Agregamos un escuchador de eventos en click al email
navbarEmail.addEventListener("click", toggleMenu);

// Agregamos un escuchador de eventos en click al burgerMenuIcon
burgerMenuIcon.addEventListener("click", toggleBurgerMenu);

// Agregamos un escuchador de eventos en click al shoppingCartIcon
shoppingCartIcon.addEventListener("click", toggleShoppinCart);

// Agregamos un escuchador de eventos en click al productCharacteristicsIconsClose
productCharacteristicsIconsClose.addEventListener("click", closeProductCharacteristics);
//


// Objetos
const productList = []
productList.push({
    name: 'iPhone X', price: 2200, image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'MacBook Air', price: 4400, image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Cámara Canon', price: 1600, image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Audífonos Beats', price: 1100, image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Mando Xbox', price: 300, image: 'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Apple Watch', price: 2200, image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Samsung Galaxy S22', price: 3600, image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Micrófono', price: 600, image: 'https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Teclado Gamer', price: 876, image: 'https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'iMac', price: 3900, image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
//


renderProduct(productList);
