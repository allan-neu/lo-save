import React from 'react';
import styles from './Article.css'
import share from '../../Images/share.png'
import MainStore from '../../Stores/MainStore'
import coneheid from '../../Images/coneheid.jpg'
import arrow from '../../Images/arrow.png'
import glas from '../../Images/riverClyde.jpg'
import sampleAd from '../../Images/sampleAd.jpg'



export default class index extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
  	console.log(MainStore.state.articles.filter((e)=>{return e.id===props.match.params.articleId}))
    super(props);
    this.state = {
    	article: MainStore.state.articles.filter((e)=>{return e.id===props.match.params.articleId})[0]
    }
  }

  componentWillReceiveProps(nextProps) {
  	console.log('change')
  	this.setState({article: MainStore.state.articles.filter((e)=>{return e.id===nextProps.match.params.articleId})[0]})
  }

  render() {
  	const {article} = this.state
  	let moreImages = !!article.moreImages[0]
  	console.log(article)
    return (
      <div className={styles.article}>
      	<div onClick={()=>{
      		console.log(this.props)
      		this.props.history.push('/'+this.props.match.params.city)
      	}} className={styles.backButton}>
      		<img src={arrow} alt=""/>
      	</div>
      	{true ? (
      		<div className={styles.headerImage}>
      			<img src={article.mainImg.img} alt=""/>
      			<figcaption>{article.mainImg.caption}</figcaption>
      		</div>
      		) : ''}
      	<div className={styles.body}>
	      	<div className={styles.headline}>
	      		<div>
	      			<h2>{"No Cone for Duke's Statue"}</h2>
	      			<p>
		      			<span>by Gillian Macdonald</span>
		      			<span>5 days ago</span>
	      			</p>
	      		</div>
	      		<img src={share} alt=""/>
	      	</div>

	      	<div className={styles.text}>
	      		{moreImages ? (
	      			<div>
	      				{article.text.split('\n').map((e, index)=>{
	      					if (index<4) {
	      						return <p>{e+'\n'}</p>
	      					}
	      				})}
	      				<div className={styles.moreImages}>
	      					{article.moreImages.map((e)=>{
	      						return <div><img src={e} alt=""/></div>
	      					})}
	      				</div>
	      				{article.text.split('\n').map((e, index)=>{
	      					if (index>=4&&index<=7) {
	      						return <p>{e+'\n'}</p>
	      					}
	      				})}
	      				<div className={styles.ad}>
	      					<img src={sampleAd} alt=""/>
	      				</div>
	      				{article.text.split('\n').map((e, index)=>{
	      					if (index>=7) {
	      						return <p>{e+'\n'}</p>
	      					}
	      				})}
	      			</div>
	      			) : <p>{article.text}</p>}
	      	</div>
      	</div>

      	<div onClick={(e)=>{
      		let n = parseInt(this.props.match.params.articleId)+1
      		if (n===6) {
      			n = 1
      		}
      		this.props.history.push('/'+this.props.match.params.city+'/'+n)
      		document.getElementsByClassName(styles.article)[0].scrollTop = 0
      	}} style={{backgroundImage: 'url('+glas+')'}} className={styles.next}>

      		<div><span>2</span></div>
      		<div>
      			<span>Next pop</span>
      			<h3>Medical exam resit after 'collusion'</h3>
      		</div>
      	</div>
      </div>

    );
  }
}
