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
                    shortname="alonguterman"
                    identifier="alonguterman"
                    title="title 123"
                    url="https://alonguterman.herokuapp.com/projects/remoteControlledCar"
                    onNewComment={this.handleNewComment}
                    category_id="123456"
                />
            </div>
        );
    }
}
export default BlogItem;