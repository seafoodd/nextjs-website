import { addPost } from "@/lib/actions";
import { deletePost } from "@/lib/actions";

const ServerActionTestPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <input type="text" placeholder="imgLink" name="imgLink" />
        <button>Create post</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="postId" name="id" />
        <button>Delete post</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
