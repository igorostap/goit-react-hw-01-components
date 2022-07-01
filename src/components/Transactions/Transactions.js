import PropTypes from "prop-types";
import css from './Transactions.module.css'
export default function TransactionHistory({ props }){
    return (
        <div>
          <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
<tbody> 
                {props.map(event => (
                        
                    <tr key={event.id}>
                 <td>{event.type}</td>
                 <td>{event.amount}</td>
                 <td>{event.currency}</td>
                            </tr>
    ))}
  </tbody>
</table>
        </div>
                )}
TransactionHistory.propTypes=({
props: PropTypes.array.isRequired,
})