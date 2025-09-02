import { getTimeSinceEpochTimestamp } from "../../../app/functions";
import { UseAppDispatch } from "../../../app/hooks";
import { reddit_url } from "../../../app/variables";
import { fetchComments } from "../../../features/posts/fetchComments";
import { toggleCommentsContainer } from "../../../features/posts/postsSlice";
import Comment from "./CommentsContainer/Comment/Comment";
import "./Post.css";

export default function Post(props: any) {

    const { post } = props;

    const dispatch = UseAppDispatch();

    const handleClick = () => {

        dispatch(toggleCommentsContainer({id: post.id}));

        if (post.commentsArray.length === 0) {

            dispatch(fetchComments({
                fetchUrl: `${reddit_url}/r/${post.subreddit}/comments.json`, 
                newName: post.subreddit
            }))



        }

       

    }

    return (
        <div className='Post'>

            <div className="wrapper">

                <div className="container">

                    <div className="ji-center">
                        <div>
                            <button type="submit">+</button>
                        </div>

                        <div>
                            <span>{post.ups}</span>
                        </div>

                        <div>
                            <button type="submit">-</button>
                        </div>
                    </div>

                    <div className="main">

                        <h3>{post.title}</h3>
                        <img src={post.url} alt={`photo by ${post.author} not available`} className="js-center" />


                    </div>
                </div>


                <div className="post-footer flex between w-90">
                    <div className="post-author">
                        <span>{post.author}</span>
                    </div>

                    <div className="post-since-posted">
                        <span>{getTimeSinceEpochTimestamp(post.created)}</span>
                    </div>

                    <div className="post-comments" onClick={handleClick}>
                        <span>{`${post.num_comments} `}</span><i className="fa-solid fa-comment"></i>
                    </div>
                </div>

                {post.commentsAreVisible && <div>

                    {post.commentsArray.map((comment: any) => <Comment 
                        comment={comment}
                        key={comment.id}
                    />)}

                </div>} 

            </div>
        </div>
    )
}
