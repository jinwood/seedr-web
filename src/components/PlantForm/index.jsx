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

const PlantForm = () => {
  return (
    <form style={formContainerStyles}>
      <span>
        <label style={labelStyles} for="InputUsername">
          Reddit username:
        </label>
        <input
          id="InputUsername"
          type="text"
          placeholder="Reddit username (optional)"
        />
      </span>
      <span>
        <label style={labelStyles} for="InputURL">
          Reddit post url:
        </label>
        <input id="InputURL" type="text" placeholder="Reddit post URL" />
      </span>
      <span>
        <label style={labelStyles} for="InputDonation">
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