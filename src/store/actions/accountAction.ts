import { CHANGE_ACCOUNT } from 'constants/actionTypes';
import { ChangeAccountType } from 'store/interfaces/accountActionsType';

export const changeAccount = (): ChangeAccountType => ({
  type: CHANGE_ACCOUNT,
});
