import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import TransactionList from '../../components/profile/transactionList/TransactionList';


function TransactionPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Remplacer par la récupération des données de transaction réelles
    const fetchTransactions = async () => {
      try {
        // Simuler un appel API
        const response = await fetch('/api/transactions');
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <>
      <Header />
      <TransactionList transactions={transactions} />
      <Footer />
    </>
  );
}

export default TransactionPage;