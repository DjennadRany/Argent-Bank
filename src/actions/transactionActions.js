// Types d'actions pour les transactions
export const TRANSACTIONS_REQUEST = 'TRANSACTIONS_REQUEST';
export const TRANSACTIONS_SUCCESS = 'TRANSACTIONS_SUCCESS';
export const TRANSACTIONS_FAILURE = 'TRANSACTIONS_FAILURE';
export const TRANSACTION_CREATE = 'TRANSACTION_CREATE';
export const TRANSACTION_UPDATE = 'TRANSACTION_UPDATE';
export const TRANSACTION_DELETE = 'TRANSACTION_DELETE';

// Action creators pour les transactions
export const transactionsRequest = () => ({
  type: TRANSACTIONS_REQUEST,
});

export const transactionsSuccess = (transactionsData) => ({
  type: TRANSACTIONS_SUCCESS,
  payload: transactionsData,
});

export const transactionsFailure = (error) => ({
  type: TRANSACTIONS_FAILURE,
  payload: error,
});

export const transactionCreate = (newTransaction) => ({
  type: TRANSACTION_CREATE,
  payload: newTransaction,
});

export const transactionUpdate = (updatedTransaction) => ({
  type: TRANSACTION_UPDATE,
  payload: updatedTransaction,
});

export const transactionDelete = (transactionId) => ({
  type: TRANSACTION_DELETE,
  payload: transactionId,
});