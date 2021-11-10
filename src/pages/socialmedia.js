import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import SocialMedia from '../images/socialmedia.svg';

import Col from '../components/Basic/Col';
import Row from '../components/Basic/Row';
import Container from '../components/Basic/Container';
import { Card, CardTitle, CardIcon, CardContent } from '../components/Basic/Card';
import Footer from '../components/Layout/Footer';
import Seo from '../components/seo';
import { StyledH2, StyledH3 } from '../components/Basic/Headings';

import Contest from '../images/icons/Contest.js';
import Content from '../images/icons/Content.js';
import Organisation from '../images/icons/Organisation.js';
import Campagain from '../images/icons/Campagain.js';

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

const SocialmediaPage = (props) => (
  <>
    <Seo title="JukonMedia.pl - Socialmedia" />
    <Container>
      <Row style={{ padding: '30px 0', alignItems: 'center' }}>
        <Col md={6} style={{ order: 2, textAlign: 'end' }}>
          <StyledShape src={SocialMedia} alt="" />
        </Col>
        <CarouselCol md={6}>
          <CarouselBeforeHeading>
            Zarządzanie profilami
          </CarouselBeforeHeading>
          <h1> SOCIALMEDIA </h1>
          <p>
            Media społecznościowe to nowy, skuteczny model komunikacji firm oraz
            podejście do szeroko rozumianej promocji w internecie.Obsługujemy profile
            social media firm oraz prowadzimy efektywną reklamę na Facebook, Instagram,
            Twitter, YouTube.
          </p>
        </CarouselCol>
      </Row>
    </Container>
    <Container>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <StyledH2>Działamy na:</StyledH2>
      </Row>
      <Row itemsMargin={30} style={{ marginTop: '40px', marginBottom: '40px' }}>
        <Col md={3}>
          <Card equal direction="column">
            <CardContent alignItems="center" padding="25px">
              <CardIcon padding="20px 0px" width="50px">
                <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
              </CardIcon>
              <CardTitle>
                Facebook
              </CardTitle>
            </CardContent>
          </Card>
        </Col>
        <Col md={3}>
          <Card equal direction="column">
            <CardContent alignItems="center" padding="25px">
              <CardIcon padding="20px 0px" width="50px">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </CardIcon>
              <CardTitle>
                Instagram
              </CardTitle>
            </CardContent>
          </Card>
        </Col>
        <Col md={3}>
          <Card equal direction="column">
            <CardContent alignItems="center" padding="25px">
              <CardIcon padding="20px 0px" width="50px">
                <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
              </CardIcon>
              <CardTitle>
                Twitter
              </CardTitle>
            </CardContent>
          </Card>
        </Col>
        <Col md={3}>
          <Card equal direction="column">
            <CardContent alignItems="center" padding="25px">
              <CardIcon padding="20px 0px" width="50px">
                <FontAwesomeIcon icon={faYoutube} size="3x" />
              </CardIcon>
              <CardTitle>
                Youtube
              </CardTitle>
            </CardContent>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row style={{ margin: '50px' }}>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <StyledH2>
            Oferujemy
          </StyledH2>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Row itemsMargin={30} style={{ marginBottom: '40px' }}>
            <Col sm={12}>
              <Card direction="row">
                <CardContent alignItems="center" padding="15px 25px">
                  <CardIcon
                    style={{ marginRight: '15px' }}
                    padding="0px"
                    width="40px"
                  >
                    <Campagain />
                  </CardIcon>
                  <CardTitle>Kampanie reklamowe</CardTitle>
                </CardContent>
              </Card>
            </Col>
            <Col sm={12}>
              <Card direction="row">
                <CardContent alignItems="center" padding="15px 25px">
                  <CardIcon
                    style={{ marginRight: '15px' }}
                    padding="0px"
                    width="40px"
                  >
                    <Contest />
                  </CardIcon>
                  <CardTitle>Konkursy</CardTitle>
                </CardContent>
              </Card>
            </Col>
            <Col sm={12}>
              <Card direction="row">
                <CardContent alignItems="center" padding="15px 25px">
                  <CardIcon
                    style={{ marginRight: '15px' }}
                    padding="0px"
                    width="40px"
                  >
                    <Organisation />
                  </CardIcon>
                  <CardTitle>Prowadzenie profili</CardTitle>
                </CardContent>
              </Card>
            </Col>
            <Col sm={12}>
              <Card direction="row">
                <CardContent alignItems="center" padding="15px 25px">
                  <CardIcon
                    style={{ marginRight: '15px' }}
                    padding="0px"
                    width="40px"
                  >
                    <Content />
                  </CardIcon>
                  <CardTitle>Tworzenie materiałów</CardTitle>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col sm={8}>
          <Row style={{ marginBottom: '20px' }}>
            <Col sm={12}>
              <StyledH3>
                Prowadzenie Profilu Facebook
              </StyledH3>
              <p>
                Oferujemy aktywne prowadzenie profili na portalach społecznościowych
                (w tym odpowiadanie na wiadomości i komentarze) oraz prowadzenie kampanii reklamowych.
              </p>
            </Col>
          </Row>
          <Row style={{ marginBottom: '20px' }}>
            <Col sm={12}>
              <StyledH3>
                Tworzenie materiałów
              </StyledH3>
              <p>
                Przygotowujemy angażujące treści, przykuwającą uwagę szatę graficzna, ustalamy harmonogram publikacji i działań reklamowych.
              </p>
            </Col>
          </Row>
          <Row style={{ marginBottom: '20px' }}>
            <Col sm={12}>
              <StyledH3>
                Prowadzenie profilu Instagram
              </StyledH3>
              <p>
                Poprowadzimy Twój profil na Instagramie według Twoich zaleceń i oczekiwań. Zadbamy o odpowiedni dobór oraz publikacje zdjęć,
                opisów oraz hashtagów wg. ustalonego harmonogramu publikacji.
              </p>
            </Col>
          </Row>
          <Row style={{ marginBottom: '20px' }}>
            <Col sm={12}>
              <StyledH3>
                Kampanie reklamowe
              </StyledH3>
              <p>
                Proponujemy kompleksową obsługę kampanii z możliwością skierowania spersonalizowanej treści
                do konkretnego użytkownika oraz bieżącą optymalizacją i raportowaniem wyników.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <Container>
      <Footer />
    </Container>
  </>
);

export default SocialmediaPage;
