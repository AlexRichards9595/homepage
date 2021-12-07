import React from 'react';
import PropTypes from 'prop-types';
import styles from './Experience.module.css';

import { data } from "./ExperienceData";
import ExperienceDetails from "../ExperienceDetails/ExperienceDetails";

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCompany: data[0]
        }
    }

    render() {
        return (<div className={styles.Experience} data-testid="Experience">
            <h1>But in case you care more about my work...</h1>
            <div className={styles.Experience_Navigation}>
                {data.map(x =>
                    <button
                        className={x.company === this.state.selectedCompany.company ? styles.active : ""}
                        onClick={() => this.setState({selectedCompany: x})}>{x.company}
                    </button>
                )}
            </div>
            <ExperienceDetails company={this.state.selectedCompany}/>
        </div>);
    }
};


Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
