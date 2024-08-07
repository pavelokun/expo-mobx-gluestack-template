import { makeAutoObservable, ObservableMap } from 'mobx';
import { OperationKey } from './types';

const LoadingStateDefault = Object.values(OperationKey).reduce((res, key) => ({ ...res, [key]: false }), {});

export class AppStore {
  public loadingState = new ObservableMap<OperationKey, boolean>(LoadingStateDefault);

  constructor() {
    makeAutoObservable(this);
  }

  public updateLoadingState(key: OperationKey, value: boolean): void {
    this.loadingState.set(key, value);
    console.log(`Operation ${key} is ${value ? 'in progress' : 'finished'}`);
  }
}
