import React from "react";
import { InputWrapper, InputLabel } from "./styled";

// To Do(Dennis): to add prop types

const TextField = ({
  placeholder,
  type,
  label,
  autoFocus,
  id,
  onChangeCustom,
  ...props
}) => (
  <React.Fragment>
    {label && <InputLabel>{label}</InputLabel>}
    <InputWrapper
      {...props}
      id={id}
      type={type === "password" ? "password" : "text"}
      placeholder={placeholder}
      autoFocus={autoFocus}
      name={props.name}
      onChange={e => {
        props.onChange(e);
        if (onChangeCustom) {
          onChangeCustom(e);
        }
      }}
    />
  </React.Fragment>
);

export default TextField;
