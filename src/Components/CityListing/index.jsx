import React from 'react';
import styles from './CityListing.css'
import clyde from '../../Images/clyde.png'
import hamburger from '../../Images/hamburger.png'
import logo from '../../Images/logo.png'
import MainStore from '../../Stores/MainStore'


export default class index extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
    	articles: MainStore.state.articles
    }
  }

  render() {
  	const {articles} = this.state
    return (
      <div>
      	<div className={styles.background}>
      		<img src={clyde} alt=""/>
      	</div>
      	<div className={styles.menu}>
  			<img src={logo} alt=""/>
      		<img onClick={()=>{
      			this.props.history.push('/')
      		}} src={hamburger} alt=""/>
      	</div>
      	<div className={styles.top}>
      		<h2>{this.props.match.params.city}</h2>
      		<h3>Wednesday, 22 March 2017</h3>
      	</div>
      	<div className={styles.listing}>
      		<div>
      		  <h2>Top Pops</h2>
      		  <span>Get Notified</span>
      		</div>
      		{articles.map((article, index)=>{
      			return (
      				<div onClick={()=>{
      					this.props.history.push('/'+this.props.match.params.city+'/'+article.id)
      				}}>
      					<h3><span>{index+1}</span></h3>
      					<div>
      						<h2>{article.headline}</h2>
      						<p>
      							<span>Travel</span>
      							<span>Yesterday</span>
      						</p>
      					</div>
      				</div>
      				)
      		})}
      		<div>
      			<h3><span></span></h3>
      			<div>
      				<h2>More</h2>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}
