import React from "react";

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
  const { updateState } = props;
  return (
    <form style={formContainerStyles}>
      <span>
        <label style={labelStyles} htmlFor="reddit-username">
          Reddit username:
        </label>
        <input
          id="reddit-username"
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
          id="InputURL"
          type="text"
          placeholder="Reddit post URL"
          onChange={updateState}
        />
      </span>
      <span>
        <label style={labelStyles} htmlFor="InputDonation">
          Donation amount $:
        </label>
        <input
          id="InputDonation"
          type="number"
          placeholder="Donation amount $"
        />
      </span>
    </form>
  );
};

export default PlantForm;
