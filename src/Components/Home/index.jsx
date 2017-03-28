import React from 'react'
import styles from './Home.css'
import MainStore from '../../Stores/MainStore'
import {browserHistory} from 'react-router-dom'
import plus from '../../Images/plus.png'
import logo from '../../Images/logo.png'

export default class index extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
    	places: MainStore.state.cities
    }
  }

  render() {
  	const {places} = this.state
    return (
      <div className={styles.home}>
      	<div className={styles.top}>
      		<img src={logo} alt=""/>
      		<h3>Find out what’s popping in your local city, today.</h3>
      		<span>Choose City</span>
      	</div>
      	<div className={styles.placesList}>
      		{places.map((place)=>{
      			return (
      				<div onClick={()=>{
      					this.props.history.push('/'+place.name)
      				}}>
      					<div className={styles.backgroundImage}>
      						<img src={place.img} alt=""/>
      					</div>
      					<h3>{place.name}</h3>
      				</div>
      				)
      		})}
      	</div>
      	<div className={styles.addNew}>
      		<h3>Next City?</h3>
      		<p>Vote for  where we go</p>
      	</div>
      </div>
    );
  }
}
