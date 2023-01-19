const cart=["shoe","ipad","earpods"];

createOrder(cart, function(){
    proceedToPayment();
});

const promise = createOrder(cart);

promise.then(function(orderId){
    proceedToPayment(orderId);
});