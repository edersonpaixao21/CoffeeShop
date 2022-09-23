import { ShoppingCart } from "phosphor-react";

import { useContext } from "react";

import { Coffee, ProductsContext } from "../../contexts/ProductsContext/ProductsContext";
import { CartContext } from "../../contexts/CartContext/CartContext";

import { nanoid } from 'nanoid';

import { BuyContainer, CardContainer, LabelsContainer } from "./styles";

interface CoffeeCardProps{
  coffee: Coffee;
}

export function CoffeeCard({coffee}: CoffeeCardProps){
  const { 
    handleAddProductQuantity,
    handleRemoveProductQuantity
  } = useContext(ProductsContext)

  const { handleAddProductToCart } = useContext( CartContext )

  return(
    <CardContainer>
      <img src={coffee.image} alt={coffee.title}/>  

      <LabelsContainer>
        {coffee.label.map(label => (
          <div key={nanoid()}>
            {label}
          </div>
        ))}
      </LabelsContainer>


      <h4>{coffee.title}</h4>
      <p>{coffee.description}</p>

      <BuyContainer>
        <span>R$ <strong>9,90</strong></span>

        <div>
          <div>
            <button
              onClick={() => handleRemoveProductQuantity(coffee.id)}
            >
              -
            </button>
            {coffee.quantity}
            <button
              onClick={() => handleAddProductQuantity(coffee.id)}
            >
              +
            </button>
          </div>

            <button
              onClick={() => handleAddProductToCart(coffee.id)}
            >
              <ShoppingCart
                color="white"
                weight="fill"
                size={20}
              />
            </button>
        </div>
        
      </BuyContainer>
    </CardContainer>
  )
}