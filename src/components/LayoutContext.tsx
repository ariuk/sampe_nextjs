"use client"
import { INITIAL_GLOBAL_STATES } from '@/utils';
import { IGlobalStates } from '@/utils';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LayoutContextType {
  globalState: IGlobalStates;
  updateGloblaState: (newState: any) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useGlobal = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useGlobal must be used within a LayoutProvider');
  }
  return context;
};

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [globalState, setGlobalState] = useState<IGlobalStates>(INITIAL_GLOBAL_STATES);

  const updateGloblaState = (newState: IGlobalStates) => {
    setGlobalState(newState);
  };

  return (
    <LayoutContext.Provider value={{ globalState, updateGloblaState }}>
      {children}
    </LayoutContext.Provider>
  );
};