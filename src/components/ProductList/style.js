import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  max-width: 650px;
`
const ProductLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white !important;
  border: 1px solid darkgrey !important;
  border-radius: 5px;
  text-decoration: none;
  width: 100%;
  height: 250px;
`

export {
  ListContainer,
  ProductLink,
}