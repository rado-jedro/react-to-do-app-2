import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
//import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import Card from '../Card/Card.js'; 



class Column extends React.Component {

    static propTypes = {
      title: PropTypes.node.isRequired,
      cards: PropTypes.array,
      icon: PropTypes.node,
    }

    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }


    render() {
      const {title, icon, cards} = this.props;

      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{title}
            <span className={styles.icon}>
              <Icon name={icon}/>
            </span>
          </h3>
           
          <div className={styles.columns}>
            {cards.map(cardsData => (
              <Card key={cardsData.id} {...cardsData} />
            ))}
          </div>  
          {/* 
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={title => this.addCard(title)}/>
          </div>
            */}
        </section>
      );
    }
}
  
export default Column;