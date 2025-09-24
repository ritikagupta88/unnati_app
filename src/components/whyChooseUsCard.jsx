export const WhyChooseUsCards = ({
  imgSrc = "",
  title = "",
  description = "",
}) => {
  return (
    <>
      <div
        className="col-md-3 col-12 ms-md-5 rounded-2  whyChooseUsCards"
        style={{ width: "20%" }}
      >
        <div className="row">
        <div className="col-12 text-center ">
          <img
            src={imgSrc}
            alt="icon-1"
            className="img-fluid border border-dark rounded-circle my-3 bg-white"
            style={{ height: "60px", width: "60px" }}
          />
        </div>
        <div className="col-12 py-4 px-3">
          <h5 className="fw-semibold">{title}</h5>
          <p className="" style={{ fontSize: "14px" }}>
            {description}
          </p>
        </div>
        </div>
      </div>
    </>
  );
};
