export const HeroSectionCards = ({
  title = "",
  description = "",
  button = "",
  buttonFunction = () => {},
}) => {
  return (
    <div className="col-12 col-md-4 d-flex mb-3">
      <div className="card h-100 shadow-sm w-100">
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{description}</p>
          <button
            className="btn btn-outline-dark py-1"
            onClick={buttonFunction}
            style={{ fontSize: "12px" }}
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};
