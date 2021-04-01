import React from "react";
const InputField = (props) => {
  const { fieldType, placeholder } = props;
  return (
    <div>
      <input type={fieldType} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
