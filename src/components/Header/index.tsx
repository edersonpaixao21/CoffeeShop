import { CartIcon, HeaderContainer, Location } from "./styles";
import logoImg from '../../assets/logo.png'
import { MapPin, ShoppingCart } from "phosphor-react";

import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

export function Header(){
  const { cart } = useContext(CartContext);
  const differentItemsQuantityInCart = cart.length;
  const isCartEmpty = cart.length === 0;

  return(
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={logoImg} alt="logo café"/>
        </NavLink>

        <div>
          <Location>
              <MapPin 
                size={28} 
                weight="fill"
                color={"#6d4d41"}
              />
            <strong>Rio de Janeiro, RJ</strong>
          </Location>

          <CartIcon>
            {!isCartEmpty && 
              <div>
                {differentItemsQuantityInCart}
              </div>
            }
            <NavLink to="/checkout">
              <ShoppingCart 
              size={28}
              weight="fill"
              color="white"
              />
            </NavLink>
          </CartIcon>
        </div>
      </nav>
    </HeaderContainer>
  )
}