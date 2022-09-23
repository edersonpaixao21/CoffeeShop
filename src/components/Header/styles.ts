import styled from "styled-components";

export const HeaderContainer = styled.header`
  width:100%;
  margin-top: 3rem;

  nav{
    display: flex;
    justify-content: space-between;
  }

  nav > div{
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  img {
    width: 120px;
  }
`

export const Location = styled.div`
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .6rem;

  padding: .5rem;

  border-radius: 8px;

  background-color: #f9c272;

  strong{
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 130%;

    color: #6d4d41;
  }
`

export const CartIcon = styled.div`
  position: relative;

  background-color: #6d4d41;
  padding: .5rem;

  border-radius: 8px;

  cursor: pointer;

  transition: filter 200ms;

  &:hover{
    filter: brightness(1.03);
  }

  >div{
    position: absolute;
    transform: translate(22px, -13px);

    width: 2rem;
    height: 2rem;

    background-color: #fbaf42;
    
    color: white; 
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -0.06em;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 1000px;
  }

  @media (max-width: 768px){
    justify-content: space-between;
    
  }
`