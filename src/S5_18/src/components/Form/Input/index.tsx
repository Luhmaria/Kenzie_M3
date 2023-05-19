import { StyledInputContainer } from "../../../styles/form";
import { StyledParagraph } from "../../../styles/typography";
import { FieldError } from "react-hook-form";
import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  error?: FieldError;
}

const Input = forwardRef(
  (
    { id, label, error, ...rest }: iInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div>
      <StyledInputContainer>
        <input id={id} placeholder=" " ref={ref} {...rest} />
        <label htmlFor={id}>{label}</label>
      </StyledInputContainer>
      <StyledParagraph fontColor="red">{error?.message}</StyledParagraph>
    </div>
  )
);

export default Input;
