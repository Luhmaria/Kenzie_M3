import { forwardRef } from "react";

const Input = forwardRef(({ id, ...rest }, ref) => {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input id={id} name={id} ref={ref} {...rest} />
    </>
  );
});

export default Input;
