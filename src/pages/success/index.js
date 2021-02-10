import React, { useState } from "react";
import withLocation from "../../hoc/withLocation";
import { saveSeed } from "../../api";

const Success = ({ search }) => {
  const { postUrl, donationAmount, userName } = search;
  const [saving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState();
  console.log('success component')

  if (saving === false) {
    if (
      postUrl &&
      postUrl.length &&
      donationAmount &&
      donationAmount.length &&
      userName &&
      userName.length
    ) {
      setIsSaving(true);
      const result = saveSeed(postUrl, userName, donationAmount);
      setSaveSuccess(result);
    }
  }

  return (
    <>
    <p>hello</p>
      {saving && <p>Thanks, please wait</p>}
      {saveSuccess && <p>Your tree was successfully planted! Thanks!</p>}
      {!saveSuccess && <p>An error occured</p>}
    </>
  );
};

export default withLocation(Success);
