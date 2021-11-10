import * as React from 'react';
import styled from 'styled-components';

import SocialMedia from '../images/socialmedia.svg';
import Ecommerce from '../images/ecommerce.svg';
import Stronywww from '../images/stronywww.svg';

import ButtonLink from '../components/Basic/ButtonLink';
import Container from '../components/Basic/Container';
import Col from '../components/Basic/Col';
import Row from '../components/Basic/Row';
import { Card, CardTitle, CardContent, CardText, CardIcon } from '../components/Basic/Card';
import Carousel from '../components/Carousel/Carousel';
import CarouselItem from '../components/Carousel/CarouselItem/CarouselItem';
import Footer from '../components/Layout/Footer';
import Seo from '../components/seo';

import { StyledH2, StyledH3 } from '../components/Basic/Headings';

import Desktop from '../images/icons/Desktop.js';
import Gallery from '../images/icons/Gallery.js';
import People from '../images/icons/People.js';
import Bag from '../images/icons/Bag.js';

import Efficiency from '../images/icons/Efficiency.js';
import Web from '../images/icons/Web.js';
import UniqueDesign from '../images/icons/UniqueDesign.js';

import Contest from '../images/icons/Contest.js';
import Content from '../images/icons/Content.js';
import Organisation from '../images/icons/Organisation.js';
import Campagain from '../images/icons/Campagain.js';

import Payments from '../images/icons/Payments.js';
import Responsive from '../images/icons/Responsive.js';
import Easy from '../images/icons/Easy.js';
import Shop from '../images/icons/Shop.js';

const StyledCTA = styled.div`
  display: block;
  padding: 20px 0px;
`;

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

