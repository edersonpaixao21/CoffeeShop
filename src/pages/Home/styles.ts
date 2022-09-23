import styled from "styled-components";

export const HomeHeader = styled.section`
  display: flex;
  justify-content: space-between;
  
  margin-top: 13rem;


  @media (max-width: 1024px){
    flex-direction: column-reverse;
    margin-top: 8rem;
    
  }
`

export const HomeHeaderContent = styled.div`
  width: 50%;

  header{
    h2{
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 4.8rem;
      line-height: 130%;

      color: #272221;

      margin-bottom: 1.5rem;
    }

    p{
      font-weight: 400;
      font-size: 2rem;
      line-height: 130%;
      font-stretch: 100;

      color: #403937;

      margin-bottom: 7rem;
    }
  }

  @media (max-width: 1024px){
    width: 100%;

    header{
      h2{
        font-size: 3.6rem;
        margin-top: 2rem;
      }
    }
  }
`

export const CoffeesMenu = styled.section` 
  div{
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  h3{
    margin-top: 10rem;
    margin-bottom: 6rem;

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;
    color: #403937;

    display: flex;
    align-items: center;
    text-align: center;
  }
  
  @media (max-width: 1024px){
    width: 100%;
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`