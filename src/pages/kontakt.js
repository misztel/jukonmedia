import * as React from 'react';
import styled from 'styled-components';

import BigLogo from '../images/biglogo.png';

import Row from '../components/Basic/Row';
import Col from '../components/Basic/Col';
import Container from '../components/Basic/Container';
import Footer from '../components/Layout/Footer';
import Seo from '../components/seo';

const StyledShape = styled.img`
  margin-left: auto;
  width: 80%;
  display: none;

  @media ${props => props.theme.media.fablet} {
    display: block;
  }
`;

const CarouselCol = styled(Col)`
  margin-bottom: auto;
  margin-top: auto;
`;

const CarouselBeforeHeading = styled.p`
  color: ${({ theme }) => theme.accentColor.primary};
  font-weight: 500;
  padding-left: 15px;
  position: relative;
  text-transform: uppercase;

  :before{
    color: ${({ theme }) => theme.accentColor.primary};
    content: "/";
    font-weight: 700;
    left: 0px;
    position: absolute;
    top: 0px;
  }
`;

const ContactPage = () => (
  <>
    <Seo title="JukonMedia.pl - Kontakt" />
    <Container>
      <Row style={{ padding: '30px 0' }}>
        <Col md={6} style={{ order: 2, textAlign: 'center' }}>
          <StyledShape src={BigLogo} alt="" />
        </Col>
        <CarouselCol md={6}>
          <CarouselBeforeHeading>
            Zainteresowała Cie
          </CarouselBeforeHeading>
          <h1> NASZA OFERTA? </h1>
          <p>
            Masz dodatkowe pytania? Zadzwoń, napisz do nas lub skorzystaj z formularza kontaktowego, z chęcią udzielimy Ci szczegółowych informacji!
          </p>
        </CarouselCol>
      </Row>
    </Container>
    <Container>
      <Footer />
    </Container>
  </>
);

export default ContactPage;
