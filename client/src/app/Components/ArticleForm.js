import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'

import { addArticle, emptySuccess, emptyMessage, getArticle } from "../js/actions/index";
import { validate } from '../js/helpers/validate';

export class ArticleFormComponent extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      disabled: false,
      message: '',
      success_message: '',
      article_id: 0,
      title: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  /**
   * Handle changes in fields to set new values 
   * @param  event 
   */
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  /**
   * Handel Submit to add Article
   * @param  event 
   */
  async handleSubmit(event) {
    event.preventDefault();
    const { article_id: id, title, description } = this.state;

    /**
     * Check data
     */
    const validateTitle= validate(title, '', 'Title')
    if(true != validateTitle)
    {
      await this.setState({ message: validateTitle})
      return false
    }

    const validateDescription= validate(description, '','Description')
    if(true != validateDescription)
    {
      await this.setState({ message: validateDescription})
      return false
    }
    
    /**
     * Start The process
     */
    this.setState({ disabled: true, message: '' })

    this.props.addArticle( {id, title, description} );
  }
  
  /**
   * Get Article from route or store
   */
  async getArticle(id){
    /**
     * GEt article if this is an edit article form
     */

    if( id  ){
        // Get the article from the store
        let { article } = this.props
        
        // Get from the articles in th store if it is not the current article in the store
        if (id != article.id) {
            article= this.props.articles.filter(item=> item.id == id) [0]
        }

        if(article && article.id){
            await this.setState ({
                article_id: id,
                title: article.title,
                description: article.description
            })
        }
    } else {
        await this.setState ({
            article_id: 0,
            title: '',
            description: ''
        })

    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    this.getArticle(id)
  }
  
  async componentDidUpdate(prevProps, prevState) {
    if(this.props.success_message){
        this.setState({ disabled: false, success_message: this.props.success_message })
        this.props.emptySuccess()
    }

    if(this.props.message){
        this.setState({ disabled: false, message: this.props.message })
        this.props.emptyMessage()
    }

    /**
     * To fix navigate to add new article if the current route is edit an article
     */

    if(prevProps.article.id != this.props.article.id){
        console.warn('rerender');
        this.getArticle()
    }
  }
  //
  render() {
    
    return (
      <div className="container">
        <div className="my-auto mt-10">
          <div class="card align-middle">
            <div class="card-header">
              Article
            </div>
            <div class="card-body">
              <form onSubmit={this.handleSubmit}>

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

                <div className="form-group">
                  <label for="exampleInputTitle1">Title</label>
                  <input
                    disabled={ this.state.disabled }
                    type="text"
                    className="form-control"
                    id="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label for="exampleInputDescription1">Description</label>
                  <textarea
                    disabled={ this.state.disabled }
                    type="text"
                    className="form-control"
                    id="description"
                    onChange={this.handleChange}
                    value={this.state.description}
                    />
                </div>

                <button type="submit" disabled={ this.state.disabled } className="btn btn-success btn-lg">
                  SAVE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: ( data ) => dispatch(addArticle( data ) ),
    emptySuccess: ( ) => dispatch(emptySuccess( ) ),
    emptyMessage: ( ) => dispatch(emptyMessage( ) ),
  };
}
const mapStateToProps = ( { article, articles, message, success_message } ) => {
    // console.clear()
    // console.warn({article});
    
    return { 
        message,
        article,
        articles,
        success_message
    };
};
const ArticleForm = connect(mapStateToProps, mapDispatchToProps)(ArticleFormComponent);
export default ArticleForm;
