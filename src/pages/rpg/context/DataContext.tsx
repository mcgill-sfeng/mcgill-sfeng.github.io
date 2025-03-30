import { createContext, useContext, useState } from "react";

type DataContextType = {
  data: any | null; // TODO: implement data type
  setData: (data: any | null) => void;
};

type DataContextProviderProps = {
  children: React.ReactNode;
};

const DataContext = createContext<DataContextType>({
  data: null,
  setData: () => {},
});

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};

export const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const [data, setData] = useState<any | null>(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
