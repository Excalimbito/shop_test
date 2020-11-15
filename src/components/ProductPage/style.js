import styled from 'styled-components';
import { Button } from '@material-ui/core';

const PageContainer = styled.div`
  max-width: 650px;
  width: 100vw;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 1px solid  #f9813a;
  border-radius: 7px;
`
const InfoContainer = styled.div`
  padding: 15px;
  border-bottom: 1px solid #f9813a;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;

  & > div {
    display: flex;

    & > div {
      width: 50%;
    }
    .prodImg
    {
      max-width: 95% !important;
    }
  }

  .mainInfoContainer{
    border-left: 3px solid #1d91fd !important;
    border-bottom-left-radius: 7px;
  }
  .mainInfoTxt {
    font-weight: bold;
    max-width: 95% !important;
    margin: 10px;
  }
`
const AddCartBtn = styled(Button)`
  display: flex !important;
  justify-content: space-between !important;
  background-color: #1d91fd !important;
  border-radius: 0px !important;
  border-bottom-left-radius: 4px !important;
  padding: 0px !important;
  width: 100%;
`

export {
  PageContainer,
  InfoContainer,
  AddCartBtn
}