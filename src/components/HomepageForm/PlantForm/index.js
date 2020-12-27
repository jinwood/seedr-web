import React from "react";
import StripeButton from "../StripeButton";

const formContainerStyles = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
};

const labelStyles = {
  flex: "1 0 120px",
  maxWidth: "220px",
};

const PlantForm = (props) => {
  const { updateState, isValid } = props;
  return (
    <form>
      <span>
        <label style={labelStyles} htmlFor="reddit-username">
          Reddit username:
        </label>
        <input id="userName" type="text" onChange={updateState} />
      </span>
      <span>
        <label style={labelStyles} htmlFor="InputURL">
          Reddit post url:
        </label>
        <input id="postUrl" type="text" onChange={updateState} />
      </span>
      <span>
        <label style={labelStyles} htmlFor="InputDonation">
          Donation amount $:
        </label>
        <input id="InputDonation" type="number" value="1.50" disabled={true} />
      </span>
      <span>
        <StripeButton disabled={!isValid} />
      </span>
    </form>
  );
};

export default PlantForm;
