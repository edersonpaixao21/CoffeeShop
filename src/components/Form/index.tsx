import { MapPinLine } from "phosphor-react";

import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";

import { ufStatesList } from "../../util/statesUf";

import { FormContainer } from "./styles";

export function Form (){
  const { register, watch } = useContext(FormContext)

  const complement = watch('complement');
  const isComplementEmpty = !!complement;


  return(
  <FormContainer
    isComplementEmpty={isComplementEmpty}
  >
    <form>
      <header>
        <MapPinLine
          color="#fbaf42"
          size={25}
        />
        <div>
          <h4>Endereço de Entrega</h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </header>

      <div>
        <input 
          className="cep" 
          type="text" 
          placeholder="CEP"
          {...register('cep')}
        />
        <input 
          type="text" 
          placeholder="Rua"
          {...register('street')}
        />
        <div>
          <input 
            type="text" 
            placeholder="Número"
            {...register('number')}
          />
          <div>
            <input 
              className="complemento" 
              type="text" 
              placeholder="Complemento"
              {...register('complement')}
            />
          </div>
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Bairro"
            {...register('district')}
          />
          <input 
            type="text" 
            placeholder="Cidade"
            {...register('city')}
          />
          <input 
            type="text" 
            list="uf-suggestions"
            placeholder="UF"
            maxLength={2}
            minLength={2}
            pattern="banana|cherry"
            {...register('uf')}
          />


          <datalist id="uf-suggestions">
            {ufStatesList.map(state =>{
                return  <option key={state} value={state}/>
              }
            )}
          </datalist>
        </div>
      </div>
    </form>
  </FormContainer>

  )
}