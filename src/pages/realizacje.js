import * as React from 'react';
import styled from 'styled-components';

import Realizations from '../images/realizacje.svg';

import Col from '../components/Basic/Col';
import Row from '../components/Basic/Row';
import Container from '../components/Basic/Container';
import Tabs from '../components/Basic/Tabs/Tabs';
import Tab from '../components/Basic/Tabs/Tab/Tab';
import Footer from '../components/Layout/Footer';
import { StyledH2 } from '../components/Basic/Headings';

import PortfolioOne from '../images/portfolio.jpg';
import PortfolioTwo from '../images/realizacjabiurorachunkowe.jpg';
import PortfolioThree from '../images/realizacjaelemoto.jpg';
import PortfolioFour from '../images/realizacjatruckslog.jpg';
import GraphicOne from '../images/trucksrealization.jpg';
import GraphicTwo from '../images/serwalrealizacja.jpg';
import GraphicThree from '../images/farmerpaper.jpg';
import GraphicFour from '../images/restrealization.jpg';
import GraphicFive from '../images/booksrealizacje.jpg';
import Seo from '../components/seo';

import Web from '../images/icons/Web.js';
import UniqueDesign from '../images/icons/UniqueDesign.js';

const StyledShape = styled.img`
  margin-left: auto;
  width: 80%;
  display: none;

  @media ${props => props.theme.media.fablet} {
    display: block;
  }
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

const Realization = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 4px 4px 8px rgb(39 39 62 / 12%);
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
  margin-bottom: 30px;
  overflow: hidden;
  position: relative;
  transition: all ease-in-out 0.3s;
  width: 100%;


  &:hover{
    img{
      transform: scale(1.1);
    }
  }

  @media ${props => props.theme.media.tablet} {
    flex-direction: row;
  }
`;

const RealizationImage = styled.div`
  height: auto;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16/9;

  img{
    height: auto;
    transition: .5s all;
    width: 100%;
  }
`;

const RealizationContent = styled.div`
  position: absolute;
  content:"";
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  background-color: rgba(0,0,0,.6);
  opacity: 0;
  z-index: 100;
  transition: all .3s ease-in-out;

  ${Realization}:hover & {
    opacity: 1;
  }
`;

const RealizationTitle = styled.h3`
  margin-bottom: 15px;
  padding-left: 18px;
  position: relative;
  color: white;

  :before{
    color: ${({ theme }) => theme.accentColor.primary};
    content: "/";
    font-weight: 700;
    left: 0px;
    position: absolute;
    top: 0px;
  }
`;

const RealizationUrl = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  transition: all 0.3s ease-in-out;

  svg{
    width: 20px;
    margin-right: 6px;
  }
`;

const RealizationCategory = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.accentColor.primary};

  svg{
    width: 20px;
    margin-right: 6px;
  }
`;

const RealizationsPage = (props) => (
  <>
    <Seo title="JukonMedia.pl - Realizacje" />
    <Container>
      <Row style={{ padding: '30px 0', alignItems: 'center' }}>
        <Col md={6} style={{ order: 2, textAlign: 'end' }}>
          <StyledShape src={Realizations} alt="" />
        </Col>
        <Col md={6}>
          <CarouselBeforeHeading>
            Zobacz
          </CarouselBeforeHeading>
          <h1>NASZE REALIZACJE </h1>
          <p>
            Sprawdź zaprojektowane przez nas strony internetowe Wordpress,
            sklepy WooCommerce a także nasze projekty graficzne i profile
            mediów społecznościowych o które dbamy!
          </p>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col md={12}>
          <StyledH2>Wybrane projekty</StyledH2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Realization>
            <RealizationImage>
              <img src={PortfolioOne} alt="" />
            </RealizationImage>
            <RealizationContent>
              <RealizationTitle>
                F.H.U VTX Geometria 3D
              </RealizationTitle>
              <RealizationUrl href='https://geometriavtx.pl/' target='_blank'>
                <Web /> geometriavtx.pl
              </RealizationUrl>
            </RealizationContent>
          </Realization>
        </Col>
        <Col md={4}>
          <Realization>
            <RealizationContent>
              <RealizationTitle>
                Truckslog
              </RealizationTitle>
              <RealizationUrl href='https://truckslog.pl/' target='_blank'>
                <Web /> truckslog.pl
              </RealizationUrl>
            </RealizationContent>
            <RealizationImage>
              <img src={PortfolioFour} alt="" />
            </RealizationImage>
          </Realization>
        </Col>
        <Col md={4}>
          <Realization>
            <RealizationImage>
              <img src={PortfolioThree} alt="" />
            </RealizationImage>
            <RealizationContent>
              <RealizationTitle>
                Elemoto
              </RealizationTitle>
              <RealizationUrl href='https://elemoto.pl/' target='_blank'>
                <Web /> elemoto.pl
              </RealizationUrl>
            </RealizationContent>
          </Realization>
        </Col>
        <Col md={4}>
          <Realization>
            <RealizationContent>
              <RealizationTitle>
                Biuro Rachunkowe BMJG
              </RealizationTitle>
              <RealizationUrl href='https://biurobmjg.pl/' target='_blank'>
                <Web /> biurobmjg.pl
              </RealizationUrl>
            </RealizationContent>
            <RealizationImage>
              <img src={PortfolioTwo} alt="" />
            </RealizationImage>
          </Realization>
        </Col>
        <Col md={4}>
          <Realization>
            <RealizationImage>
              <img src={GraphicOne} alt="" />
            </RealizationImage>
            <RealizationContent>
              <RealizationTitle>
                Magazyn Ciężarówki
              </RealizationTitle>
              <RealizationCategory>
                <UniqueDesign /> Katalog
              </RealizationCategory>
            </RealizationContent>
          </Realization>
        </Col>
        <Col md={4}>
          <Realization>
            <RealizationContent>
              <RealizationTitle>
                Serwal
              </RealizationTitle>
              <RealizationCategory>
                <UniqueDesign /> Katalog Produktów
              </RealizationCategory>
            </RealizationContent>
            <RealizationImage>
              <img src={GraphicTwo} alt="" />
            </RealizationImage>
          </Realization>
        </Col>
        <Col md={4}>
          <Realization>
            <RealizationImage>
              <img src={GraphicThree} alt="" />
            </RealizationImage>
            <RealizationContent>
              <RealizationTitle>
                Farmer Roku
              </RealizationTitle>
              <RealizationCategory>
                <UniqueDesign /> Okładka
              </RealizationCategory>
            </RealizationContent>
          </Realization>
        </Col>
        <Col md={4}>
          <Realization>
            <RealizationImage>
              <img src={GraphicFour} alt="" />
            </RealizationImage>
            <RealizationContent>
              <RealizationTitle>
                Różne
              </RealizationTitle>
              <RealizationCategory>
                <UniqueDesign /> Ulotka
              </RealizationCategory>
            </RealizationContent>
          </Realization>
        </Col>
        <Col md={4}>
          <Realization>
            <RealizationImage>
              <img src={GraphicFive} alt="" />
            </RealizationImage>
            <RealizationContent>
              <RealizationTitle>
                Książki
              </RealizationTitle>
              <RealizationCategory>
                <UniqueDesign /> Okładki
              </RealizationCategory>
            </RealizationContent>
          </Realization>
        </Col>
      </Row>
    </Container>
    <Container>
      <Footer />
    </Container>
  </>
);

export default RealizationsPage;
