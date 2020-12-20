import React, { useState } from "react";
import PlantForm from "./PlantForm";
import StripeButton from "./StripeButton";

const HomepageForm = () => {
  const initialFormState = {
    userName: "",
    postUrl: "",
    donationAmount: 1.5,
  };
  const [formState, setFormState] = useState(initialFormState);
  const [isValid, setIsValid] = useState(false);

  const validateForm = () => {
    const { userName, postUrl, donationAmount } = formState;
    if (userName.length < 3) {
      setIsValid(false);
    } else if (postUrl.length < 5) {
      //todo url regex
      setIsValid(false);
    } else if (donationAmount < 1) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const updateState = (event) => {
    const { target } = event;
    const { value, id } = target;
    setFormState({ ...formState, [id]: value });
    validateForm();
  };

  return (
    <>
      <PlantForm updateState={updateState} isValid={isValid} />
    </>
  );
};

export default HomepageForm;
