import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  width: 100vw;
  max-width: 650px;
`
const ProductLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  background-color: white !important;
  border: 3px solid #1d91fd !important;
  border-top-left-radius: 7px;
  border-bottom-width: 0px !important;
  text-decoration: none;
  text-align: center;
  width: 100%;
  height: 250px;
  padding-bottom: 5px;
  padding-top: 5px;

  & > img
  {
    max-width: 85% !important;
    height: 65% !important;
  }
`
const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  padding-bottom: 3px;
  padding-top: 3px;
  width: 100% !important;
  background-color: #1d91fd !important;
  border: 3px solid #1d91fd !important;
  border-bottom-right-radius: 7px;
`

export {
  ListContainer,
  ProductLink,
  PriceContainer
}