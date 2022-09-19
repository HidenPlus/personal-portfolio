import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const LabeledTextFieldWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`

export const Input = styled.input`
  position: relative;
  margin-bottom: 2rem;
  border: 0;
  border-bottom: 2px solid #ccc;
  font-size: inherit;
  padding: 0;
  outline: none;
  &:focus {
    border-bottom-color: purple;
  }
  &::placeholder {
    color: transparent;
  }
  &:focus::placeholder {
    color: initial;
  }
  & + label {
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
    pointer-events: none;
  }
  &:not(:placeholder-shown) + label,
      &:focus + label {
    top: -1rem;
    font-size: 0.8rem;
    pointer-events: initial;
  }
`;
