import styled from "styled-components"

export const LoadingBarWrapper = styled.div<{ $active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 9999;
  background-color: var(--slate);
  transition: all 0.3s ease;
  transform: translate3d(0, -100%, 0);
  opacity: 0;
  ${({ $active }) =>
    $active &&
    `transform: translate3d(0, 0, 0);
    opacity: 1;`}
`

export const LoadingBarInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: var(--color-secondary);
  animation: loading 2s linear infinite;
  @keyframes loading {
    0% {
      width: 100%;
    }
    50% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`
