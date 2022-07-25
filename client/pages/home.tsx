import React, { useEffect } from 'react';
import Main from '../components/Home/Main';
import { PostProvider, usePostcontext } from '../context/store/Post';
const home = () => {
  return (
    <PostProvider>
      <Main />
    </PostProvider>
  );
};

export default home;
