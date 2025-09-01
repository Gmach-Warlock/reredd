import { getHoursSinceEpochTimestamp } from "../../../app/hooks";
import "./Post.css";

export default function Post(props: any) {

    const { post } = props;

    const handleClick = () => {

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
                        <span>{getHoursSinceEpochTimestamp(post.created)}</span>
                    </div>

                    <div className="post-comments" onClick={handleClick}>
                        <span>{`${post.num_comments} `}</span><i className="fa-solid fa-comment"></i>
                    </div>
                </div>

            </div>
        </div>
    )
}
