import SearchBar from "./SearchBar/SearchBar";
import ThemeButton from "./ThemeButton/ThemeButton";
import "./Header.css";

export default function Header() {



    return (
        <header>

            <div><span>ReRedd</span></div>
            <div><SearchBar /></div>
            <div><ThemeButton /></div>

        </header>
    )
}
