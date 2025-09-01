import Comment from "./Comment/Comment";
import "./CommentsContainer.css";

export default function CommentsContainer(props: any) {

    const { commentsArray } = props;

    return (
        <div className="CommentsContainer">

            {commentsArray.map((comment: any) => <Comment 
                comment={comment}
            />)}

        </div>
    )
}
