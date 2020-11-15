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
const SearchBar = styled(InputBase)`
  background-color: #FFFFFF44;
  width: 50%;
  border-radius: 5px;
  padding: 5px;
  padding-left: 10px;
`

export {
  RootHeader,
  SearchBar
}