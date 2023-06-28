import React from "react";

type Props = {
  label: string;
  type: string;
  placeholder: string;
  change: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
};

const Input: React.FC<Props> = ({ ...props }: Props) => {
  return (
    <>
      <label className="d-block">{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.change}
      />
    </>
  );
};

export default Input;
