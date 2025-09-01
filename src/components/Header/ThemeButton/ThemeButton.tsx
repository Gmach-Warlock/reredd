import { toggleTheme } from "../../../features/theme/themeSlice";
import { UseAppDispatch  } from "../../../app/hooks";

import "./ThemeButton.css";

export default function ThemeButton() {

    const dispatch = UseAppDispatch();
   
   
    const handleChange = () => {
       dispatch(toggleTheme());
    }

    return (
        <div className='ThemeButton'>

            <input 
                type="checkbox" 
                id="theme-toggle" 
                className="theme-toggle" 
                title='theme-toggle'
                onChange={handleChange}
               
            />
            <label 
                htmlFor="theme-toggle" 
                className="toggle-label"
            >
                <span className="ball"></span>
            </label>

        </div>
    )
}