import "./Modal.css";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Modal = ({
  children,
  className,
  setModalVisibility,
  closeOnClickOutside = false,
  hasBackdrop = true,
}) => {
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        if (closeOnClickOutside) setModalVisibility(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      {hasBackdrop && <div className="backdrop"></div>}
      <div className={`modal ${className}`} ref={modalRef}>
        {children}
      </div>
    </>
  );
};

Modal.propTypes = {
  /** @param {func} [Required] - This is the boolen setter func of modal component */
  setModalVisibility: PropTypes.func.isRequired,

  /** @param {bool} [Optinal] - This takes boolean value. If set true, clicking outside of the popup will close the popup */
  closeOnClickOutside: PropTypes.bool,

  /** @param {bool} [Optinal] - This takes boolean value. By default it will show the black semi transparent backdrop */
  hasBackdrop: PropTypes.bool,
};

export default Modal;
