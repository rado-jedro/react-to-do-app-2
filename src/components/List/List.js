import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import ReactHtmlParser from 'react-html-parser';
import Container from '../Container/Container';


class List extends React.Component {

    static propTypes = {
      title: PropTypes.node.isRequired,
      description: PropTypes.node,
      columns: PropTypes.array,
      image: PropTypes.node,
      addColumn: PropTypes.func,
    }
    static defaultProps = {
      description: settings.defaultListDescription,

    }

    render() {
      const {title, image, description,columns,addColumn} = this.props;

      return (
        <section className={styles.component}>
          <Container>
            <h2 className={styles.subtitle}>
              <Hero titleText={title} image={image} />
              <div className={styles.description}>
                {ReactHtmlParser(description)}
              </div>
        
            </h2>
          
            <div className={styles.columns}>
              {columns.map(columnData => (
                <Column key={columnData.id} {...columnData} />
              ))}
            </div>
          
            <div className={styles.creator}>
              <Creator text={settings.columnCreatorText} action={addColumn}/>
            </div>
          </Container>
        </section>
      );
    }
}

export default List;
