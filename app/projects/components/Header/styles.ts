import styled from 'styled-components';

export const Title = styled.h1`
  font-size: clamp(var(--fz-sm),5vw,var(--fz-md));
  font-weight: 400;
  margin: 0px 0px 30px 4px;
  color: var(--green);
  font-family: var(--font-mono);
`;

export const Name = styled.h2`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  color: var(--lightest-slate);
  font-family: var(--font-sans);
  line-height: 1.1;
  margin: 0;
  &::after {
    content: '';
    display: inline-block;
    width: 3px;
    height: .8em;
    margin-left: 5px;
    position: absolute;
    background-color: var(--lightest-slate);
    animation: blink 1s infinite;
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const Presentation = styled.h3`
  color: var(--slate);
  line-height: 0.9;
  font-size: clamp(40px, 8vw, 70px);
  font-weight: 600;
  margin: 0;
  margin-top: 10px;
  max-width: 900px;
`;

export const Description = styled.p`
  color: var(--slate);
  font-family: var(--font-sans);
  font-size: var(--fz-xl);
  line-height: 1.3;
  margin: 20px 0px 0px;
  max-width: 540px;
  display: inline-block;
`;

export const CompanyUrl = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: var(--transition);
  color: var(--green);
  &::after{
    content: "";
    display: block;
    width: 0px;
    height: 1px;
    position: relative;
    bottom: 0;
    background-color: var(--green);
    transition: var(--transition);
    opacity: 0.5;
  }
  &:hover&::after{ {
    width: 100%;
  }
`;
