import { useState } from 'react';
import Comments from '../../components/Comments';
import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar';
import Postsection from '../../components/Postsection';
import Profilecard from '../../components/Profilecard';
import Suggestions from '../../components/Suggestions';

function Home() {

  const [isCommentBoxOpen, setCommentBoxOpen] = useState(true);

  const commentToggle = () => {
    setCommentBoxOpen(!isCommentBoxOpen);
  };

  return (
    <div className="App">

      <Logo />
      <Profilecard />
      <Navbar />
      <Suggestions />
      <Comments isCommentBoxOpen = {isCommentBoxOpen} commentToggle = {commentToggle} />
      <Postsection commentToggle = {commentToggle}  />
    </div>
  );
}

export default Home;
