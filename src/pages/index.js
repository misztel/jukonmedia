import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

import Shape from '../images/shape.svg';

import Button from '../components/Basic/Button';
import Layout from '../components/Layout/Layout';

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 20px;
  flex-direction: row;

  @media ${props => props.theme.media.fablet} {
    flex-direction: column;
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
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease-in-out;
  display: inline-block;
  margin: 0 15px 0 0;
  &:hover{
    color: ${({ theme }) => theme.primary};
  }
`;

const StyledShape = styled.img`
  margin-left: auto;
  width: 60%;
`;

const IndexPage = () => (
  <Layout>
    <Hero>
      <HeroPart>
        <StyledShape src={Shape} alt="" />
      </HeroPart>
      <HeroPart>
        <p> Hi! I'm </p>
        <h1> TOM JONES </h1>
        <p> Typical promo text here </p>
        <StyledCTA>
          <Button round="5px" margin="30px 0px">Check Out</Button>
          <Button round="5px" margin="30px 0px 30px 10px">Download</Button>
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
    </Hero>
  </Layout>
);

export default IndexPage;
