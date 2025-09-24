export const HowItWorksCards = ({
  imgSrc = "",
  title = "",
  description = "",
}) => {
  return (
    <div className="container mt-4">
      <div className="row mobile-only-flex">
        <div
          className="col-md-1 rounded-2 mobile-22-width"
          style={{
            background:
              "linear-gradient(147deg, #b5bae8ff 14.12%, #cfc0e8ff 80.26%)",
            height: "60px",
            width: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={imgSrc} alt="img" className="img-fluid" />
        </div>
        <div className="col-md-11 mobile-75-width">
          <h5 className="fw-semibold">{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
