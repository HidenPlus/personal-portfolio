import { motion } from "framer-motion"
import styled from "styled-components"

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

export const AlertDialogWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

export const Dialog = styled(motion.div)`
  width: 400px;
  background-color: var(--color-primary);
  font-family: var(--font-sans);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: fixed;
  top: 10%;
  right: 0;
`

export const DialogTitle = styled.h3`
  font-size: 1.5rem;
  padding: 1rem;
  margin: 0;
  color: var(--white);
`

export const DialogContent = styled.div`
  padding: 0 1rem;
  color: var(--white);
`

export const DialogActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
`

export const DialogButton = styled.button`
  background-color: var(--white);
  color: var(--color-primary);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 1rem;
`
