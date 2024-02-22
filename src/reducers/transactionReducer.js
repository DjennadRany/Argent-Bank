// Types d'actions potentielles pour les transactions
const TRANSACTIONS_REQUEST = 'TRANSACTIONS_REQUEST';
const TRANSACTIONS_SUCCESS = 'TRANSACTIONS_SUCCESS';
const TRANSACTIONS_FAILURE = 'TRANSACTIONS_FAILURE';
const TRANSACTION_UPDATE = 'TRANSACTION_UPDATE';
const TRANSACTION_DELETE = 'TRANSACTION_DELETE';

// État initial des transactions
const initialState = {
  loading: false,
  transactions: [],
  error: null,
};

// Reducer pour les transactions
const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
        error: null,
      };
    case TRANSACTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TRANSACTION_UPDATE:
      // Logique pour mettre à jour une transaction spécifique
      return {
        ...state,
        transactions: state.transactions.map(transaction =>
          transaction.id === action.payload.id ? { ...transaction, ...action.payload } : transaction
        ),
      };
    case TRANSACTION_DELETE:
      // Logique pour supprimer une transaction spécifique
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
      };
    default:
      return state;
  }
};

export default transactionReducer;