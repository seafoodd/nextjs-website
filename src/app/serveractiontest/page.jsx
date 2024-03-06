import PostForm from "@/components/postForm/postForm";
import { addPost } from "@/lib/actions";
import { deletePost } from "@/lib/actions";

const ServerActionTestPage = () => {
  return (
    <div>
      <PostForm userId={session.user.id} />
    </div>
  );
};

export default ServerActionTestPage;
