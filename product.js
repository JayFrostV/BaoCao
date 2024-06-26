//slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/prev
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("thumbnail");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




//order
let selectedSizePrice = 0;
let selectedToppingPrices = [];

function updatePrice() {
    let quantity = parseInt(document.getElementById('quantity').innerText);
    let totalPrice = (basePrice + selectedSizePrice + selectedToppingPrices.reduce((a, b) => a + b, 0))*quantity;
    document.querySelector('.box1-2-price').innerText = formatCurrency(totalPrice) + ' đ';
}


function formatCurrency(number) {
    return number.toLocaleString('vi-VN');
}

function selectSize(element) {
    document.querySelectorAll('.size-option').forEach(option => option.classList.remove('selected'));
    element.classList.add('selected');
    selectedSizePrice = parseInt(element.getAttribute('data-price'));
    updatePrice();
}

function toggleTopping(element) {
    const toppingPrice = parseInt(element.getAttribute('data-price'));
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
        selectedToppingPrices = selectedToppingPrices.filter(price => price !== toppingPrice);
    } else {
        element.classList.add('selected');
        selectedToppingPrices.push(toppingPrice);
    }
    updatePrice();
}

function increaseQuantity() {
    let quantityElement = document.getElementById('quantity');
    let quantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = quantity + 1;
    updatePrice();
}

function decreaseQuantity() {
    let quantityElement = document.getElementById('quantity');
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
        quantityElement.innerText = quantity - 1;
        updatePrice();
    }
}
function showOverlay() {
    if (!document.querySelector('.size-option.selected')) {
        alert('Vui lòng chọn size.');
        return;
    }
    
    const selectedSizeElement = document.querySelector('.size-option.selected');
    const selectedSizeText = selectedSizeElement.innerText;
    const selectedToppingsElements = Array.from(document.querySelectorAll('.topping-option.selected'));
    const selectedToppingsText = selectedToppingsElements.map(option => option.innerText);
    const quantity = parseInt(document.getElementById('quantity').innerText);
    const finalPrice = (basePrice + selectedSizePrice + selectedToppingPrices.reduce((a, b) => a + b, 0)) * quantity;

    let orderSummary = `
        <p><span>Tên sản phẩm:</span> ${sp} - ${formatCurrency(basePrice)} đ</p>
        <p><span>Size:</span> ${selectedSizeText}</p>
        <p><span>Topping:</span> ${selectedToppingsText.join(', ')}</p>
        <p><span>Số lượng:</span> ${quantity}</p>
       
    `;
    let finalTotal = `
        <p>Tổng cộng: ${formatCurrency(finalPrice)} đ</p>
    `;

    document.getElementById('order-summary').innerHTML = orderSummary;
    document.getElementById('final-total').innerHTML = finalTotal;
    document.getElementById('overlay').style.display = 'flex';
}

function showOverlay2() {
    const quantity = parseInt(document.getElementById('quantity').innerText);
    const finalPrice = (basePrice + selectedSizePrice + selectedToppingPrices.reduce((a, b) => a + b, 0)) * quantity;

    let orderSummary = `
        <p><span>Tên sản phẩm:</span> ${sp} - ${formatCurrency(basePrice)} đ</p>
        <p><span>Số lượng:</span> ${quantity}</p>
       
    `;
    let finalTotal = `
        <p>Tổng cộng: ${formatCurrency(finalPrice)} đ</p>
    `;

    document.getElementById('order-summary').innerHTML = orderSummary;
    document.getElementById('final-total').innerHTML = finalTotal;
    document.getElementById('overlay').style.display = 'flex';
}

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

function submitOrder() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (!phone || !address || !email || !name) {
        alert('Vui lòng đầy đủ thông tin!');
        return;
    }

    alert('Đặt hàng thành công! Vui lòng đợi nhân viên gọi điện xác nhận.');
    closeOverlay();
}

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

function submitOrder() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (!phone || !address || !email || !name) {
        alert('Vui lòng đầy đủ thông tin!');
        return;
    }

    alert('Đặt hàng thành công! Vui lòng đợi nhân viên gọi điện xác nhận.');
    closeOverlay();
}
