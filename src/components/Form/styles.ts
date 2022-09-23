import styled, { css } from "styled-components";
import { BaseCheckoutContainer } from "../../pages/Checkout/styles";

interface FormContainerProps{
  isComplementEmpty: boolean;
}

export const FormContainer = styled(BaseCheckoutContainer)<FormContainerProps>`
  form > div{
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    width: 100%;

    input{
      box-sizing: border-box;

      padding: 12px;

      background: #EDEDED;
      outline-color: #fbaf42;

      border: 1px solid #E6E5E5;
      border-radius: 4px;
    }

    .cep{
      width: 20rem;
    }

    .complemento{
      width: 100%;
    }

    >div{
      display: flex;
      gap: 1rem;

      >div{
        width: 100%;
        position: relative;

        ${props => !props.isComplementEmpty && css`
          &::after{
            content: "Opcional";
            font-style: italic;
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 130%;

            position: absolute;
            top: 1.25rem;
            right: 2rem;

            color: #8D8686;
          }
        `}
      }
    }
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

    form>div{
      input{
        width: 100%;
        &::placeholder{
          font-size: 1.4rem;
        }
      }
    >div:not(:last-child){
          display: flex;
          flex-direction: column;

          >div{
              ${props => !props.isComplementEmpty && css`
                &::after{
                  top: 1.8rem;
                }
            `}
          }
      }

    .cep{
      max-width: 20rem;
    }

    }
  }
`