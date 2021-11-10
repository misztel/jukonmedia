import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../Basic/Button';
import Row from '../Basic/Row';
import Col from '../Basic/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const PricingCard = styled.div`
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 4px 4px 8px rgb(39 39 62 / 12%);
  padding: 20px;

  height: ${({ left, right }) => left || right ? 'calc(100% - 20px)' : 'auto'};
  display: flex;
  flex-direction: column;
  justify-content: ${({ right }) => right ? 'space-between' : 'flex-start'};

  h3{
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;

    span{
      display: block;
      font-size: 14px;
      font-weight: 600;
    }
  }
  h4{
    font-weight: 500;
  }
`;

const PricingCardList = styled.ul`

`;

const PricingCardListItem = styled.li`
  width: 100%;
  display: flex;
  position: relative;
  text-align: left;
  align-items: center;
  padding: 0.3rem 0rem;
  justify-content: flex-start;
  text-decoration: none;
  color: ${({ mode, theme }) =>
    mode === 'secondary' ? theme.neutralColor.textSecondary : theme.neutralColor.textPrimary};
`;

const PricingCardListItemIcon = styled.div`
  min-width: 25px;
  flex-shrink: 0;
  color: ${({ mode, theme }) =>
    mode === 'secondary' ? theme.accentColor.primary : theme.accentColor.primary};
`;

const PricingCardListItemText = styled.div`
  font-size: 0.875rem;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 4px 10px;
  color: ${({ theme }) => theme.neutralColor.textPrimary};
`;

const FieldGroupSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: #E9E9E9;
`;

const FieldTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
`;

const SummaryRow = styled.div`
  margin: 10px 0px;
`;

const SummaryPrice = styled.span`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.neutralColor.textPrimary};
`;

const SummaryPriceGross = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.neutralColor.textPrimary};
`;

const RadioButtons = styled.div`

`;

const TextInput = styled.input.attrs({
  type: 'text'
})`
  border: 2px solid #EFEFEF;
  border-radius: 3px;
  padding: 3px 0px 3px 10px;
  font-size: 14px;
  width: 80px;
  margin: 5px 0px;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
  appearance: none;
}
`;

const RadioButtonsInput = styled.input.attrs({
  type: 'radio'
})`
  opacity: 0;
  position: fixed;
  width: 0;

  :checked + label {
    background-color: ${({ theme }) => theme.accentColor.primary};
    border-color: ${({ theme }) => theme.accentColor.primary};
    color: #fff;
  }

  :focus + label {
    box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.accentColor.primary};
  }
`;

const RadioButtonsLabel = styled.label`
  display: inline-block;
  background-color: #fff;
  padding: 5px 10px;
  font-weight: 500;
  font-size: 14px;
  margin: 10px 10px 10px 0px;
  border:  2px solid #EFEFEF;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover{
    background-color: ${({ theme }) => theme.accentColor.primary};
    color: #fff;
  }
`;

