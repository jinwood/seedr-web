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
    <div style={formContainerStyles}>
      <span>
        <label style={labelStyles} htmlFor="reddit-username">
          Reddit username:
        </label>
        <input
          id="userName"
          type="text"
          placeholder="Reddit username (optional)"
          onChange={updateState}
        />
      </span>
      <span>
        <label style={labelStyles} htmlFor="InputURL">
          Reddit post url:
        </label>
        <input
          id="postUrl"
          type="text"
          placeholder="Reddit post URL"
          onChange={updateState}
        />
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
    </div>
  );
};

export default PlantForm;