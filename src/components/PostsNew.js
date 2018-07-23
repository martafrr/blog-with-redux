import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field 
                    label="Post content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    
    if(!values.title) {
        erros.title = 'Enter a title.';
    }
    if(!values.categories) {
        erros.categories = 'Enter some categories.';
    }
    if(!values.content) {
        erros.categories = 'Enter some content.';
    }
    
    return erros;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);