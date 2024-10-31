import { createContext, useContext, useState } from "react";

interface CertContextStateValue {
  name: string | null;
  price: number | null;
  id: number | null;
}

type CertContextValue = {
  selectedCert: CertContextStateValue | null;
  setSelectedCert: (cert: CertContextStateValue) => void;
};

const CertContext = createContext<CertContextValue>({
  selectedCert: null,
  setSelectedCert: () => {},
});

export const CertContextProvider = ({ children }: any) => {
  const [selectedCert, setSelectedCert] = useState<CertContextStateValue>({
    name: null,
    price: null,
    id: null,
  });

  return (
    <CertContext.Provider value={{ selectedCert, setSelectedCert }}>
      {children}
    </CertContext.Provider>
  );
};

export const useCertContext = () => useContext(CertContext);
