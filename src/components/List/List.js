import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';


class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <h2 className={styles.subtitle}>
            <Hero titleText={this.props.title} />
        </h2>
      </section>
    )
  }
}

export default List;
