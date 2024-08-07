import { useContext, useState } from 'react';
import { MobXProviderContext, Provider } from 'mobx-react';
import { AppStore } from './app.store';
import { Stores } from './types';

const stores: Stores = {
  appStore: new AppStore(),
};

export const StoreProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <Provider {...stores}>
      {children}
    </Provider>
  );
};


export function useStore<T = Stores>(selector?: (stores: Stores) => T): T {
  const mobxStores = useContext(MobXProviderContext) as Stores;

  if (selector) {
    return selector(mobxStores) as T;
  }

  return mobxStores as T;
}

export function useViewModel<T>(create: (storeProvider: Stores) => T): T {
  const storeProvider = useStore();

  const [viewModel] = useState<T>(() => create(storeProvider));

  return viewModel;
}
