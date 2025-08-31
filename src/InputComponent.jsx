export const InputComponent = ({
  divClassName = "",
  type = "text",
  name = "",
  placeholder = "",
  inputClassName = "",
  required = false,
}) => {
  return (
    <div className={divClassName}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={inputClassName}
        required={required}
      />
    </div>
  );
};
