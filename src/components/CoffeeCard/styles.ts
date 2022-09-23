import styled from "styled-components";

export const CardContainer = styled.div`
  width: 26.6rem;
  background-color: #F3F2F2;

  border-radius: 6px 36px;

  padding: 10rem 2rem 2rem 2rem;
  margin-bottom: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  img{
    object-fit: contain;
    width: 12rem;
    position: absolute;

    top: -2.4rem;
  }

  h4{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;

    color: #403937;
  }

  > p{
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 130%;

      text-align: center;

      color: #8D8686;
  }
`

export const LabelsContainer = styled.div`
  display: flex;

  margin-top: 1rem;

  div{
    padding: .5rem;
    background-color: #F1E9C9;

    color: #fbaf42;

    border-radius: 8px;

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;

    text-transform: uppercase;
  }
`
export const BuyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span{
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 130%;

    color: #574F4D;

    strong{
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 2.4rem;
    }
  }

  > div > div{
    display: flex;
    align-items: center;

    padding: .5rem;

    background-color: #E6E5E5;

    font-size: 1.6rem;
    border-radius: 6px;

    button{
      background-color: transparent;
      border: none;
      color: #6d4d41;
      font-size: 2rem;
      cursor: pointer;

      transition: color 200ms;

      &:hover{
        color: #fbaf42;
      }
    }
  }

  > div > button{
    border: none;
    background-color: #fbaf42;
    padding: .5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 200ms;

    &:hover{
      background-color: #6d4d41;
    }
  }
`