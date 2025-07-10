import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // Loader starts visible
  const [percent, setPercent] = useState(0);        // Initial loading percent

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, percent, setPercent }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
