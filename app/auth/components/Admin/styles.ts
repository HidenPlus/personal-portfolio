import styled from "styled-components"

export const UsersLayout = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(100vw - 400px);
  margin-left: 400px;
  height: 100vh;
  margin-top: var(--nav-height);
  gap: 40px;
`

export const ActionButton = styled.button`
  background-color: var(--color-dark);
  color: var(--white);
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--color-secondary);
  }
`
