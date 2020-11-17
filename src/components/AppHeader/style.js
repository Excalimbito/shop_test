import styled from 'styled-components';
import { InputBase } from '@material-ui/core';

const RootHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 15px;
  background-color: #f9813a;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 650px !important;
    width: 100%;
    height: 100%;
  }
`
const SearchContainer = styled.div`
  background-color: #FFFFFF44;
  border-radius: 5px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SearchBar = styled(InputBase)`
  padding: 5px;
  padding-left: 10px;
`

export {
  RootHeader,
  SearchContainer,
  SearchBar
}