import React from 'react';

import PropTypes from "prop-types";


import './Statistics.css';


const Statistics = ({title, stats}) => {
    return (
  <section class="statistics">
  <h2 class="title">{title}</h2>

 <ul class="stat-list"> {stats.map((stat) => (
 <li class="item" key={stat.id}>
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}</span>
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