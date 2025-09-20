export const BannerPage = ({
  title = "",
  description = "",
  button1Text = "",
  button1Function = () => {},
  button2Text = "",
  button2Function = () => {},
  bannerImageUrl = "",
  activeState = false,
  interval = 3000,
}) => {
  const activeStateClass = activeState ? "active" : "";

  return (
    <div className={`container carousel-item  ${activeStateClass}`}
      data-bs-interval = {interval}
    >
      <div className="row">
        <div className="col-md-7 col-12 ps-md-5 pe-md-4 ps-4 pe-3 d-flex flex-column justify-content-center ">
          <h1 className="fw-semibold mb-3">{title}</h1>
          <p className="mb-5">{description}</p>
          <div className="d-flex banner-button">
            <button className="btn1 " onClick={button1Function}>
              {button1Text}
            </button>
            <button className="btn2 " onClick={button2Function}>
              {button2Text}
            </button>
          </div>
        </div>
        <div className="col-md-5 col-12">
          <img
            src={bannerImageUrl}
            className=""
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};
