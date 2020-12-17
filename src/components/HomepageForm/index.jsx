import React, { useState } from "react";
import PlantForm from "./PlantForm";

const HomepageForm = () => {
  const initialFormState = {
    userName: "",
    postUrl: "",
  };
  const [formState, setFormState] = useState(initialFormState);

  const updateState = (event) => {
    const { target } = event;
    const { value, id } = target;
    setFormState({ ...formState, [id]: value });
  };

  console.log(formState);
  return (
    <>
      <PlantForm updateState={updateState} />
    </>
  );
};

export default HomepageForm;
