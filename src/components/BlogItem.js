import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

export class BlogItem extends React.Component {
    handleNewComment(comment) {
        console.log(comment.text);
    }

    render() {
        const { title, subtitle, summary, article } = this.props;

        return (
            <div className="content-container">
                <h1 className="post-preview__title">{title}</h1>
                <h2 className="post-preview__subtitle">{subtitle}</h2>
                <p className="post-page">{summary}</p>
                {article}
                <ReactDisqusComments
                    shortname="alongpersonalwebsite"
                    identifier="https://alonguterman.herokuapp.com/projects/remoteControlledCar"
                    title="title 1"
                    url="https://alonguterman.herokuapp.com/projects/remoteControlledCar"
                    category_id="123456"
                    onNewComment={this.handleNewComment}
                />
            </div>
        );
    }
}
export default BlogItem;