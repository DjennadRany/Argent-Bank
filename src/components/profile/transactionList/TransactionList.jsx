import React from 'react';
import './TransactionList.css';

function TransactionList({ transactions }) {
  return (
    <section className="transactions">
      <h2 className="sr-only">Transactions</h2>
      <ul className="transaction-list">
        {transactions.map((transaction, index) => (
          <li key={index} className="transaction">
            <div className="transaction-date">{transaction.date}</div>
            <div className="transaction-description">{transaction.description}</div>
            <div className={`transaction-amount ${transaction.amount > 0 ? 'positive' : 'negative'}`}>
              {transaction.amount > 0 ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
            </div>
            <div className="transaction-balance">Balance: ${transaction.balance.toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TransactionList;