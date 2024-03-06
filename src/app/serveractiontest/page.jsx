import PostForm from "@/components/postForm/postForm";
import { addPost } from "@/lib/actions";
import { deletePost } from "@/lib/actions";
import { auth } from "@/lib/auth";

const ServerActionTestPage = () => {
  return (
    <div>
      <PostForm userId={session.user.id} />
    </div>
  );
};

export default ServerActionTestPage;
