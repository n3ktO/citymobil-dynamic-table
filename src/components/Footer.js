import styled from 'styled-components';

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  position: fixed;
  bottom: 0;
  background: #d4d5d6; ;
`;

const Footer = () => <FooterStyle>footer</FooterStyle>;

export default Footer;
