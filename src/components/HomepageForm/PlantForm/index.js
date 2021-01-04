import React from "react";
import StripeButton from "../StripeButton";

const PlantForm = (props) => {
  const { updateState, isValid } = props;
  return (
    <form>
      <div className="mb-3">
        <label className="form-label" htmlFor="reddit-username">
          Reddit username:
        </label>
        <input
          id="userName"
          className="form-control"
          type="text"
          onChange={updateState}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="InputURL">
          Reddit post url:
        </label>
        <input
          id="postUrl"
          className="form-control"
          type="text"
          onChange={updateState}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="InputDonation">
          Donation amount $:
        </label>
        <input
          id="InputDonation"
          className="form-control"
          type="number"
          value="1.50"
          disabled={true}
        />
      </div>
    </form>
  );
};

export default PlantForm;
