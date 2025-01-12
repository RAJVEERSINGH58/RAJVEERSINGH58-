import { useReducer, createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList
  if(action.type ==='DELETE_POST'){
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
  } else if(action.type ==='ADD_POST'){
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }
    })
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload:{
        postId: postId
      },
    })
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to My Hometown",
    body: "Hii Friends, I am Going to my hometown Ballia. I am very excited to see my family and friends.",
    reactions: 15,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Passed the Exam",
    body: "I successfully passed my exam! It feels great to have achieved this milestone.",
    reactions: 25,
    userId: "user-9",
    tags: ["achievement", "celebration", "Graduating"],
  },
];

export default PostListProvider;
