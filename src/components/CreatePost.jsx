import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = ({ setSelectedTab }) => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
    setSelectedTab("Home");
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="user-Id" className="form-label">
          User-ID
        </label>
        <input
          type="text"
          ref={userIdElement}
          rows="4"
          className="form-control"
          id="user-Id"
          placeholder="Enter your user id here"
        />
      </div>

      <div class="mb-3">
        <label for="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="Enter the title of your post"
        />
      </div>

      <div class="mb-3">
        <label for="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div class="mb-3">
        <label for="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post?"
        />
      </div>

      <div class="mb-3">
        <label for="tags" className="form-label">
          Hastags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter your tags using space"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
