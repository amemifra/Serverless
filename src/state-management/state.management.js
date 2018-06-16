import { BehaviorSubject } from 'rxjs';

const initialState = {
  'element-sidenav': {
    'sidenav-map': {
      content1: [
        'step1',
        'step2'
      ]
    }
  }
};

const store = new BehaviorSubject(initialState);

export const getStore = () => store.asObservable();
export const getStoreValue = (element, context) => store.getValue().element.context;

export const setStore = (newState, context) => {
  const theStore = store.getValue();
  if (theStore.hasOwnProperty(context)) {
    theStore[context] = newState;
    store.next(theStore);
  }
};

