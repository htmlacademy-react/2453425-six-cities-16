import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getUserEmail = (state: Pick<State, NameSpace.User>) =>
  state[NameSpace.User].userProfile?.email;

export const getUserStatus = (state: Pick<State, NameSpace.User>) =>
  state[NameSpace.User].authorizationStatus;
