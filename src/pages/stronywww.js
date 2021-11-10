import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';

import Stronywww from '../images/stronywww.svg';
import PortfolioOne from '../images/mockuptogethersecond.png';


import ButtonLink from '../components/Basic/ButtonLink';
import Col from '../components/Basic/Col';
import Row from '../components/Basic/Row';
import Container from '../components/Basic/Container';
import { Card, CardTitle, CardContent, CardText, CardIcon } from '../components/Basic/Card';

import Footer from '../components/Layout/Footer';
import Seo from '../components/seo';
import { StyledH2 } from '../components/Basic/Headings';

import Desktop from '../images/icons/Desktop.js';
import UniqueDesign from '../images/icons/UniqueDesign.js';
import SeoIcon from '../images/icons/Seo';

import Bag from '../images/icons/Bag.js';
import Campagain from '../images/icons/Campagain.js';
import Payments from '../images/icons/Payments';

import PriceCalculator from '../components/PriceCalculator/PriceCalculator';

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

const WebsitesPage = (props) => (
  <>
    <Seo title="JukonMedia.pl - Strony WWW" />
    <Container>
      <Row style={{ padding: '30px 0', alignItems: 'center' }}>
        <Col md={6} style={{ order: 2, textAlign: 'end' }}>
          <StyledShape src={Stronywww} alt="" />
        </Col>
        <CarouselCol md={6}>
          <CarouselBeforeHeading> Projektowanie i tworzenie </CarouselBeforeHeading>
          <h1> STRON INTERNETOWYCH </h1>
          <p>
            Zwiększ widoczność swojej firmy w internecie dzięki nowoczesnej i unikalnej stronie internetowej.
            Dopasowana do Twoich wymagań, responsywna i zoptymalizowana strona internetowa czeka na Ciebie!
          </p>
        </CarouselCol>
      </Row>
    </Container>
    <Container>
      <Row style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <StyledH2>Stwórz swój pakiet</StyledH2>
      </Row>
      <PriceCalculator />
    </Container>
    <Container>
      <Row>
        <Col>
          <p style={{ fontSize: '12px', marginTop: '20px', textAlign: 'center' }}>
            Powyższy konfigurator prezentuje cenę orientacyjną i nie stanowi oferty.
          </p>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row style={{ marginTop: '40px', marginBottom: '40px' }}>
        <Col sm={5}>
          <div style={{ padding: '50px 0' }}>
            <StyledH2>Co cechuje nasze strony?</StyledH2>
            <p>
              Decydując się na stronę wykonaną przez nas, masz pewność że strona będzie spełniać wszystkie najnowsze standardy.
              Nasze strony sa szybkie, przejżyste, posiadają unikalny wygląd, są zoptymalizowane pod wyszukiwarki internetowe.
              Twoja strona będzie dostępna na każdym typie urządzeń od telefonu i tabletu po komputer stacjonarny.
            </p>
          </div>
        </Col>
        <Col sm={7}>
          <Row itemsMargin={30} style={{ margin: '40px 0' }}>
            <Col md={6}>
              <Card equal direction="column">
                <CardContent alignItems="flex-start" padding="25px">
                  <CardIcon padding="20px 0px" width="50px">
                    <FontAwesomeIcon icon={faWordpress} size="3x" />
                  </CardIcon>
                  <CardTitle>
                    CMS Wordpress
                  </CardTitle>
                  <CardText>
                    Łatwość zarządzania i edycji treści na stronie dzięki popularnemu systemowi CMS Wordpress.
                  </CardText>
                </CardContent>
              </Card>
            </Col>
            <Col md={6}>
              <Card equal direction="column">
                <CardContent alignItems="flex-start" padding="25px">
                  <CardIcon padding="20px 0px" width="50px">
                    <Desktop />
                  </CardIcon>
                  <CardTitle>
                    Responsywna strona
                  </CardTitle>
                  <CardText>
                    Twoja strona będzie się świetnie prezentować niezależnie od urządzenia na jakim zostanie uruchomiona.
                  </CardText>
                </CardContent>
              </Card>
            </Col>
            <Col md={6}>
              <Card equal direction="column">
                <CardContent alignItems="flex-start" padding="25px">
                  <CardIcon padding="20px 0px" width="50px">
                    <SeoIcon />
                  </CardIcon>
                  <CardTitle>
                    Optymalizacja SEO
                  </CardTitle>
                  <CardText>
                    Bądź widoczny w wyszukiwarkach internetowych poprzez dostosowaną do ich wymogów stronę WWW.
                  </CardText>
                </CardContent>
              </Card>
            </Col>
            <Col md={6}>
              <Card equal direction="column">
                <CardContent alignItems="flex-start" padding="25px">
                  <CardIcon padding="20px 0px" width="50px">
                    <UniqueDesign />
                  </CardIcon>
                  <CardTitle>
                    Unikalny projekt
                  </CardTitle>
                  <CardText>
                    Strona zostanie zaprojektowana według Twoich potrzeb wraz z unikalnym i nowoczesnym wyglądem.
                  </CardText>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row style={{ marginTop: '40px', marginBottom: '40px' }}>
        <Col sm={7} className="mobile-order">
          <Row itemsMargin={30} style={{ margin: '40px 0' }}>
            <Col md={6}>
              <Card equal direction="column">
                <CardContent alignItems="flex-start" padding="25px">
                  <CardIcon padding="20px 0px" width="50px">
                    <Bag />
                  </CardIcon>
                  <CardTitle>
                    Woocommerce
                  </CardTitle>
                  <CardText>
                    Intuicyjne zarządzania sklepem dzięki jednemu z najpopularniejszych systemów sprzedaży.
                  </CardText>
                </CardContent>
              </Card>
            </Col>
            <Col md={6}>
              <Card equal direction="column">
                <CardContent alignItems="flex-start" padding="25px">
                  <CardIcon padding="20px 0px" width="50px">
                    <Payments />
                  </CardIcon>
                  <CardTitle>
                    Płatności
                  </CardTitle>
                  <CardText>
                    Wyposażymy Twój sklep we wszystkie wymagane sposoby płatności.
                  </CardText>
                </CardContent>
              </Card>
            </Col>
            <Col md={6}>
              <Card equal direction="column">
                <CardContent alignItems="flex-start" padding="25px">
                  <CardIcon padding="20px 0px" width="50px">
                    <Campagain />
                  </CardIcon>
                  <CardTitle>
                    Remarketing
                  </CardTitle>
                  <CardText>
                    Możliwość połączenia sklepu z popularnymi narzędziemi do remarketingu pozwoli na dotarcie do większej ilości klientów.
                  </CardText>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col sm={5}>
          <div style={{ padding: '50px 0' }}>
            <StyledH2>Potrzebujesz sklepu internetowego?</StyledH2>
            <p>
              Stworzymy dla Ciebie sklep który pozwoli na łatwe zarządzanie sprzedażą dzięki systemowi
              Woocommerce. Dostosujemy Twój sklep do rodzaju sprzedawanego towaru, stworzymy punkty płatności,
              wdrożymy narzędzia do remarketingu.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row style={{ alignItems: 'center' }}>
        <Col md={6}>
          <div style={{ padding: '50px 0' }}>
            <StyledH2>Zobacz nasze realizacje!</StyledH2>
            <p>
              Do każdego projektu podchodzimy indywidualnie, jesli jeszcze się
              nie zdecydowałes sprawdź nasze ostatnie ralizacje.
            </p>
            <StyledCTA>
              <ButtonLink to="/realizacje" round="5px" margin="30px 0px">
                Realizacje
              </ButtonLink>
            </StyledCTA>
          </div>
        </Col>
        <Col md={6}>
          <img src={PortfolioOne} alt="" />
        </Col>
      </Row>
    </Container>
    {/* <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>Właściwości</h2>
      </Row>
      <Row style={{ marginTop: '40px', marginBottom: '40px' }}>
        <Col md={3}>
          <Card>
            <CardContent>
              <CardIcon>
                <FontAwesomeIcon icon={faHooli} />
              </CardIcon>
              <CardTitle>
                Box Ab
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </CardText>
            </CardContent>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <CardContent>
              <CardIcon>
                <FontAwesomeIcon icon={faMobileAlt} />
              </CardIcon>
              <CardTitle>
                Box Ju
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </CardText>
            </CardContent>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <CardContent>
              <CardIcon>
                <FontAwesomeIcon icon={faQrcode} />
              </CardIcon>
              <CardTitle>
                Box Ui
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </CardText>
            </CardContent>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <CardContent>
              <CardIcon>
                <FontAwesomeIcon icon={faMobileAlt} />
              </CardIcon>
              <CardTitle>
                Box Gu
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </CardText>
            </CardContent>
          </Card>
        </Col>
      </Row> */}
    {/* <Row style={{ marginTop: '80px', marginBottom: '80px' }}>
        <Col sm={7}>
          <div style={{ padding: '30px 0' }}>
            <div style={{ marginBottom: '30px' }}>
              <h2>Pakiety</h2>
              <p>Stron Internetowych</p>
            </div>
            <Accordion>
              <AccordionItem title="Pakiet Basic">
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Projektowanie i tworzenie stron internetowych</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Profesjonalna i unikalna szata graficzna</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Nowoczesna i responsywna budowa</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Instalacja na hostingu</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Możliwość dodawania galerii zdjęć do treści podstron</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Formularz kontaktowy</ListItemText>
                  </ListItem>
                </List>
              </AccordionItem>
              <AccordionItem title="Pakiet Silver">
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Projektowanie i tworzenie stron internetowych</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Profesjonalna i unikalna szata graficzna</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Nowoczesna i responsywna budowa</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Instalacja na hostingu</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Możliwość dodawania galerii zdjęć do treści podstron</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Formularz kontaktowy</ListItemText>
                  </ListItem>
                </List>
              </AccordionItem>
              <AccordionItem title="Pakiet Gold">
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Projektowanie i tworzenie stron internetowych</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Profesjonalna i unikalna szata graficzna</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Nowoczesna i responsywna budowa</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Instalacja na hostingu</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Możliwość dodawania galerii zdjęć do treści podstron</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faCircle} />
                    </ListItemIcon>
                    <ListItemText>Formularz kontaktowy</ListItemText>
                  </ListItem>
                </List>
              </AccordionItem>
            </Accordion>
          </div>
        </Col>
        <Col sm={5} style={{ textAlign: 'center' }}>
          <StyledMobile src={SinglePhone} alt="" />
        </Col>
      </Row> */}
    <Container>
      <Footer />
    </Container>
  </>
);

export default WebsitesPage;
