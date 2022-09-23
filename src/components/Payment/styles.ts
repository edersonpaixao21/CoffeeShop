import styled from "styled-components";
import { BaseCheckoutContainer } from "../../pages/Checkout/styles";

export const PaymentContainer = styled(BaseCheckoutContainer)`
  margin-bottom: 5rem;
  >div{
    width:100%;
    display: flex; 
    gap: 1.2rem;
  }
  @media (max-width: 768px){
    width: 100%;

    header{
      div{
        h4{
          font-size: 1.5rem;
        }
        p{
          font-size: 1.2rem;
        }
      }
    }

    >div{
      flex-direction: column;
      gap: 4rem;

    }
  }
`