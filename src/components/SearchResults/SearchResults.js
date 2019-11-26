import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Container from '../Container/Container';
import Card from '../Card/Card';


class SearchResults extends React.Component {
    
    static propTypes = {
      cards: PropTypes.array,
      lists : PropTypes.array,
    }

    render() {
      const {cards} = this.props;
      return (
        <section>
          <Container>
            <div className={styles.columns}>
              {cards.map(cardsData => (
                <Card key={cardsData.id} {...cardsData} />
              ))}
            </div>  
          </Container>
        </section>
      );
    }
}

export default SearchResults;