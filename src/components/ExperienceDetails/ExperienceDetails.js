import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExperienceDetails.module.css';

const ExperienceDetails = (props) => (
  <div className={styles.ExperienceDetails} data-testid="ExperienceDetails">
      {props.company.positions.map(x => <h4>{x.title}, {x.start}-{x.end}</h4>)}
      <ul>
          {props.company.projects.length > 0 ?
            props.company.projects.map(project => {
                return <li>
                    {project.title}, {project.start}-{project.end}
                    <ul>
                        {project.details.map(detail => <li>{detail}</li>)}
                    </ul>
                </li>
            }) :
              props.company.details.map(detail => <li>{detail}</li>)
          }
      </ul>
  </div>
);

ExperienceDetails.propTypes = {};

ExperienceDetails.defaultProps = {};

export default ExperienceDetails;
