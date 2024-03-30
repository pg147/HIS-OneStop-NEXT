import SearchBar from "../searchField/searchField";
import CreatePost from "../createPostButton/createPostButton";

export default function GridList() {
    return (
        <>
            <div className="grid grid-cols-1">
                <SearchBar className = "grid-item"/>
                <CreatePost className = "grid-item"/>
            </div>
        </>
    );
}