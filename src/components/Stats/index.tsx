import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { Stat, StatsContainer } from "./styles";

export function Stats(){
  return(
    <StatsContainer>
      <div>
        <Stat>
          <div className='shoppingCart'>
            <ShoppingCart 
              color='white'
              weight='fill'
              size={18}
            />
          </div>
          <p>Compra simples e segura</p>
        </Stat>

        <Stat>
          <div className='timer'>
            <Timer
              color='white'
              weight='fill'
              size={18}
            />
          </div>
          <p>Entrega rápida e rastreada</p>
        </Stat>
      </div>

      <div>
        <Stat>
          <div className='package'>
            <Package
              color='white'
              weight='fill'
              size={18}
            />
          </div>
          <p>Embalagem mantém o café intacto</p>
        </Stat>

        <Stat>
          <div className='coffee'>
            <Coffee
              color='white'
              weight='fill'
              size={18}
            />
          </div>
          <p>O café chega fresquinho até você</p>
        </Stat>
      </div>
    </StatsContainer>
  )
}