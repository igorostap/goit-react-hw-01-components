import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomHexColor from '../../helpers/RandomColor'
export default function TittleStat({ tittle, stats }) {
  return (
    <div>
      <section className={css.statistics}>
        {tittle && <h2 className={css.title}>{tittle}</h2>}
        <ul className={css.statList}>
          {stats.map(({id,label,percentage}) => (
            <li
              key={id}
              className={css.item}
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
TittleStat.propTypes = {
  tittle: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

