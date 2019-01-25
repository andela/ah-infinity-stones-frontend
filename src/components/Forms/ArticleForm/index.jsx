import React, {Component} from 'react'
import { connect } from 'react-redux';
import './articleCreation.scss'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import EditorToolbar from './EditorToolbar'
import {createArticleAction} from '../../../redux/actions/articleActions'


class ArticleCreation extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
      }
    handleSubmit(event) {
        event.preventDefault();
        let article = {
            "title": document.getElementById('articleTitle').value,
            "description": document.getElementById('articleDescription').value,
            "body": document.getElementById('articleBody').value,
            "tag": [document.getElementById('articleTags').value]
        }
        this.props.createArticleAction(article);
        alert('An article was submitted: '+document.getElementById('articleTitle').value);
        
      }
    render(){
        return (

            <div>
            <div className="container">
                
                <form id="articleForm" method="post" encType="multipart/form-data" onSubmit= {this.handleSubmit}>
                <ul className="flex-form">
                    <li>
                    <label htmlFor="articleTitle">Title</label>
                    </li>
                    <li>
                    <input type="text" name="articleTitle" id="articleTitle" placeholder="Title"/>
                    </li>
                    <li>
                    <label htmlFor="articleDescription">Description</label>
                    </li>
                    <li>
                    <textarea name="articleDescription" id="articleDescription" placeholder="Add a two-line version of your story." ></textarea>
                    </li>
                    <li>
                    <label htmlFor="articleBody">Body</label>
                    </li>
                    <div id="toolbar-container"></div>
                    <li>
                    <EditorToolbar />
                        
                    </li>
                    
                    <li>
                    <label htmlFor="articleTags">Tags</label>
                    </li>
                    <li>
                    <input type="text" name="articleTags" id="articleTags" placeholder="Tags"/>
                    </li>
                    <li>
                    <label htmlFor="articleAttachments">Attachments</label>
                    </li>
                    <li>
                    <input type="file" name="articleAttachments" accept="audio/*,video/*,image/*"/>
                    </li>
                    <li>
                    <button type="submit" id="publishBtn">Submit</button>
                    </li>
                </ul>
                </form>
                
            </div>
            </div>
        )
}
}
const mapStateToProps = (state) => {
  return {
    article: state.article
    
  }
    
}

const mapDispatchToProps = { createArticleAction } 


export default connect(mapStateToProps, mapDispatchToProps)(ArticleCreation)
