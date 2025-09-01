import "./Comment.css";


export default function Comment(props: any) {

    const { comment } = props;
        
    return (
        <div className="Comment">

            <h4>{comment.author}</h4>

            <p>{comment.body}</p>

        </div>
    )
}
