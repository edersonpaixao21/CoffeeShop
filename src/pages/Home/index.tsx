import CoffeeBg from '../../assets/coffee-bg.png'

import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext/ProductsContext'

import { CoffeeCard } from '../../components/CoffeeCard'
import { Stats } from '../../components/Stats'

import { CoffeesMenu, HomeHeader, HomeHeaderContent } from './styles'


export function Home(){
  const { products } = useContext(ProductsContext)

  return(
    <main>
      <HomeHeader>
        <HomeHeaderContent>
          <header>
            <h2>Encontre o café perfeito para qualquer hora do dia!</h2>
            <p>Com o Coffee Shop você recebe seu café onde estiver, a qualquer hora.</p>
          </header>

          <Stats/>
        </HomeHeaderContent>

        <img src={CoffeeBg} alt='imagem da embalagem do café'/>
      </HomeHeader>

      <CoffeesMenu>
        <h3>Nossos Cafés...</h3>
        <div>
          {products.map(coffee=> (
            <CoffeeCard 
              key={coffee.id}
              coffee={coffee}
            />
          ))}
        </div>
      </CoffeesMenu>

    </main>
  )
}