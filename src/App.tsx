import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

import { CartContextProvider } from './contexts/CartContext/CartContext'
import { ProductsContextProvider } from './contexts/ProductsContext/ProductsContext'
import { FormContextProvider } from './contexts/FormContext/FormContext'
import { PaymentContextProvider } from './contexts/PaymentContext/PaymentContext'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'

export function App() {
 
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <ProductsContextProvider>
        <CartContextProvider>
        <FormContextProvider>
        <PaymentContextProvider>
          <GlobalStyle/>
          <Router/>
          <ToastContainer autoClose={2000} pauseOnHover={false}/>
        </PaymentContextProvider>
        </FormContextProvider>
        </CartContextProvider>
        </ProductsContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}


