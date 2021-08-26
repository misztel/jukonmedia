import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

import Shape from '../images/shape.svg';

import Button from '../components/Basic/Button';
import Layout from '../components/Layout/Layout';
import Col from '../components/Basic/Col';
import Row from '../components/Basic/Row';
import { Card, CardTitle, CardText, CardIcon } from '../components/Basic/Card';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '../components/Basic/List';
import Tabs from '../components/Basic/Tabs/Tabs';
import Tab from '../components/Basic/Tabs/Tab/Tab';
import Accordion from '../components/Basic/Accordion/Accordion';
import AccordionItem from '../components/Basic/Accordion/AccordionItem/AccordionItem';
import ExampleForm from '../components/Form/ExampleForm';
import ExampleFormStyle2 from '../components/Form/FormStyle2/ExampleFormStyle2';
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
  color: ${({ theme }) => theme.primaryColor};
  transition: all 0.3s ease-in-out;
  display: inline-block;
  margin: 0 15px 0 0;
  &:hover {
    color: ${({ theme }) => theme.primaryText};
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
          <Button round="5px" margin="30px 0px">
            Check Out
          </Button>
          <Button variant="outline" round="5px" margin="30px 0px 30px 10px">
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
    </Hero>
    <Row>
      <h2>Cards</h2>
    </Row>
    <Row>
      <Col sm={6}>
        <Card>
          <CardIcon>
            <FontAwesomeIcon icon={faGithub} size={'2x'} />
          </CardIcon>
          <CardTitle>Title</CardTitle>
          <CardText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            ullam eligendi tempora eos suscipit nam?
          </CardText>
        </Card>
      </Col>
      <Col sm={2}>
        <Card>
          <CardIcon>
            <FontAwesomeIcon icon={faFacebookSquare} size={'2x'} />
          </CardIcon>
          <CardTitle>Title</CardTitle>
          <CardText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            ullam eligendi tempora eos suscipit nam?
          </CardText>
        </Card>
      </Col>
      <Col sm={4}>
        <Card>
          <CardIcon>
            <FontAwesomeIcon icon={faGithub} size={'2x'} />
          </CardIcon>
          <CardTitle>Title</CardTitle>
          <CardText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            ullam eligendi tempora eos suscipit nam?
          </CardText>
        </Card>
      </Col>
      <Col sm={12}>
        <Card>
          <CardIcon>
            <FontAwesomeIcon icon={faFacebookSquare} size={'2x'} />
          </CardIcon>
          <CardTitle>Title</CardTitle>
          <CardText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            ullam eligendi tempora eos suscipit nam?
          </CardText>
        </Card>
      </Col>
    </Row>
    <Row>
      <h2>Buttons</h2>
    </Row>
    <Row>
      <Col>
        <Button color="primary" round="5px" margin="30px 0px 30px 10px">
          Primary
        </Button>
        <Button color="secondary" round="5px" margin="30px 0px 30px 10px">
          Secondary
        </Button>
        <Button color="danger" round="5px" margin="30px 0px 30px 10px">
          Danger
        </Button>
      </Col>
      <Col>
        <Button
          disabled
          color="primary"
          round="5px"
          margin="30px 0px 30px 10px"
        >
          Primary
        </Button>
        <Button
          disabled
          color="secondary"
          round="5px"
          margin="30px 0px 30px 10px"
        >
          Secondary
        </Button>
        <Button disabled color="danger" round="5px" margin="30px 0px 30px 10px">
          Danger
        </Button>
      </Col>
      <Col>
        <Button
          color="primary"
          variant="outline"
          round="5px"
          margin="30px 0px 30px 10px"
        >
          Primary
        </Button>
        <Button
          color="secondary"
          variant="outline"
          round="5px"
          margin="30px 0px 30px 10px"
        >
          Secondary
        </Button>
        <Button
          color="danger"
          variant="outline"
          round="5px"
          margin="30px 0px 30px 10px"
        >
          Danger
        </Button>
      </Col>
      <Col>
        <Button
          disabled
          color="primary"
          variant="outline"
          round="5px"
          margin="30px 0px 30px 10px"
        >
          Primary
        </Button>
        <Button
          disabled
          color="secondary"
          variant="outline"
          round="5px"
          margin="30px 0px 30px 10px"
        >
          Secondary
        </Button>
        <Button
          disabled
          color="danger"
          variant="outline"
          round="5px"
          margin="30px 0px 30px 10px"
        >
          Danger
        </Button>
      </Col>
    </Row>
    <Row>
      <h2>List</h2>
    </Row>
    <Row>
      <Col md={4}>
        <h3>List One</h3>
        <List>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
        </List>
      </Col>
      <Col md={4}>
        <h3>List Two</h3>
        <List>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
        </List>
      </Col>
      <Col md={4}>
        <h3>List Three</h3>
        <List>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faCheck} />
            </ListItemIcon>
            <ListItemText>First Item</ListItemText>
          </ListItem>
        </List>
      </Col>
    </Row>
    <Row>
      <h2>Tabs</h2>
    </Row>
    <Row>
      <Tabs>
        <Tab title="Tab One">
          <Row>
            <Col sm={6}>
              <Card>
                <CardIcon>
                  <FontAwesomeIcon icon={faGithub} size={'2x'} />
                </CardIcon>
                <CardTitle>Title</CardTitle>
                <CardText>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, ullam eligendi tempora eos suscipit nam?
                </CardText>
              </Card>
            </Col>
            <Col sm={6}>
              <Card>
                <CardIcon>
                  <FontAwesomeIcon icon={faGithub} size={'2x'} />
                </CardIcon>
                <CardTitle>Title</CardTitle>
                <CardText>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, ullam eligendi tempora eos suscipit nam?
                </CardText>
              </Card>
            </Col>
          </Row>
        </Tab>
        <Tab title="Tab Two">
          <Row>
            <Col sm={12}>
              <Card>
                <CardIcon>
                  <FontAwesomeIcon icon={faGithub} size={'2x'} />
                </CardIcon>
                <CardTitle>Title</CardTitle>
                <CardText>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, ullam eligendi tempora eos suscipit nam?
                </CardText>
              </Card>
            </Col>
          </Row>
        </Tab>
        <Tab title="Tab Three">
          <Row>
            <Col sm={3}>
              <Card>
                <CardIcon>
                  <FontAwesomeIcon icon={faGithub} size={'2x'} />
                </CardIcon>
                <CardTitle>Title</CardTitle>
                <CardText>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, ullam eligendi tempora eos suscipit nam?
                </CardText>
              </Card>
            </Col>
            <Col sm={3}>
              <Card>
                <CardIcon>
                  <FontAwesomeIcon icon={faGithub} size={'2x'} />
                </CardIcon>
                <CardTitle>Title</CardTitle>
                <CardText>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, ullam eligendi tempora eos suscipit nam?
                </CardText>
              </Card>
            </Col>
            <Col sm={3}>
              <Card>
                <CardIcon>
                  <FontAwesomeIcon icon={faGithub} size={'2x'} />
                </CardIcon>
                <CardTitle>Title</CardTitle>
                <CardText>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, ullam eligendi tempora eos suscipit nam?
                </CardText>
              </Card>
            </Col>
            <Col sm={3}>
              <Card>
                <CardIcon>
                  <FontAwesomeIcon icon={faGithub} size={'2x'} />
                </CardIcon>
                <CardTitle>Title</CardTitle>
                <CardText>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, ullam eligendi tempora eos suscipit nam?
                </CardText>
              </Card>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Row>
    <Row>
      <h2>Accorion</h2>
    </Row>
    <Row>
      <Accordion>
        <AccordionItem title="Accordion First">
          <List>
            <ListItem mode="secondary">
              <ListItemIcon mode="secondary">
                <FontAwesomeIcon icon={faCircle} />
              </ListItemIcon>
              <ListItemText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItemText>
            </ListItem>
            <ListItem mode="secondary">
              <ListItemIcon mode="secondary">
                <FontAwesomeIcon icon={faCircle} />
              </ListItemIcon>
              <ListItemText>
                Et iure saepe dolorem numquam distinctio suscipit quidem amet
                impedit eligendi aliquid quaerat, nihil, maxime minus. Possimus
                dolorem voluptate similique odit animi! Et iure saepe dolorem
                numquam distinctio suscipit quidem amet impedit eligendi aliquid
                quaerat, nihil, maxime minus. Possimus dolorem voluptate
                similique odit animi!
              </ListItemText>
            </ListItem>
            <ListItem mode="secondary">
              <ListItemIcon mode="secondary">
                <FontAwesomeIcon icon={faCircle} />
              </ListItemIcon>
              <ListItemText>
                Et iure saepe dolorem numquam distinctio suscipit quidem amet
                impedit eligendi aliquid quaerat, nihil, maxime minus. Possimus
                dolorem voluptate similique odit animi!
              </ListItemText>
            </ListItem>
          </List>
        </AccordionItem>
        <AccordionItem title="Accordion Second">
          <Row>
            <Col sm={4}>
              <Card>
                <CardIcon>
                  <FontAwesomeIcon icon={faGithub} size={'2x'} />
                </CardIcon>
                <CardTitle>Title</CardTitle>
                <CardText>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, ullam eligendi tempora eos suscipit nam?
                </CardText>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <CardIcon>
                  <FontAwesomeIcon icon={faFacebookSquare} size={'2x'} />
                </CardIcon>
                <CardTitle>Title</CardTitle>
                <CardText>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, ullam eligendi tempora eos suscipit nam?
                </CardText>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <CardIcon>
                  <FontAwesomeIcon icon={faFacebookSquare} size={'2x'} />
                </CardIcon>
                <CardTitle>Title</CardTitle>
                <CardText>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, ullam eligendi tempora eos suscipit nam?
                </CardText>
              </Card>
            </Col>
          </Row>
        </AccordionItem>
        <AccordionItem title="Accordion Third">
          Illum nemo quasi, quas quia perferendis consequuntur repellendus
          cupiditate, modi quod architecto soluta voluptate. Ex dignissimos
          facere natus a iusto doloremque odit. Illum nemo quasi, quas quia
          perferendis consequuntur repellendus cupiditate, modi quod architecto
          soluta voluptate. Ex dignissimos facere natus a iusto doloremque odit.
          Illum nemo quasi, quas quia perferendis consequuntur repellendus
          cupiditate, modi quod architecto soluta voluptate. Ex dignissimos
          facere natus a iusto doloremque odit.
        </AccordionItem>
      </Accordion>
    </Row>
    <Row>
      <h2>Form</h2>
    </Row>
    <Row>
      <Col sm={4}>
        <ExampleForm />
      </Col>
      <Col sm={4}>
        <ExampleFormStyle2 />
      </Col>
    </Row>
    <Row>
      <h2>Carousel</h2>
    </Row>
    <Row>
      <Carousel items={3}>
        <CarouselItem color="violet"> Item 1 </CarouselItem>
        <CarouselItem color="aqua"> Item 2 </CarouselItem>
        <CarouselItem color="greenyellow"> Item 3 </CarouselItem>
        <CarouselItem color="blue"> Item 4 </CarouselItem>
        <CarouselItem color="lime"> Item 5 </CarouselItem>
        <CarouselItem color="purple"> Item 6 </CarouselItem>
        <CarouselItem color="grey"> Item 7 </CarouselItem>
      </Carousel>
    </Row>
    <Row>
      <h2>Slider</h2>
    </Row>
    <Row>
      <Col sm={4}>
        <p>Slider</p>
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;
