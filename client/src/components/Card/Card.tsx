import React from "react";
import "./styles.css";

type Props = {
  id: number;
  name?: string;
  userName?: string;
  userCpf?: string;
  userLogin?: string;
  children?: any;
};

const Card: React.FC<Props> = ({ children, ...props }: Props) => {
  return (
    <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header">
        <div>
          <span>user #{props.id}</span>
        </div>
        <div>{children}</div>
      </div>
      <div className="card-body">
        <h4 className="card-title">{props.userName}</h4>
        <p className="card-text">CPF: {props.userCpf}</p>
        <p className="card-text">Login: {props.userLogin}</p>
      </div>
    </div>
  );
};

export default Card;
