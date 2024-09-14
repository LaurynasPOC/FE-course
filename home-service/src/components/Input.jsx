import styled from "styled-components";

export const Input = ({
  label,
  name,
  value,
  onChange,
  pattern,
  placeholder,
  type,
  required,
  id,
  ...rest
}) => (
  <StyledInput {...rest}>
    {label && <label htmlFor={id}>{label}</label>}
    <input
      placeholder={placeholder}
      id={id}
      name={name || id}
      value={value}
      pattern={pattern}
      onChange={onChange}
      required={required}
      type={type || "text"}
      {...rest}
    />
  </StyledInput>
);

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-width: 300px;
  input,
  label {
    display: block;
    width: 100%;
  }
  input {
    padding: 10px 15px;
    background: var(--white-2);
    color: var(--black);
    border: 3px solid var(--grey);
    border-radius: 40px;
    width: 100%;
    font-size: 14px;
    transition: border-color 0.3s ease;
    &:focus,
    &:hover {
      border-color: var(--purple);
      outline: none;
    }
  }
  label {
    padding: 5px 15px;
    font-weight: 700;
    color: var(--black);
  }
`;
