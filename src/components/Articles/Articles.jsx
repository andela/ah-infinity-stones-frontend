import React, {Component} from 'react'
import { connect } from 'react-redux';
import {requestIncrement}  from '../../redux/actions/articleActions';

class Articles extends Component {
    render(){
        return (
            <div>
              <h1>Article Counter</h1>
                <p>Count : {this.props.count} </p>
                <button onClick={this.props.requestIncrement}>Add Article</button>
            </div>
          )
    }
  
}
const mapStateToProps = state => ({ count: state.articleReducer.count });
const actionCreators = { requestIncrement };

export default connect(mapStateToProps, actionCreators)(Articles); 
