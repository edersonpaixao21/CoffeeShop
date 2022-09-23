import { useContext } from "react";
import { PaymentContext } from "../../contexts/PaymentContext/PaymentContext";

import { PaymentButtonContainer } from "./styles";

interface PaymentButtonProps {
  title: string;
  isActive: boolean;
  icon: JSX.Element;
  id: number;
}

export function PaymentButton({title, icon, id, isActive}: PaymentButtonProps){
  const { handleSelectPaymentButton } = useContext(PaymentContext)

  return (
    <PaymentButtonContainer 
      isActive={isActive}
      onClick={() => handleSelectPaymentButton(id)}
    >
      {icon}
      {title}
    </PaymentButtonContainer>
  )
}