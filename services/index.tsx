import React, { useContext, useState } from 'react';
import { Services } from './types';

export const ServicesContext = React.createContext<Services>({} as Services);

export const ServicesProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  // const authService = useAuthService(usersService);


  const [services] = useState<Services>(() => ({
    // authService,
  }));

  return (
    <ServicesContext.Provider value={services}>
      {children}
    </ServicesContext.Provider>
  );
};

export function useService<T = Services>(selector?: (services: Services) => T): T {
  const services = useContext(ServicesContext);

  if (selector) {
    return selector(services);
  }

  return services as T;
}
