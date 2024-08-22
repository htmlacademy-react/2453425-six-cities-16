import { State } from '../../types/state';

export const getUserEmail = (state: Pick<State, 'user'>) =>
  state.user.userProfile?.email;
export const getUserStatus = (state: Pick<State, 'user'>) =>
  state.user.authorizationStatus;
