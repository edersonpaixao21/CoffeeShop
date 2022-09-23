import styled from "styled-components";

export const CheckoutContainer = styled.section`
  display: flex;
  gap: 2rem;

  h2{
    margin-top: 7rem;
    margin-bottom: 2rem;

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 130%;

    color: #272221;
  }

  >div{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 1024px){
    flex-direction: column;
    gap: 0rem;

    h2{
      margin-top: 4rem;
    }

    >div{
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
`
export const BaseCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
  
  padding: 4rem;
  width: 64rem;

  background: #F3F2F2;

  border-radius: 6px;

  header{
    display: flex;
    gap: .7rem;

    h4{
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 130%;

      color: #403937;
    }

    p{
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 130%;

      color: #574F4D;

      margin-bottom: 3rem;
    }
  }
`

