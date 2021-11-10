import React from 'react';
import styled from 'styled-components';

import ContactForm from '../Form/ContactForm';
import ContactForm2 from '../Form/ContactFormTwo';
import Row from '../Basic/Row';
import Col from '../Basic/Col';
import { StyledH2 } from '../Basic/Headings';

import Logo from '../../images/jukonmedia_logo_v2.png';

import Phone from '../../images/icons/Phone';
import Location from '../../images/icons/Location';
import Envelope from '../../images/icons/Envelope';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 20px;
  width: 100%;

  & p{
    color: ${({ theme }) => theme.neutralColor.textPrimary};
    font-size: 0.825rem;
    font-weight: 500;

  span{
    color: ${({ theme }) => theme.accentColor.primary};
    font-weight: 600;
  }
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;

  & p{
    margin-left: 10px;
    font-weight: 500;
  }

  svg{
    color: ${({ theme }) => theme.accentColor.primary}
  }
`;

const StyledLogo = styled.img`
  margin-top: 30px;
  width: 80%;
`;

const Footer = () => {
  return (
    <>
      <Row style={{ margin: '40px 0' }} >
        <Col md={4} style={{ marginTop: '40px' }}>
          <StyledH2>Kontakt</StyledH2>
          <StyledInfo>
            <Phone /> <p>696 476 519</p>
          </StyledInfo>
          <StyledInfo>
            <Envelope /> <p>mariusz@jukonmedia.pl</p>
          </StyledInfo>
          <StyledInfo>
            <Location /> <p>ul. Bruska 11B, 85-422 Bydgoszcz</p>
          </StyledInfo>
          <StyledLogo src={Logo} alt={"JukonMedia Logo"} />
        </Col>
        <Col md={8} style={{ marginTop: '30px' }}>
          <ContactForm />
        </Col>
      </Row>
      <StyledFooter>
        <div>
          <p><span>JukonMedia.pl</span> &copy; All rights reserved</p>
        </div>
        <div>
          <p>Polityka Prywatności</p>
        </div>
      </StyledFooter>
    </>

  );
};

export default Footer;
