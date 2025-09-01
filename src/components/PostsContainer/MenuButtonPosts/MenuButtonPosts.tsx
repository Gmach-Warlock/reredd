import { UseAppDispatch } from "../../../app/hooks"
import { togglePostsMenu } from "../../../features/posts/postsSlice";

export default function MenuButtonPosts() {

    const dispatch = UseAppDispatch();

    const handleClick = () => {
        dispatch(togglePostsMenu());
    }

    return (
        <div 
            className="MenuButtonPosts"
            title="menu-button-posts"
            onClick={handleClick}
        >

            <i className="fa-solid fa-bars"></i>

        </div>
    )
}
