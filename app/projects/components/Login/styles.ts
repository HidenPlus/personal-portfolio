import { motion } from "framer-motion";
import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  background-color: var(--color-primary);
  border-radius: 20px;
  min-width: 400px;
  box-shadow: 0px 30px 33px 1px rgba(0,0,0,0.2);
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding-bottom: 20px;
`;

export const ErrorChecker = styled.div<{validForm: boolean}>`
  position: absolute;
  top: -10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--white);
  background-color: ${p => p.validForm ? "var(--dark-green)" : "var(--dark-red);"};
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

export const FormTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 45px;
`;

export const LoginTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--white);
  text-align: center;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 180px;
    height: 2px;
    margin: 6px 0;
    background-color: var(--white);
  }
`;

export const SignUpTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--slate);
  text-align: center;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 180px;
    height: 2px;
    margin: 6px 0;
    background-color: var(--slate);
  }
`;

export const LabeledTextFieldWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  position: relative;
  margin-bottom: .5rem;
  border: 0;
  border-radius: 10px;
  font-family: var(--font-mono);
  font-size: inherit;
  padding: 10px;
  outline: none;
  width: 70%;
  background-color: var(--slate);
  &:focus {
    border-color: var(--color-primary);
  }
  &::placeholder {
    color: transparent;
  }
  &:focus::placeholder {
    color: initial;
  }
  & + label {
    position: absolute;
    top: 10px;
    left: 70px;
    color: var(--white);
    font-family: var(--font-mono);
    transition: all 0.3s ease;
    pointer-events: none;
  }
  &:not(:placeholder-shown) + label,
      &:focus + label {
    top: -1rem;
    left: 50px;
    font-size: 0.8rem;
    pointer-events: initial;
    font-family: var(--font-sans);
    color: var(--slate);
  }
`;

export const PopupFollowMe = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  background-color: var(--white);
  border-radius: 20px;
  z-index: 100;
  max-width: 200px;
`;

export const LoginButtonWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const LoginButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 40px;
  background-color: var(--color-secondary);
  color: var(--white);
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 160px;
  &:hover, &:focus {
    background-color: var(--dark-green);
  }
`;
