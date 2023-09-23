interface AlertProp {
  onClose: () => void;
}

const Alert = ({ onClose }: AlertProp) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
      This is an Alert
    </div>
  );
};

export default Alert;
