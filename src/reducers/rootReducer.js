const initState = {
  posts: [
    { id: '1', title: 'one', body: 'hello from the other side' },
    {
      id: '2',
      title: 'two',
      body: 'abchwejudbipwhdybgtykhnosihdbgwuhdbyfgtgrtg'
    },
    {
      id: '3',
      title: 'three',
      body: 'rgrgeewhwejudbipwhdybgtykhnosihdbgwuhdby'
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
