export const FaqSections = ({
  id = "",
  title = "",
  description = "",
  isOpen = false,
}) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded={isOpen}
          aria-controls={id}
        >
          {title}
        </button>
      </h2>
      <div
        id={id}
        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{description}</div>
      </div>
    </div>
  );
};
