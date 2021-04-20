import React from 'react';

import PropTypes from "prop-types";

import styles from './TransactionHistory.module.css';

const TransactionHistory = ({items})  => {
    return (
   <>
 <table className={styles.transaction}>
  <thead className={styles.table_head}>
    <tr className={styles.head_column}>
      <th className={styles.name}>Type</th>
      <th className={styles.name}>Amount</th>
      <th className={styles.name}>Currency</th>
    </tr>
  </thead>

 <tbody className={styles.table_body}> {items.map((item) => (
<tr key={item.id} className={styles.body_column}>
<td className={styles.text}>{item.type}</td>
<td className={styles.text}>{item.amount}</td>
<td className={styles.text}>{item.currency}</td>
</tr>)
)}
  </tbody>
 </table>
    </>
)
};

export default TransactionHistory;

TransactionHistory.propTypes = {
 
  items: PropTypes.shape({
    id:PropTypes.number.isRequired,
    type:PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,

  })
}