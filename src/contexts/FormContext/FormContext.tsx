import { createContext, ReactNode } from "react";

import { FieldValues, useForm, UseFormRegister, UseFormWatch } from "react-hook-form";

interface FormContextProviderProps{
  children: ReactNode;
}

interface FormContextProps {
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}

export const FormContext = createContext({} as FormContextProps)

export function FormContextProvider({children}: FormContextProviderProps){
  const { register, watch } = useForm();

  return(
    <FormContext.Provider value={{
        register,
        watch,
      }}>
        { children }
      </FormContext.Provider>
  )
}