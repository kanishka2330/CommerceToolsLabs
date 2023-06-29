const checkout = require("./handson/order");
const { log } = require("./logger.js");

const customerKey = "";
const cartId = "1d595d5e-abd0-4883-b37a-0c068d5ab20c";
const orderId = "";

const paymentDraft = {
  key:"payment" + Math.random().toString(36).substr(2, 5),
  amountPlanned:{
    currencyCode: 'EUR',
    centAmount: 5000
  }
}

const cartDraftData = {
  currency: "EUR",
  customerId: "8b4a252f-4e0d-44f0-a9c9-adf62a3bf9f3", //change customerId as you set it in Task2
  countryCode: "DE",
};

// create a cart and update the catId variable
//  checkout.createCart(cartDraftData).then(log).catch(log);

// checkout.addLineItemsToCart(['ff-SKU101','ff-SKU102'], cartId).then(log).catch(log);

// checkout.addDiscountCodeToCart(cartId, "SUMMER").then(log).catch(log);
// checkout.getCartById(cartId).then(log).catch(log);

// create order from cart and update the orderId
// checkout.createOrderFromCart(cartId).then(log).catch(log);

// checkout.getOrderById(orderId).then(log).catch(log);

// set order state to confirmed and custom workflow state to order packed
// checkout.setOrderState(orderId, 'Confirmed').then(log).catch(log);
// checkout.updateOrderCustomState(orderId,"ff-order-packed").then(log).catch(log);

const checkoutProcess = async () => {
  let emptyCart = await checkout.createCart(cartDraftData);

  let filledCart = await checkout.addLineItemsToCart(
    ['ff-SKU101','ff-SKU102'], emptyCart.body.id
  );
  filledCart = await checkout.addDiscountCodeToCart(
    emptyCart.body.id, 'myFirstPurchase'
  );

  let order = await checkout.createOrderFromCart(filledCart.body.id);
  const payment = await checkout.createPayment(paymentDraft);
  order = await checkout.addPaymentToOrder( payment.body.id, order.body.id,);
  // order = await checkout.setOrderState(order.body.id, 'Confirmed');
  // order = await checkout.updateOrderCustomState(order.body.id,'ff-order-packed');
  if (order) {
    return {
      status: 201,
      message: "order created: " + order.body.id,
    };
  }
};

checkoutProcess().then(log).catch(log);
