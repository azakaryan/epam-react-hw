import { storeFactory, consoleMessagesProxy } from './index';
import { TypeCheck } from '../services/utils/type-check';
import C from './constants';

describe('Store Factory', () => {
  it('test consoleMessagesProxy', () => {
    expect(TypeCheck.isFunction(consoleMessagesProxy)).toBeTruthy();
  });

  it('test consoleMessagesProxy call', () => {
    let action = null;
    const a1 = { type: C.ADD_ERROR, payload: 'err' };
    const a2 = { type: C.ADD_MOVIE, payload: { id: '1' } };
    const next = (_action) => action = _action;

    let result = consoleMessagesProxy()(next)(a1);
    expect(TypeCheck.isObject(result)).toBeTruthy();
    expect(JSON.stringify(result)).toEqual(JSON.stringify(a1));

    result = consoleMessagesProxy()(next)(a2);
    expect(TypeCheck.isObject(result)).toBeTruthy();
    expect(JSON.stringify(result)).toEqual(JSON.stringify(a2));
  });

  it('test storeFactory', () => {
    expect(TypeCheck.isFunction(storeFactory)).toBeTruthy();
  });

  it('test storeFactory call', () => {
    const store = storeFactory();
    expect(TypeCheck.isFunction(store.getState)).toBeTruthy();
  });
});
