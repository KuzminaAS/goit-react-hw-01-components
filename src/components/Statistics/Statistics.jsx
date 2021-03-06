import React from 'react';

import PropTypes from "prop-types";

import styles from './Statistics.module.css';

import {randColor} from '../../helpers'

const Statistics = ({title, stats}) => {
    return (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.list}> {stats.map((stat) => (
    <li className={styles.item} key={stat.id} style={{backgroundColor: randColor()}}>
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}</span>
        </li>
    ))}
      </ul>
</section>
    )
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,

  stats: PropTypes.shape({
    id:PropTypes.number.isRequired,
    label:PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
}