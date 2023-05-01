'use strict';
function makeDiscount(price, discount) {
    const priceWithoutDiscount = (price * discount) / 100;
    const priceWithDiscount = price - priceWithoutDiscount;
    return priceWithDiscount
}

function calcDiscount() {
    const inputPrice = parseFloat(price.value);
    const inputDiscount = parseFloat(discount.value);
    let priceWithDiscount = inputPrice;

    priceWithDiscount = makeDiscount(inputPrice, inputDiscount);
    console.log(searchCoupon);
    if (searchCoupon !== undefined) {
        priceWithDiscount = makeDiscount(priceWithDiscount, searchCoupon.discount)

        const paragraph = document.createElement("span");
        paragraph.innerHTML = `- Aplicando descuento extra ${searchCoupon.discount}% por cupón`;
        document.body.appendChild(paragraph);
    }
    textResult.innerHTML = `El nuevo precio con descuento es: $${priceWithDiscount} `;
}


const price = document.querySelector('#price');
const discount = document.querySelector('#discount');
const discountCoupon = document.querySelector('#discountCoupon');
const btnCalcDiscount = document.querySelector('#calcDiscount');
const textResult = document.querySelector('#result');

btnCalcDiscount.addEventListener('click', calcDiscount);


const coupons = [
    { name: "ACERPLUSCOUPON", discount: 15 },
    { name: "PLATZISUMMER", discount: 20 },
    { name: "MANDARINAS", discount: 50 },
]

coupons.push({
    name: "REMIX", discount: 5
})

const searchCoupon = coupons.find(function (coupon) {
    return coupon.name == discountCoupon.value;
});