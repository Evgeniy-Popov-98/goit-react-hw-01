import clsx from 'clsx';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={clsx(css.mainbox)}>
      <thead className={clsx(css.theadTitle)}>
        <tr>
          <th className={clsx(css.thItem)}>Type</th>
          <th className={clsx(css.thItem)}>Amount</th>
          <th className={clsx(css.thItem)}>Currency</th>
        </tr>
      </thead>

      <tbody className={clsx(css.transactionBox)}>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <td className={clsx(css.tdItem)}>{item.type}</td>
              <td className={clsx(css.tdItem)}>{item.amount}</td>
              <td className={clsx(css.tdItem)}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
