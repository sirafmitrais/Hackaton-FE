import {
  ActionType
} from "../action-types/index"

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}

interface BankruptAction {
  type: ActionType.BANKRUPT;
}

type Action = DepositAction | WithdrawAction | BankruptAction;


export default Action;