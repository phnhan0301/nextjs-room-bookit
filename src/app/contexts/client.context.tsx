import { createContext, ReactElement, ReactNode, useContext } from 'react';

type AppProviderProps = ({ children }: { children: ReactNode }) => ReactElement;
interface ClientContextValue {}

const ClientContext = createContext<ClientContextValue>(
  {} as ClientContextValue,
);

export const useAppContext = (): ClientContextValue =>
  useContext(ClientContext);

export const ClientProvider: AppProviderProps = ({ children }) => {
  const states: ClientContextValue = {};

  return (
    <ClientContext.Provider value={states}>{children}</ClientContext.Provider>
  );
};
