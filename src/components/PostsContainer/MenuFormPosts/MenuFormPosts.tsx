import NewPostsButton from "./NewPostsButton/NewPostsButton";
import PopularPostsButton from "./PopularPostsButton/PopularPostsButton";
import RisingPostsButton from "./RisingPostsButton/RisingPostsButton";

export default function MenuFormPosts() {



    return (
        <div className='MenuFormPosts mx-1'>

            <form action="/">
            
                <div className="topics">

                    <div>
                        <NewPostsButton />
                    </div>

                    <div>
                        <PopularPostsButton />
                    </div>

                    <div>
                        <RisingPostsButton />
                    </div>

                </div>
            
            </form>

        </div>
    )
}
