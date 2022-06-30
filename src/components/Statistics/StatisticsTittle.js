import PropTypes from "prop-types";
import css from './Statistics.module.css'

export default function TittleStat({ tittle, stats }) {
    return (  
<div>
    <section className={css.statistics}>
            {tittle && <h2 className={css.title}>{tittle}</h2>}
                <ul className={css.statList}>
                    
                    {stats.map(event => (
                        <li key={event.id} className={css.item} style={{ backgroundColor:`${getRandomHexColor()}` }}>
                        <span className={css.label}>{event.label}</span>
                        <span className={css.percentage}>{event.percentage}%</span>
                    </li>
                    
                    ))}
     </ul>
     </section>
</div>
    
    
    );  
    
}
TittleStat.propTypes = ({
  tittle: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
  
})
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}