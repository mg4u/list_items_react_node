import React from 'react';
import { Route, Link } from 'react-router-dom'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Articles from './Articles'
import Article from './Article'
import Login from './Login';
import { logout, getArticle } from '../js/actions';
import ArticleForm from './ArticleForm';
import { Navbar, Nav, Button } from 'react-bootstrap';


const Routes = props => props.loggedIn == false ? <Login /> : (
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand to="/">Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link to="/">Home</Nav.Link> */}
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/mine">My Articles</Link>
        </Nav>
        <Link onClick={()=> props.getArticle({})} to="/article_form" className="btn btn-success float-right mr-3">Add Article</Link>
        <Button onClick={()=> props.logout()} className="btn btn-danger mr-3 float-right">Logout</Button>
      </Navbar.Collapse>
    </Navbar>


    <main>
      <Route exact path="/" component={Articles} />
      {/* <Route exact path="/mine" mine={true} component={Articles} /> */}
      <Route exact path="/mine" render={(props) => <Articles {...props} mine={true} />} />
      <Route exact path="/article/:id" component={Article} />
      <Route exact path="/article" component={Article} />
      <Route exact path="/article_form/:id?" component={ArticleForm} />
    </main>
  </div>
)



const mapStateToProps = ({ loggedIn }) => ({
  loggedIn: loggedIn
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addArticle: () => push('/article_form'),
  getArticle: () => getArticle({}), // empty article
  logout: () => logout(),
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Routes)