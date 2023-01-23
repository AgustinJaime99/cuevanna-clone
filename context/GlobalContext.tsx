import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext } from 'react';

interface DefaultValues {
  theme: string;
  showModal: boolean;
  modalActive: string;
}

export type globalContext = {
  globalContext: DefaultValues;
  setGlobalContext: Dispatch<SetStateAction<DefaultValues>>
};

export const GlobalContext = createContext<globalContext | null>(null);

export function useGlobal() {
  return useContext(GlobalContext);
}

type Props = {
  children: ReactNode;
};

export function GlobalContextProvider({ children }: Props) {
  const [globalContext, setGlobalContext] = React.useState<DefaultValues>({
    modalActive: '',
    theme: 'light',
    showModal: false,
  })

  return (
    <>
      <GlobalContext.Provider value={{ globalContext, setGlobalContext }}>
        {children}
      </GlobalContext.Provider>
    </>
  )
}
