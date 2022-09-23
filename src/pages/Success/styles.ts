import styled from "styled-components";

export const SuccessContainer = styled.section`
  margin-top: 10rem;

  h2{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;
    color: #fbaf42;
  }

  >p{
    font-size: 2rem;
    line-height: 130%;
    color: #403937;
  }

  >div{
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1024px){
    display: flex;
    flex-direction: column;
    gap: 2rem;

    >div{
      flex-direction: column-reverse;
    }
  }
`

export const DeliveryStatsContainer = styled.div`
  width: 52.6rem;
  margin-top: 5rem;
  padding: 5rem;
  
  background: 
    linear-gradient(#FAFAFA, #FAFAFA) padding-box,
    linear-gradient(to right, #fbaf42, #6d4d41 ) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  >div{
    display: flex;
    gap: 2rem;

    .mapPin{
      padding: 1rem; 

      background-color: #6d4d41;

      border-radius: 100%;

      display: flex; 
      justify-content: center; 
      align-items: center;
    }

    .timer{
      padding: 1rem; 

      background-color: #6d4d41;

      border-radius: 100%;

      display: flex; 
      justify-content: center; 
      align-items: center;
    }

    .dollar{
      padding: 1rem;  

      background-color: #6d4d41;

      border-radius: 100%;

      display: flex; 
      justify-content: center; 
      align-items: center;
    }

    >div p {
      font-size: 1.6rem;
      line-height: 130%;
      color: #574F4D;

    }

    >div strong{
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 130%;
      color: #574F4D;
    }
  }

  @media (max-width: 1024px){
    width: 100%;
    margin-bottom: 5rem;
    padding: 3rem;
  }

  @media (max-width: 768px){

    >div{
      align-items: center;
      >div{
        p,strong{
          font-size: 1.4rem;
        }
      }
    }
  }
`