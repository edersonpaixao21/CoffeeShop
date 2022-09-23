import { Bank, CreditCard, Money } from "phosphor-react";

import { createContext, ReactNode, useEffect, useState } from "react";

interface PaymentContextProviderProps{
  children: ReactNode;
}

interface PaymentButtonsType{
  id: number;
  title: string;
  icon: JSX.Element;
  isActive: boolean;
}

interface PaymentContextProps{
  paymentButtons: PaymentButtonsType[];
  handleSelectPaymentButton: (id: number) => void;
}

export const PaymentContext = createContext({} as PaymentContextProps)

export function PaymentContextProvider({children}: PaymentContextProviderProps){

const [paymentButtons, setPaymentButtons] = useState<PaymentButtonsType[]>([])

useEffect(() => {
  setPaymentButtons([{
    id: 1,
    title: 'Cartão de crédito',
    icon: <CreditCard
    color="#fbaf42"
    size={20}
          />,
    isActive: false,
  },
  {
    id: 2,
    title: 'Cartão de débito',
    icon: <Bank
    color="#fbaf42"
    size={20}
          />,
    isActive: false,
  },
  {
    id: 3,
    title: 'Dinheiro',
    icon: <Money
    color="#fbaf42"
    size={20}
          />,
    isActive: false,
  }])
},[])

function handleSelectPaymentButton(id : number){
  setPaymentButtons(prevState =>
    prevState.map(item =>{
      const currentIsActive = item.isActive
      return item.id === id ?
      {...item, isActive: !currentIsActive}
      :{...item, isActive: false}
    })  
  )
}
  return (
    <PaymentContext.Provider value={{
      paymentButtons,
      handleSelectPaymentButton
      }}>
        { children }
      </PaymentContext.Provider>
  )
}