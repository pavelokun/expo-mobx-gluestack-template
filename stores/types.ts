import { AppStore } from '@/stores/app.store';

export type Stores = { 
  appStore: AppStore;
};

export enum OperationKey {
  //auth
  login = 'login',
}