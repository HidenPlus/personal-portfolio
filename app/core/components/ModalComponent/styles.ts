import { motion } from "framer-motion"
import styled from "styled-components"

export const ModalWrapper = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ $visible }) => ($visible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`
export const ModalContent = styled(motion.div)`
  background-color: var(--white);
  border-radius: 5px;
  padding: 20px 40px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
`

export const ModalClose = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 5px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: var(--font-mono);
  color: var(--dark);
`

export const LabeledTextFieldWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const Input = styled.input`
  position: relative;
  margin-bottom: 0.5rem;
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
    left: 10px;
    color: var(--white);
    font-family: var(--font-mono);
    transition: all 0.3s ease;
    pointer-events: none;
  }
  &:not(:placeholder-shown) + label,
  &:focus + label {
    top: -1rem;
    left: 0px;
    font-size: 0.8rem;
    pointer-events: initial;
    font-family: var(--font-sans);
    color: var(--slate);
  }
`

export const ModalFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 20px;
`
