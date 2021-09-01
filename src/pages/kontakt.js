import * as React from 'react';
import styled from 'styled-components';

import Shape from '../images/shape.svg';

import Button from '../components/Basic/Button';
import Layout from '../components/Layout/Layout';
import Col from '../components/Basic/Col';
import Row from '../components/Basic/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faFacebookSquare,
  faApple,
  faBehance,
  faBitcoin,
  faCpanel,
  faAws,
  faBootstrap,
  faEbay,
  faDiscord,
  faGitkraken,
  faHooli
} from '@fortawesome/free-brands-svg-icons';

import Carousel from '../components/Carousel/Carousel';
import CarouselItem from '../components/Carousel/CarouselItem/CarouselItem';


const Hero = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 20px;
  flex-direction: row;

  @media ${props => props.theme.media.fablet} {
    flex-direction: column;
  }

  @media ${props => props.theme.media.fablet} {
    padding: 30px 0px;
  }
`;

const HeroPart = styled.div`
  width: 50%;

  @media ${props => props.theme.media.fablet} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const StyledCTA = styled.div`
  display: block;
  padding: 20px 0px;
`;

const SocialIcons = styled.div`
  display: flex;
  font-size: 1.5rem;
`;

const SocialIcon = styled.a`
  padding: 5px;
  color: ${({ theme }) => theme.accentColor.primary};
  transition: all 0.3s ease-in-out;
  display: inline-block;
  margin: 0 15px 0 0;
  &:hover {
    color: ${({ theme }) => theme.accentColor.secondary};
  }
`;

const StyledShape = styled.img`
  margin-left: auto;
  width: 60%;
`;

const ContactPage = () => (
  <Layout>
    <Hero>
      <Carousel items={1} dots arrows>
        <CarouselItem>
          <HeroPart>
            <StyledShape src={Shape} alt="" />
          </HeroPart>
          <HeroPart>
            <p> Hi! I'm </p>
            <h1> TOM JONES </h1>
            <p> Typical promo text here </p>
            <StyledCTA>
              <Button round="5px" margin="30px 0px">
                Check Out
              </Button>
              <Button outlined round="5px" margin="30px 0px 30px 10px">
                Download
              </Button>
              <SocialIcons>
                <SocialIcon href="#" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </SocialIcon>
                <SocialIcon href="#" target="_blank">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </SocialIcon>
                <SocialIcon href="#" target="_blank">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </SocialIcon>
              </SocialIcons>
            </StyledCTA>
          </HeroPart>
        </CarouselItem>
        <CarouselItem>
          <HeroPart>
            <StyledShape src={Shape} alt="" />
          </HeroPart>
          <HeroPart>
            <p> Second Slide</p>
            <h1> BOB Bones </h1>
            <p> Typical promo text here </p>
            <StyledCTA>
              <Button round="5px" margin="30px 0px">
                Check Out
              </Button>
              <Button outlined round="5px" margin="30px 0px 30px 10px">
                Download
              </Button>
              <SocialIcons>
                <SocialIcon href="#" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </SocialIcon>
                <SocialIcon href="#" target="_blank">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </SocialIcon>
                <SocialIcon href="#" target="_blank">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </SocialIcon>
              </SocialIcons>
            </StyledCTA>
          </HeroPart>
        </CarouselItem>
      </Carousel>
    </Hero>
  </Layout>
);

export default ContactPage;
