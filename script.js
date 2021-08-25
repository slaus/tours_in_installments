document.addEventListener('DOMContentLoaded', function(event) {
    'use strict';
    
    /* Payment In Installments Script */
    const priceTour = document.querySelector('#price_tour'),
          firstPayment = document.querySelector('#first_payment');
    
    paymentInInstallments();
    priceTour.addEventListener('change', paymentInInstallments);
    firstPayment.addEventListener('change', paymentInInstallments);
    priceTour.addEventListener('input', paymentInInstallments);
    firstPayment.addEventListener('input', paymentInInstallments);
    
    function paymentInInstallments() {
        const paymentPart = document.querySelectorAll('.payment_part');

        paymentPart.forEach(function(item) {
            if (priceTour.value < firstPayment.value) {
                item.innerHTML = 0;
            } else {
                item.innerHTML = Math.round((priceTour.value - firstPayment.value) / item.getAttribute('data-qty') + (priceTour.value - firstPayment.value) * 0.05);
            }
        });
    }
});
