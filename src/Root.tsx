import { UseAppSelector } from "./app/hooks"
import Header from "./components/Header/Header"
import PostsContainer from "./components/PostsContainer/PostsContainer"
import SubredditsContainer from "./components/SubredditsContainer/SubredditsContainer"

export default function Root() {

    const theme = UseAppSelector(state => state.theme.theme)

    return (
        <div className='Root'>

            <div className={`theme-${theme}`}>

                <Header />

                <div className="main-container">

                    <div>
                        <PostsContainer />
                    </div>

                    <div>
                        <SubredditsContainer />
                    </div>

                </div>

            </div>
            
        </div>
    )
}
