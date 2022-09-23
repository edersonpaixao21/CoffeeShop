import styled from "styled-components"

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 130%;

  color: #574F4D;

  > div{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  @media (max-width: 768px){
    gap: 3rem;
    font-size: 1.5rem;
  }
`

export const Stat = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  div{
    padding: .5rem;
    background-color: red;
    border-radius: 50%;

    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .shoppingCart{
    background-color: #6d4d41;
  }

  .timer{
    background-color: #6d4d41;
  }

  .package{
    background-color: #6d4d41;
  }

  .coffee{
    background-color: #6d4d41;
  }
`