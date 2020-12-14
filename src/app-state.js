import { useContext, createContext } from 'react';

const AppState = createContext(undefined);
const useAppState = () => useContext(AppState);

export { useAppState, AppState };
