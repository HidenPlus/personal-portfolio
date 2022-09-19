import styled from 'styled-components';

export const ContactTitle = styled.h2`
  margin: 0px 0px 40px;
  font-weight: 600;
  color: var(--lightest-slate);
  line-height: 1.1;
  font-size: clamp(40px, 5vw, 60px);
  text-align: center;
`;

export const ContactDescription = styled.p`
  margin: 0px 0px 40px;
  color: var(--light-slate);
  font-size: var(--fz-md);
  max-width: 500px;
  text-align: center;
`;

export const ArrowImg = styled.img`
  width: 200px;
  margin: 0px auto;
  display: block;
`
