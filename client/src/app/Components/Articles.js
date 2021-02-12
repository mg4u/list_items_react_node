import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getArticles, getArticle, deleteArticle, emptyMessage, emptySuccess } from '../js/actions'
import { Button, Modal } from 'react-bootstrap';
import { ArticleCard } from './ArticleCard'

class Articles extends Component {

  constructor(props) {
    super(props);

    this.state={
      deleteDialog: false,
      title: this.props.mine ? 'My Articles' : 'Articles'
    }

  }

  /**
   * visit , edit 
   * @param {Article} article 
   * @param {string} action 
   */
  articleAction (article, action) {
    // alert(action)
    if ('delete' == action) {
      this.setState({ article_id: article.id, deleteDialog: true })
      return
    }
    let path = ''
    switch (action) {
      case 'edit':
        path= '/article_form/'
        break;

      default:
        path= '/article/'
        break;
    }
    path= path + article.id;

    this.props.getArticle(article)
    this.props.changePage(path)
  }

  /**
   * Actions on confirmation dialog
   * @param bool do action or close the modal
   */
  setAction (doAction) {
    this.setState({ deleteDialog: false })
    if (doAction) {
      this.props.deleteArticle(this.state.article_id)

    }
  }

  componentDidMount() {
    this.props.getArticles(this.props.mine)
  }
  
  async componentDidUpdate(prevProps, prevState) {
    if(this.props.success_message){
        this.setState({ disabled: false, success_message: this.props.success_message })
        this.props.getArticles(this.props.mine)
        this.props.emptySuccess()
    }

    if(this.props.message){
        this.setState({ disabled: false, message: this.props.message })
        this.props.emptyMessage()
    }
  }

  render() {
    return (
      <div className="container">
        <h1> {this.state.title} </h1>

        {this.state.message?(
          <p className="alert alert-danger">
              <code>{this.state.message}</code>.
          </p>
        ):null}

        {this.state.success_message?(
          <p className="alert alert-success">
              <code>{this.state.success_message}</code>.
          </p>
        ):null}

        {this.props.articles.map( item=> (
          <ArticleCard key={item.id} click={(action) => this.articleAction(item, action)} enableAction={this.props.match.path == "/mine"} item={item} />
        ))}


        <Modal show={this.state.deleteDialog} onHide={()=> this.setAction(false) }>
          <Modal.Header closeButton>
            <Modal.Title>Confirmatio</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, Are you sure you want to delete this article?!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=> this.setAction(false) }>
              Cancel
            </Button>
            <Button variant="primary" onClick={()=> this.setAction(true) }>
              Procced 
            </Button>
          </Modal.Footer>
        </Modal>


      </div>
    )

  }
}


const mapStateToProps = ({ articles, user_data, message, success_message }) => ({
  articles,
  user_data,
  message,
  success_message
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (path) => push(path),
  getArticles: ( mine ) => getArticles( mine ),
  getArticle: ( article ) => getArticle( article ),
  deleteArticle: ( article_id ) => deleteArticle( article_id ),
  emptySuccess: ( ) => dispatch(emptySuccess( ) ),
  emptyMessage: ( ) => dispatch(emptyMessage( ) ),
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Articles)