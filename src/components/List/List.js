import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
//import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';
//import Creator from '../Creator/Creator.js';
import ReactHtmlParser from 'react-html-parser';






class List extends React.Component {

    static propTypes = {
      title: PropTypes.node.isRequired,
      description: PropTypes.node,
      columns: PropTypes.array,
      image: PropTypes.text,
    }
    static defaultProps = {
      description: settings.defaultListDescription,

    }

    render() {
      const {title, image, description} = this.props;

      return (
        <section className={styles.component}>
          <h2 className={styles.subtitle}>
            <Hero titleText={title} image={image} />
            <div className={styles.description}>
              {ReactHtmlParser(description)}
            </div>
        
          </h2>
          {/*
          <div className={styles.columns}>
            {this.state.columns.map(({key, ...columnProps}) => (
              <Column key={key} {...columnProps} />
            ))}
          </div>

          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
          </div>
            */}
        </section>
      );
    }
}

export default List;
