import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid red;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;
  padding-bottom: 15px;
  margin-top: 100px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
