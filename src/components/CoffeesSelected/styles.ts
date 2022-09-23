import styled from "styled-components"
import { BaseCheckoutContainer } from "../../pages/Checkout/styles"

export const CoffeesSelectedContainer = styled(BaseCheckoutContainer)`
  width: 44.8rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  >div{
    width:100%;
    display: flex;
    justify-content: space-between;
    
    p{
      font-size: 1.4rem;
      line-height: 130%;

      color: #574F4D;
    }
    &:last-child{
      font-size: 1.6rem;
    }

    strong{
      font-weight: 700;
      font-size: 2rem;
      line-height: 130%;

      color: #403937;
    }
  }

  .confirmRequestButton{
    width: 100%;

      button{
        cursor: pointer;
        width: 100%;
        padding: 1.2rem .8rem;
        text-decoration: none;
        color: white;
        background: #6d4d41;
        border-radius: 6px;   

        font-size: 1.4rem;
        font-weight: 700;
        line-height: 160%;

        text-transform: uppercase;
        transition: background-color 200ms;

        border: none;

        &:disabled{
          opacity: .5;
          cursor: not-allowed;
        }

        &:not(:disabled):hover{
          background-color: #fbaf42;
        }
    }
  }

  @media (max-width: 1024px){

    justify-content: center;
  }
`

export const CoffeeSelected = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #E6E5E5;

  padding-bottom: 2rem;
  margin-bottom: 3rem;

  img{
    width: 6.4rem;
  }

  >div{
    display: flex; 
    flex-direction: column;
    gap: 1rem;

    p{
      font-size: 1.6rem;
      line-height: 130%;

      color: #403937;
    }

    >div{
      display: flex;
      gap: 1rem;

      >div{
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: .7rem;

        background-color: #E6E5E5;
        color: #272221;

        font-size: 1.6rem;
        border-radius: 6px;

        button{
          background-color: transparent;
          border: none;
          color: #6d4d41;
          font-size: 2rem;
          cursor: pointer;
          font-weight: 200;

          &:hover{
            color: #fbaf42;
          }
        }
      }

      >button{
        cursor: pointer;

        display: flex;
        flex: 1;
        align-items: center;
        padding: .5rem;
        gap: 1rem;

        background: #E6E5E5;
        border-radius: 6px;

        border: none;

        font-size: 1.2rem;
        font-weight: 400;
        line-height: 160%;
        text-transform: uppercase;
        color: #574F4D;

        transition: background-color 200ms;
        
        &:hover{
          background: #D7D5D5;
        }
      }
    }
  }

  strong{
    padding-left: 3rem;

    font-weight: 700;
    font-size: 1.6rem;
    line-height: 130%;

    color: #574F4D;
  }
`