import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 650px;
  width: 100vw;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 2px solid  #f9813a;
  border-top-left-radius: 7px;
  border-bottom-right-radius: 7px;
  
  .listHeader{
    background-color: #f9813a;
    border-top-left-radius: 4px;
    font-weight: bold;
    padding: 5px;
  }
`
const ProdItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  border: 3px solid #1d91fd;
  border-top-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding: 5px;
  height: 150px;

  & > img {
    max-height: 100%;
  }

  .prodName {
    font-weight: bold;
  }
`

export {
  PageContainer,
  ProdItem
}