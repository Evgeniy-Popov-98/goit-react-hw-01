import clsx from 'clsx';
import css from './TransactionTable.module.css';

const TransactionTable = ({ type, amount, currency }) => {
  return (
    <>
      <td className={clsx(css.tdItem)}>{type}</td>
      <td className={clsx(css.tdItem)}>{amount}</td>
      <td className={clsx(css.tdItem)}>{currency}</td>
    </>
  );
};

export default TransactionTable;
