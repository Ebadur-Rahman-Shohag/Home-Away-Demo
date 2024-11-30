type BookingDetails = {
  amount: number;
  price: number;
  discount: number;
};

export const calculateTotals = ({
  amount,
  price,
  discount,
}: BookingDetails) => {
  const subTotal = amount * (price - Number(discount));
  const shippingCost = 50;
  const deliverCost = 100;
  const tax = subTotal * 0.1;
  const orderTotal =
    subTotal + shippingCost + deliverCost + tax;
  return { subTotal, shippingCost, deliverCost, tax, orderTotal };
};
