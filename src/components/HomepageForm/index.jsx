import React from "react";
import PlantForm from "./PlantForm";

const HomepageForm = () => {
  const initialFormState = {
    userName: "",
    postUrl: "",
  };
  // const [formState, setFormState] = useState(initialFormState);

  const updateState = (event) => {
    const value = event.target.value;
    console.log(event.target.id);
  };
  return (
    <>
      <PlantForm updateState={updateState} />
    </>
  );
};

export default HomepageForm;
