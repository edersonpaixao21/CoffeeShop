import styled, { css } from "styled-components";

interface PaymentButtonContainerProps{
  isActive: boolean;
}

export const PaymentButtonContainer = styled.button<PaymentButtonContainerProps>`
  margin-top: -3rem;

  cursor: pointer;

  display: flex;
  flex: 1;
  align-items: center;
  padding: 1.6rem;
  gap: 1rem;

  background: #E6E5E5;
  border-radius: 6px;
  border: none;

  font-size: 1.1rem;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;
  color: #574F4D;

  transition: background-color 200ms;

  &:hover{
    background: #D7D5D5;
  }

  ${props => props.isActive && css`
    background: #6d4d41;
    
    outline: 1px solid #fbaf42;

    &:hover{
      background: #fbaf42;
    }
  `}

  @media (max-width: 768px){
    justify-content: center;
  }
`
