import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PKEY);
  }
  return stripePromise;
};

const StripeButton = (props) => {
  const [loading, setLoading] = useState(false);

  const { formState } = props;
  const { postUrl, donationAmount, userName } = formState;
  const { disabled } = props;
  console.log(disabled);

  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1HxqkoHCHwpMZAbf0StCZcMK", quantity: 1 }],
      successUrl: `http://localhost:8000/success?postUrl=${postUrl}&donationAmount=${donationAmount}&userName=${userName}`,
      cancelUrl: `http://localhost:8000/`,
    });

    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
    <button
      disabled={disabled}
      className="btn btn-primary"
      onClick={redirectToCheckout}
    >
      Plant a Tree
    </button>
  );
};

export default StripeButton;
