import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function AdditionalSkills() {
  const { content, updateAdditionalData, removeFakeData } = useContext(
    ResumeContext
  );
  const [btnText, setBtnText] = useState("Add");

  const { register, handleSubmit } = useForm();
  const sub = (data) => {
    removeFakeData();
    updateAdditionalData(data);
    setBtnText("Update");
  };

  return (
    <div className="">
      <h2>Additional Skills</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(sub)}
      >
      <label>Your Skills</label>
        <TextField id="outlined-basic" label="Skills:"          defaultValue={content.additional[0]}
          name="skill1"
          variant="outlined"
          inputRef={register({
            max: {
              value: 3,
              message: "error message", // <p>error message</p>
            },
          })}
          // onChange={handleSubmit(sub)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
     <label>Your Interests:</label>
        <TextField id="outlined-basic"  label="Interests: :" defaultValue={content.additional[1]}
          name="skill2"
          variant="outlined"
          inputRef={register}
          // onChange={handleSubmit(sub)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          {btnText}
        </Button>
      </form>
    </div>
  );
}

export default AdditionalSkills;
