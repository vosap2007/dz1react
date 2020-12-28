import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Transaction.module.css';

function TransactionHistory({ items }) { 
    return (
      <table className={styles.transactionHistory}>
     <thead>
       <tr className={styles.title}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
       </tr>
      </thead>
  {items.map(item =>
  <tbody key={item.id}>
    <tr className={styles.list}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  </tbody>
 )}
 </table>
  )
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired
}

export default TransactionHistory;