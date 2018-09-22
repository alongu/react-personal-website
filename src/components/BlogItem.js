import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

export class BlogItem extends React.Component {
    constructor(props) {
        super(props);
    }

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
                    identifier="alon_guterman"
                    title="Controlling RC car by a phone application and RPi 2 Thread"
                    //url="http://localhost:8080/projects/remoteControlledCar"
                    category_id="1122546812"
                    onNewComment={this.handleNewComment} />
                />
            </div>
        );
    }
}
export default BlogItem;