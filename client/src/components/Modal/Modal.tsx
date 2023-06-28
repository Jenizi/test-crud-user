import React from "react";
import Button from "../Button/Button";

type Props = {
  title: string;
  id: string;
  idLabel: string;
  children?: any;
  click?: React.MouseEventHandler<HTMLButtonElement>;
};

const Modal: React.FC<Props> = ({ children, ...props }: Props) => {
  return (
    <>
      <div>oi</div>
      <div
        className="modal fade"
        id={props.id}
        tabIndex={-1}
        aria-labelledby={props.idLabel}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={props.idLabel}>
                {props.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <Button name="Cancel" color="#9a031e" data-bs-dismiss="modal" />
              <Button name="Confirm" color="#008000" click={props.click} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
