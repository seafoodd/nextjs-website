// TEMPORARY DATA

const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "John Smith",
  },
];

const posts = [
  {
    id: 1,
    userId: 1,
    body: ".....",
    title: "Post 1",
  },
  {
    id: 2,
    userId: 1,
    body: ".....",
    title: "Post 2",
  },
  {
    id: 3,
    userId: 2,
    body: ".....",
    title: "Post 3",
  },
  {
    id: 4,
    userId: 3,
    body: ".....",
    title: "Post 4",
  },
];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  return posts.find((post) => post.id === parseInt(id));
};

export const getUser = async (id) => {
  return users.find((user) => user.id === parseInt(id));
}