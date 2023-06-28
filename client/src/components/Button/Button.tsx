import React from "react";

type Props = {
  name: string;
  color?: string;
  toggle?: string;
  target?: string;
  click?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<Props> = ({ ...props }: Props) => {
  return (
    <button
      className="btn btn-secondary my-2 my-sm-0"
      type="submit"
      style={{ backgroundColor: props.color }}
      data-bs-toggle={props.toggle}
      data-bs-target={props.target}
      onClick={props.click}
    >
      {props.name}
    </button>
  );
};

export default Button;