const PriceCalculator = () => {
  const [pageData, setPageData] = useState({
    pages: {
      value: 1,
      price: 80
    },
    wordpresscms: {
      value: false,
      price: 800
    },
    blog: {
      value: false,
      price: 300
    },
    designProject: {
      value: false,
      price: 800
    }
  });

  const [price, setPrice] = useState(1399);
  const [priceGross, setPriceGross] = useState(1399 + (1399 * 0.23));

  useEffect(() => {
    let basePrice = 1399;

    for (const property in pageData) {
      if (property === 'pages') {
        basePrice = basePrice + (pageData[property].value - 1) * pageData[property].price;
      }
      else {
        if (pageData[property].value === true) {
          basePrice = basePrice + pageData[property].price;
        }
      }
    }
    setPrice(basePrice);
    setPriceGross(basePrice + (basePrice * 0.23));

  }, [pageData]);

  const formPreventDefault = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const element = e.target.name;
    const updatedElement = pageData[element];

    if (element === 'pages') {
      updatedElement.value = Number(value) < 30 ? Number(value) : 29;
      setPageData({
        ...pageData,
        [e.target.name]: updatedElement
      });
    } else if (element === 'checkbox') {
      updatedElement.value = !updatedElement.value;
      setPageData({
        ...pageData,
        [e.target.name]: updatedElement
      });
    }
    else if (element === 'wordpresscms' || element === 'blog' || element === 'designProject') {
      updatedElement.value = !updatedElement.value;
      setPageData({
        ...pageData,
        [e.target.name]: updatedElement
      });
    }
  }

  return (
    <Row style={{ justifyContent: 'center', marginTop: '30px' }}>
      <Col md={4} style={{ zIndex: '1', marginTop: '20px' }}>
        <PricingCard left>
          <h3>
            Podstawowe fukcje <span> zawarte w każdym pakiecie</span>
          </h3>
          <PricingCardList>
            <PricingCardListItem>
              <PricingCardListItemIcon>
                <FontAwesomeIcon icon={faCheckCircle} />
              </PricingCardListItemIcon>
              <PricingCardListItemText>Zgłoszenie do wyszukiwarki Google</PricingCardListItemText>
            </PricingCardListItem>
            <PricingCardListItem>
              <PricingCardListItemIcon>
                <FontAwesomeIcon icon={faCheckCircle} />
              </PricingCardListItemIcon>
              <PricingCardListItemText>Dostosowanie do urządzeń mobilnych</PricingCardListItemText>
            </PricingCardListItem>
            <PricingCardListItem>
              <PricingCardListItemIcon>
                <FontAwesomeIcon icon={faCheckCircle} />
              </PricingCardListItemIcon>
              <PricingCardListItemText>Informacja o ciasteczkach</PricingCardListItemText>
            </PricingCardListItem>
            <PricingCardListItem>
              <PricingCardListItemIcon>
                <FontAwesomeIcon icon={faCheckCircle} />
              </PricingCardListItemIcon>
              <PricingCardListItemText>Połączenie z Google Analytics</PricingCardListItemText>
            </PricingCardListItem>
            <PricingCardListItem>
              <PricingCardListItemIcon>
                <FontAwesomeIcon icon={faCheckCircle} />
              </PricingCardListItemIcon>
              <PricingCardListItemText>Pomoc w wyborze hostingu</PricingCardListItemText>
            </PricingCardListItem>
          </PricingCardList>
          <PricingCardListItem>
            <PricingCardListItemIcon>
              <FontAwesomeIcon icon={faCheckCircle} />
            </PricingCardListItemIcon>
            <PricingCardListItemText>Pomoc w zakupie domeny</PricingCardListItemText>
          </PricingCardListItem>
          <PricingCardListItem>
            <PricingCardListItemIcon>
              <FontAwesomeIcon icon={faCheckCircle} />
            </PricingCardListItemIcon>
            <PricingCardListItemText>Uruchomienie strony</PricingCardListItemText>
          </PricingCardListItem>
        </PricingCard>
      </Col>
      <Col md={4} style={{ margin: '0 -40px', zIndex: '10' }}>
        <PricingCard>
          <h3>
            Wybierz funkcje
          </h3>
          <form onSubmit={formPreventDefault}>
            <FieldGroup>
              <FieldTitle>
                Liczba podstron:
              </FieldTitle>
              <TextInput pattern="[0-9]*" name='pages' value={pageData.pages.value} onChange={handleChange} />
            </FieldGroup>
            <FieldGroupSeparator />
            <FieldGroup>
              <FieldTitle> Moduł bloga: </FieldTitle>
              <RadioButtons>
                <RadioButtonsInput
                  type="radio"
                  id="blogNo"
                  name="blog"
                  value="false"
                  onChange={handleChange}
                  checked={pageData.blog.value === false}
                />
                <RadioButtonsLabel htmlFor="blogNo">Nie</RadioButtonsLabel>
                <RadioButtonsInput
                  type="radio"
                  id="blogYes"
                  name="blog"
                  value="true"
                  onChange={handleChange}
                  checked={pageData.blog.value === true}
                />
                <RadioButtonsLabel htmlFor="blogYes">Tak</RadioButtonsLabel>
              </RadioButtons>
            </FieldGroup>
            <FieldGroupSeparator />
            <FieldGroup>
              <FieldTitle> Sklep Internetowy: </FieldTitle>
              <RadioButtons>
                <RadioButtonsInput
                  type="radio"
                  id="wordpressNo"
                  name="wordpresscms"
                  value="false"
                  onChange={handleChange}
                  checked={pageData.wordpresscms.value === false}
                />
                <RadioButtonsLabel htmlFor="wordpressNo">Nie</RadioButtonsLabel>
                <RadioButtonsInput
                  type="radio"
                  id="wordpressYes"
                  name="wordpresscms"
                  value="true"
                  onChange={handleChange}
                  checked={pageData.wordpresscms.value === true}
                />
                <RadioButtonsLabel htmlFor="wordpressYes">Tak</RadioButtonsLabel>
              </RadioButtons>
            </FieldGroup>
            <FieldGroupSeparator />
            <FieldGroup>
              <FieldTitle style={{ marginTop: '7px' }}> Projekt graficzny: </FieldTitle>
              <RadioButtons>
                <RadioButtonsInput
                  type="radio"
                  id="designProjectNo"
                  name="designProject"
                  value="false"
                  onChange={handleChange}
                  checked={pageData.designProject.value === false}
                />
                <RadioButtonsLabel htmlFor="designProjectNo">Podstawowy</RadioButtonsLabel>
                <RadioButtonsInput
                  type="radio"
                  id="designProjectYes"
                  name="designProject"
                  value="true"
                  onChange={handleChange}
                  checked={pageData.designProject.value === true}
                />
                <RadioButtonsLabel htmlFor="designProjectYes">Personalizowany</RadioButtonsLabel>
              </RadioButtons>
            </FieldGroup>
          </form>
        </PricingCard>
      </Col>
      <Col md={4} style={{ zIndex: '1', marginTop: '20px' }}>
        <PricingCard style={{ paddingLeft: '30px' }} right>
          <div>
            <h3>
              Twój pakiet
            </h3>
            <h4>Wybrane funkcje:</h4>
            <PricingCardList>
              <PricingCardListItem>
                <PricingCardListItemIcon>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </PricingCardListItemIcon>
                <PricingCardListItemText> Liczba stron: {pageData.pages.value} </PricingCardListItemText>
              </PricingCardListItem>

              {pageData.blog.value === true &&
                <PricingCardListItem>
                  <PricingCardListItemIcon>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </PricingCardListItemIcon>
                  <PricingCardListItemText> Moduł Bloga </PricingCardListItemText>
                </PricingCardListItem>
              }

              {pageData.wordpresscms.value === true &&
                <PricingCardListItem>
                  <PricingCardListItemIcon>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </PricingCardListItemIcon>
                  <PricingCardListItemText> Sklep Internetowy</PricingCardListItemText>
                </PricingCardListItem>
              }
              <PricingCardListItem>
                <PricingCardListItemIcon>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </PricingCardListItemIcon>
                <PricingCardListItemText>{pageData.designProject.value === true ? 'Personalizowany' : 'Podstawowy'}  projekt graficzny </PricingCardListItemText>
              </PricingCardListItem>
            </PricingCardList>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h4>Już od:</h4>
            <SummaryRow>
              <SummaryPrice>{price.toFixed(2)} zł <span style={{ fontSize: '14px', fontWeight: '400' }}>netto</span></SummaryPrice>
            </SummaryRow>
            <div>
              <SummaryPriceGross>{priceGross.toFixed(2)} zł brutto</SummaryPriceGross>
            </div>
            <div>
              <Button round="5px" margin="15px 0px" fontSize="12px">
                ZADZWOŃ 696 476 519
              </Button>
            </div>
          </div>
        </PricingCard>
      </Col>
    </Row>
  );
};

export default PriceCalculator;