const IndexPage = () => {
  return (
    <>
      <Seo title="JukonMedia.pl - Strony Internetowe, Sklepy Internetowe, SocialMedia" />
      <Carousel items={1} autoplay pauseTime={10000} dots transitionTime={1000} pauseTime={5000} padding='0px 0px 40px 0px' >
        <CarouselItem>
          <Container>
            <Row style={{ padding: '30px 0', alignItems: 'center' }}>
              <Col md={6} style={{ order: 2, textAlign: 'end' }}>
                <StyledShape src={Stronywww} alt="" />
              </Col>
              <CarouselCol md={6}>
                <CarouselBeforeHeading>
                  Unikatowe
                </CarouselBeforeHeading>
                <h1> STRONY INTERNETOWE </h1>
                <p>
                  Chcesz stworzyć stronę internetową? Z nami możesz zrobić to szybko
                  i efektywnie! Do każdego projektu podchodzimy indywidualnie, zwracając szczególną uwagę
                  na potrzeby Klienta. Oferujemy szybką, wstepną wycenę projektu!
                </p>
                <StyledCTA>
                  <ButtonLink to="/stronywww" round="5px" margin="30px 0px">
                    Stwórz swój pakiet
                  </ButtonLink>
                </StyledCTA>
              </CarouselCol>
            </Row>
          </Container>
        </CarouselItem>
        <CarouselItem>
          <Container>
            <Row>
              <Col md={6} style={{ order: 2, textAlign: 'end' }}>
                <StyledShape src={SocialMedia} alt="" />
              </Col>
              <CarouselCol md={6}>
                <CarouselBeforeHeading>
                  Profesjonalne
                </CarouselBeforeHeading>
                <h1> SOCIAL MEDIA </h1>
                <p>
                  Media społecznościowe to nowy, skuteczny  model
                  komunikacji firm oraz podejście do szeroko
                  rozumianej promocji w internecie.Obsługujemy
                  profile social media firm oraz prowadzimy
                  efektywną reklamę na Facebook, Instagram,
                  Twitter, YouTube.
                </p>
                <StyledCTA>
                  <ButtonLink to="/socialmedia" round="5px" margin="30px 0px">
                    Sprawdź
                  </ButtonLink>
                </StyledCTA>
              </CarouselCol>
            </Row>
          </Container>
        </CarouselItem>
        <CarouselItem>
          <Container>
            <Row>
              <Col md={6} style={{ order: 2, textAlign: 'end' }}>
                <StyledShape src={Ecommerce} alt="" />
              </Col>
              <CarouselCol md={6}>
                <CarouselBeforeHeading>
                  Skuteczne
                </CarouselBeforeHeading>
                <h1> SKLEPY INTERNETOWE </h1>
                <p>
                  Sklep online pozwoli Ci na sprzedaż swoich
                  produktów w intrenecie. Tworzymy indywidualne i nowoczesne sklepy
                  internetowe, dostosowane do urządzeń mobilnych i przeglądarek.
                </p>
                <StyledCTA>
                  <ButtonLink to="/stronywww" round="5px" margin="30px 0px">
                    Sprawdź
                  </ButtonLink>
                </StyledCTA>
              </CarouselCol>
            </Row>
          </Container>
        </CarouselItem>
      </Carousel>
      <Container>
        <Row style={{ margin: '50px 0px' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledH2>
              Działaj skutecznie w sieci z nami!
            </StyledH2>
          </Col>
          <Col>
            <p style={{ textAlign: 'center' }}>
              Oferujemy kompleksowe działania mające na celu zwiększenie widoczności
              Twojej firmy w internecie, przez skutecznie kampanie reklamowe
              w mediach społecznościowych, profesjonalne i szybkie strony oraz sklepy internetowe, a także
              przez tworzenie materiałów graficznych na potrzeby Twojej firmy.
            </p>
          </Col>
        </Row>
        <Row itemsMargin={30} style={{ margin: '20px 0 40px 0' }}>
          <Col md={6} lg={3}>
            <Card equal direction="column">
              <CardContent alignItems="flex-start" padding="25px">
                <CardIcon padding="20px 0px" width="50px">
                  <Desktop />
                </CardIcon>
                <CardTitle>Strony internetowe</CardTitle>
                <CardText>
                  Tworzymy wydajne i przyjemne dla oka strony internetowe,
                  które pozwolą na zwiększenie widoczności Twojej firmy w internecie.
                </CardText>
              </CardContent>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card equal direction="column">
              <CardContent alignItems="flex-start" padding="25px">
                <CardIcon padding="20px 0px" width="50px">
                  <Bag />
                </CardIcon>
                <CardTitle>Sklepy internetowe</CardTitle>
                <CardText>
                  Sklep online pozwoli Ci na sprzedaż swoich
                  produktów w intrenecie. Tworzymy indywidualne i nowoczesne sklepy
                  internetowe, dostosowane do urządzeń mobilnych i przeglądarek.
                </CardText>
              </CardContent>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card equal direction="column">
              <CardContent alignItems="flex-start" padding="25px">
                <CardIcon padding="20px 0px" width="50px">
                  <People />
                </CardIcon>
                <CardTitle>Socialmedia</CardTitle>
                <CardText>
                  Docieraj do większej ilości odbiorców dzięki profesjonalnie
                  prowadzonym socialmediom oraz kampaniom reklamowym.
                </CardText>
              </CardContent>
            </Card>
          </Col>
          <Col sm={6} lg={3}>
            <Card equal direction="column">
              <CardContent alignItems="flex-start" padding="25px">
                <CardIcon padding="20px 0px" width="50px">
                  <Gallery />
                </CardIcon>
                <CardTitle>Grafika</CardTitle>
                <CardText>
                  Stworzymy dla Ciebie profesjonalne projekty graficzne od wizytówek,
                  ulotek, katalogów po makiety strony internetowych.
                </CardText>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ margin: '50px 0px' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledH2>
              Profesjonalne strony internetowe!
            </StyledH2>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={12}>
                <StyledH3>
                  Przejżysty proces realizacji
                </StyledH3>
                <p>
                  Zajmujemy się tworzeniem stron internetowych od początku do końca.
                  Stworzymy dla Ciebie unikalny projekt oparty na systemie Wordpress lub stronę statyczną.
                </p>
              </Col>
            </Row>
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={12}>
                <StyledH3>
                  Optymalizacja SEO
                </StyledH3>
                <p>
                  Nasze stony sa zoptymalizowane pod kątem SEO.
                  Stworzymy dla Ciebie unikalny projekt oparty na systemie Wordpress lub stronę statyczną.
                </p>
              </Col>
            </Row>
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={12}>
                <StyledH3>
                  Responsywna budowa i zgodność z przeglądarkami
                </StyledH3>
                <p>
                  Nasze strony prawidłowo wyglądają i działałają zarówno w tradycyjnych przeglądarkach
                  typu desktop jak również na urządzeniach typu tablet oraz smartfon
                </p>
              </Col>
            </Row>
          </Col>
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
                      <Responsive />
                    </CardIcon>
                    <CardTitle>Responsywne</CardTitle>
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
                      <Efficiency />
                    </CardIcon>
                    <CardTitle>Wydajne</CardTitle>
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
                      <UniqueDesign />
                    </CardIcon>
                    <CardTitle>Unikalne</CardTitle>
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
                      <Web />
                    </CardIcon>
                    <CardTitle>Optymalizacja SEO</CardTitle>
                  </CardContent>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ margin: '50px 0' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledH2>
              Prowadzenie i kampanie socialmedia
            </StyledH2>
          </Col>
        </Row>
        <Row>
          <Col sm={4} className="mobile-order">
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
        <Row style={{ margin: '50px 0' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledH2>
              Sklepy internetowe
            </StyledH2>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={12}>
                <StyledH3>
                  Prosty w obsłudze system Woocommerce
                </StyledH3>
                <p>
                  WooCommerce to bardzo popularny system do obsługi sklepów internetowych.
                  Pozwala stworzyć bardzo rozbudowany sklep, pełny nowoczesnych i przydatnych funkcji.
                </p>
              </Col>
            </Row>
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={12}>
                <StyledH3>
                  Większa sprzedaż
                </StyledH3>
                <p>
                  Dużą zaletą e-sklepów tworzonych na platformie WooCommerce jest prostota.
                  Dzięki temu praktycznie każdy szybko i bez większego wysiłku jest w stanie
                  nauczyć się korzystania z niego.
                </p>
              </Col>
            </Row>
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={12}>
                <StyledH3>
                  Wiele sposobów płatności
                </StyledH3>
                <p>
                  Instalacja bramki płatności w sklepie WooCommerce zapewnia szybkie i
                  bezpiecznie płatności. Wprowadź w Twoim sklepie płatności online, które są standardem.
                  To kluczowy element powodzenia sklepu internetowego!
                </p>
              </Col>
            </Row>
          </Col>
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
                      <Responsive />
                    </CardIcon>
                    <CardTitle>Dostępność</CardTitle>
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
                      <Shop />
                    </CardIcon>
                    <CardTitle>Większa sprzedaż</CardTitle>
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
                      <Payments />
                    </CardIcon>
                    <CardTitle>Płatności</CardTitle>
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
                      <Easy />
                    </CardIcon>
                    <CardTitle>Łatwośc obsługi</CardTitle>
                  </CardContent>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* <Container>
      <Row style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
        <StyledH2>
          Zaufali nam
        </StyledH2>
      </Row>
      <Row style={{ marginBottom: '40px' }}>
        <Carousel
          items={5}
          autoplay
          transitionTime={1000}
          pauseTime={3000}
          padding={50}>
          <CarouselItem>
            <FontAwesomeIcon icon={faBehance} size={'4x'} color={'#536273'} />
          </CarouselItem>
          <CarouselItem>
            <FontAwesomeIcon icon={faAws} size={'4x'} color={'#536273'} />
          </CarouselItem>
          <CarouselItem>
            <FontAwesomeIcon icon={faBitcoin} size={'4x'} color={'#536273'} />
          </CarouselItem>
          <CarouselItem>
            <FontAwesomeIcon icon={faFacebookSquare} size={'4x'} color={'#536273'} />
          </CarouselItem>
          <CarouselItem>
            <FontAwesomeIcon icon={faCpanel} size={'4x'} color={'#536273'} />
          </CarouselItem>
          <CarouselItem>
            <FontAwesomeIcon icon={faApple} size={'4x'} color={'#536273'} />
          </CarouselItem>
          <CarouselItem>
            <FontAwesomeIcon icon={faAlipay} size={'4x'} color={'#536273'} />
          </CarouselItem>
        </Carousel>
      </Row>
    </Container> */}
      <Container>
        <Footer />
      </Container>
    </>);
};

export default IndexPage;
