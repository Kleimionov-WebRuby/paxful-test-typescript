import { BUYER_TYPE, SELLER_TYPE } from 'constants/account';
import { CHANGE_ACCOUNT } from 'constants/actionTypes';
import { ChangeAccountType } from 'store/interfaces/accountActionsType';
import { AccountState } from 'store/models/accountModel';

const initialState: AccountState = BUYER_TYPE;

const account = (
  state = initialState,
  action: ChangeAccountType,
): AccountState => {
  switch (action.type) {
    case CHANGE_ACCOUNT: {
      const newAccount = state === BUYER_TYPE ? SELLER_TYPE : BUYER_TYPE;
      return newAccount;
    }
    default:
      return state;
  }
};

export default account;
