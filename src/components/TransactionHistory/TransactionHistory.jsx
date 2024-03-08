import TransactionTable from '../TransactionTable/TransactionTable';
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
        {Array.isArray(items) &&
          items.map(item => {
            return (
              <tr key={item.id}>
                <TransactionTable
                  type={item.type}
                  amount={item.amount}
                  currency={item.currency}
                />
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
