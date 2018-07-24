import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions/';

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;

        this.props.deletePost(id);
    }
    
    render() {
        const { post } = this.props;

        if(!post) {
            return <di>Loading...</di>
        }

        return (
            <div>
                <Link className="btn btn-primary"to="/">Back to index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.props.onDeleteClick.bind(this)}
                >   
                    Delete Post
                </button>
                <h3>{props.title}</h3>
                <h6>Categories: {props.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);