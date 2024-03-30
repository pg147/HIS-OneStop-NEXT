import PostInteractionBar from "../postInteractions/postInteractions";
import { Card } from "@/components/ui/card";
import UploaderDetails from "../uploaderDetails/uploaderDetails";
export default function AfterPost(props) {
    return(
        <>
            <Card className = "max-h-fit w-[700px] p-4 bg-[#f5f5f5] border-2 border-[#D9D9D9] rounded-3xl">
                <UploaderDetails/>
                <Card className = "bg-white border-2 p-4 mb-6">
                    {/* <p>{props.caption}</p> */}
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores veniam aperiam delectus dicta a? Est voluptatum maiores vero nemo ab non explicabo enim eos exercitationem, perferendis, ipsum, iste nostrum similique tempore repudiandae. Esse, rerum quos repellendus quo, ducimus saepe cumque laborum omnis ipsam nesciunt dolores, obcaecati non tempora culpa labore voluptate. Impedit dolores rerum, dolor, modi officiis laudantium quo similique tempora illum ipsa adipisci quisquam quos repellat. Dicta soluta quis suscipit est doloribus unde dolore molestias atque quam nam. Repellendus maxime numquam amet delectus vitae nemo sint sequi, quia ducimus, iusto dolor magnam assumenda! Laborum quasi voluptatem placeat ea amet.
                    </p>
                </Card> 
                <PostInteractionBar />
            </Card>            
        </>
    );
}