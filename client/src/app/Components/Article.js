import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'

import { getArticle } from '../js/actions'

/**
 * This functional-based component is about render article page,
 * with side bar to display the articles in the blog
 * @param {object} props 
 */

const Article= (props) => {

  /**
   * Redirect to home page if there is no articles
   */
  if (!props.articles.length) {
    return <Redirect to='/' />
  }

  /**
   * Get article from articles if the article in the store is not the same article aid in the route
   */
   const { id } = props.match.params
  
   let { article } = props

  if (id != article.id) {
    article= props.articles.filter(item=> item.id == id) [0]
  }
  /**
   * To change the article in the redux store, and go to this new article route
   * @param {article} article 
   */
  
   const gotToArticle = (article) => {
    props.getArticle(article)
    props.changePage(article.id)
  }

  /**
   * Render what will be displayed on the screen
   */
  return (
    
  <div class="container-fluid text-center">    
    <div class="row content">
      <div class="col-sm-2 text-left sidenav">
        <h4> Auther Topics </h4>
        {props.articles.map(item=> article.user_id == item.user_id && article.id != item.id ? (
          <p><a href="javascript:;" onClick={() => gotToArticle( item ) }>{ item.title }</a></p>
        ): null )}
      </div>

      <div class="col-sm-8 text-left"> 
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </div>
    </div>
  </div>
)}


const mapStateToProps = ({ articles, article }) => ({
  articles,
  article,
})


const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (id) => push('/article/'+id),
  getArticle: ( article ) => getArticle( article ),
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article)