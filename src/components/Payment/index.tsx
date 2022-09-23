import { CurrencyDollar } from "phosphor-react";

import { PaymentButton } from "../PaymentButton";

import { useContext } from "react";
import { PaymentContext } from "../../contexts/PaymentContext/PaymentContext";

import { PaymentContainer } from "./styles";

export function Payment(){
  const { paymentButtons } = useContext(PaymentContext)

  return(
    <PaymentContainer>
      <header>
        <CurrencyDollar
          color="#fbaf42"
          size={25}
        />
        <div>
          <h4>Pagamento</h4>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </header>

      <div>
        {paymentButtons.map(button =>(  
          <PaymentButton
            key={button.id}
            isActive= {button.isActive}
            id={button.id}
            title={button.title}
            icon={button.icon}
          />
        ))}
      </div>
  </PaymentContainer>
  )
}