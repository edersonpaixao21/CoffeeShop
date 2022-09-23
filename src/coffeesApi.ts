import ExpressoTradicional from './assets/expresso-tradicional.png';
import ExpressoAmericano from './assets/expresso-americano.png';
import ExpressoCremoso from './assets/expresso-cremoso.png';
import ExpressoGelado from './assets/expresso-gelado.png';
import CafeComLeite from './assets/cafe-com-leite.png';
import Latte from './assets/latte.png';
import Capuccino from './assets/capuccino.png';
import Macchiato from './assets/macchiato.png';
import Mocaccino from './assets/mocaccino.png';
import ChocolateQuente from './assets/chocolate-quente.png';
import Havaiano from './assets/havaiano.png';
import Arabe from './assets/arabe.png';
import Irlandes from './assets/irlandes.png';

export const CoffeesApi = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    quantity: 1,
    label: ['Tradicional'],
    image: ExpressoTradicional,
    price: 9.90
  },
  {
    id: 2,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    quantity: 1,
    label: ['Tradicional'],
    image: ExpressoAmericano,
    price: 9.90
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    quantity: 1,
    label: ['Tradicional'],
    image: ExpressoCremoso,
    price: 9.90
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    quantity: 1,
    label: ['Tradicional', 'Gelado'],
    image: ExpressoGelado,
    price: 9.90
  },
  {
    id: 5,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    quantity: 1,
    label: ['Tradicional', 'Com leite'],
    image: CafeComLeite,
    price: 9.90
  },
  {
    id: 6,
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    quantity: 1,
    label: ['Tradicional', 'Com leite'],
    image: Latte,
    price: 9.90
  },
  {
    id: 7,
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    quantity: 1,
    label: ['Tradicional', 'Com leite'],
    image: Capuccino,
    price: 9.90
  },
  {
    id: 8,
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    quantity: 1,
    label: ['Tradicional', 'Com leite'],
    image: Macchiato,
    price: 9.90
  },
  {
    id: 9,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    quantity: 1,
    label: ['Tradicional', 'Com leite'],
    image: Mocaccino,
    price: 9.90
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    quantity: 1,
    label: ['Especial', 'Com leite'],
    image: ChocolateQuente,
    price: 9.90
  },
  {
    id: 11,
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    quantity: 1,
    label: ['Especial', 'Alcoólico', 'Gelado'],
    image: ChocolateQuente,
    price: 9.90
  },
  {
    id: 12,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    quantity: 1,
    label: ['Especial'],
    image: Havaiano,
    price: 9.90
  },
  {
    id: 13,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    quantity: 1,
    label: ['Especial'],
    image: Arabe,
    price: 9.90
  },
  {
    id: 14,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    quantity: 1,
    label: ['Especial', 'Alcoólico'],
    image: Irlandes,
    price: 9.90
  },
]

