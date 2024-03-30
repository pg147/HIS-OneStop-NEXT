import SearchBar from "../searchField/searchField";
import CreatePost from "../createPostButton/createPostButton";
import AfterPost from "../uiComponents/afterPostCard/afterPostCard";
import "./gridList.css"

export default function GridList() {
    return (
        <>
            <div className="max-h-fit m-auto grid grid-cols-1 gap-6">
                <SearchBar className = "grid-item"/>
                <CreatePost className = "grid-item"/>
                <AfterPost className = "grid-item" />
                <AfterPost className = "grid-item" />
                
            </div>
        </>
    );
}