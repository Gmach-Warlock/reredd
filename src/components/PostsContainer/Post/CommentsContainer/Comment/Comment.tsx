import { UseAppSelector } from "../../../../../app/hooks";
import "./Comment.css";


export default function Comment(props: any) {

    const theme = UseAppSelector(state => state.theme.theme);
    const { comment } = props;
        
    return (
        <div className={`Comment-${theme}`}>

            <div className="flex between">

                <div>
                    <h4>{comment.author}</h4>
                </div>
                <div>
                    <span>How long ago?</span>
                </div>

            </div>

            <p>{comment.body}</p>

        </div>
    )
}
