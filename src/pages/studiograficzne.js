import * as React from 'react';
import styled from 'styled-components';

import BigLogo from '../images/pracowniagraficzna.svg';

import Row from '../components/Basic/Row';
import Col from '../components/Basic/Col';
import Container from '../components/Basic/Container';
import Footer from '../components/Layout/Footer';
import Seo from '../components/seo';
import {
  Card,
  CardTitle,
  CardContent,
  CardIcon
} from '../components/Basic/Card';

import GiftCard from '../images/icons/GiftCard.js';
import Calendar from '../images/icons/Calendar.js';
import Catalog from '../images/icons/Catalog.js';
import Book from '../images/icons/Book.js';
import Poster from '../images/icons/Poster.js';
import Flyer from '../images/icons/Flyer.js';
import BussinesCard from '../images/icons/BussinesCard.js';

const StyledShape = styled.img`
  margin-left: auto;
  width: 80%;
  display: none;

  @media ${props => props.theme.media.fablet} {
    display: block;
  }
`;

const CarouselCol = styled(Col)`
  margin-top: auto;
  margin-bottom: auto;
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


const StyledCardTitle = styled(CardTitle)`
  text-align: center;
`;

const StudioPage = () => (
  <>
    <Seo title="JukonMedia.pl - Studio Graficzne" />
    <Container>
      <Row style={{ padding: '30px 0', alignItems: 'center' }}>
        <Col md={6} style={{ order: 2, textAlign: 'center' }}>
          <StyledShape src={BigLogo} alt="" />
        </Col>
        <CarouselCol md={6}>
          <CarouselBeforeHeading>
            Kreatywne
          </CarouselBeforeHeading>
          <h1> STUDIO GRAFICZNE </h1>
          <p>
            Oferujemy szeroką gamę produktów – od projektów na
            potrzeby druku (wizytówki, teczki, plakaty, katalogi, książki, czaspisma), aż po grafikę do stron internetowych, postów na social media.
          </p>
        </CarouselCol>
      </Row>
    </Container>
    <Container>
      <Row itemsMargin={30} style={{ margin: '40px 0' }}>
        <Col lg={3} md={4} sm={6}>
          <Card equal direction="column">
            <CardContent alignItems="center" padding="25px">
              <CardIcon padding="20px 0px" width="50px">
                <Catalog />
              </CardIcon>
              <StyledCardTitle>
                foldery reklamowe, katalogi
              </StyledCardTitle>
            </CardContent>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6}>
          <Card equal direction="column">
            <CardContent alignItems="center" padding="25px">
              <CardIcon padding="20px 0px" width="50px">
                <BussinesCard />
              </CardIcon>
              <StyledCardTitle>
                wizytówki, papier firmowy, koperty, teczki
              </StyledCardTitle>
            </CardContent>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6}>
          <Card equal direction="column">
            <CardContent alignItems="center" padding="25px">
              <CardIcon padding="20px 0px" width="50px">
                <Calendar />
              </CardIcon>
              <StyledCardTitle>
                kalendarze, bloczki/notesy
              </StyledCardTitle>
            </CardContent>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6}>
          <Card equal direction="column">
            <CardContent alignItems="center" padding="25px">
              <CardIcon padding="20px 0px" width="50px">
                <GiftCard />
              </CardIcon>
              <StyledCardTitle>
                karty rabatowe i podarunkowe
              </StyledCardTitle>
            </CardContent>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6}>
          <Card equal direction="column">
            <CardContent alignItems="center" padding="25px">
              <CardIcon padding="20px 0px" width="50px">
                <Flyer />
              </CardIcon>
              <StyledCardTitle>
                ulotki, broszury
              </StyledCardTitle>
            </CardContent>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6}>
          <Card equal direction="column">
            <CardContent alignItems="center" padding="25px">
              <CardIcon padding="20px 0px" width="50px">
                <Book />
              </CardIcon>
              <StyledCardTitle>
                książki, raporty, albumy
              </StyledCardTitle>
            </CardContent>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6}>
          <Card equal direction="column">
            <CardContent alignItems="center" padding="25px">
              <CardIcon padding="20px 0px" width="50px">
                <Poster />
              </CardIcon>
              <StyledCardTitle>
                plakaty
              </StyledCardTitle>
            </CardContent>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
      <Footer />
    </Container>
  </>
);

export default StudioPage;
