import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar';
import Postsection from '../../components/Postsection';
import Profilecard from '../../components/Profilecard';
import Suggestions from '../../components/Suggestions';

function Home() {
  return (
    <div className="App">

      <Logo />
      <Profilecard />
      <Navbar />
      <Suggestions />
      <Postsection />
    </div>
  );
}

export default Home;
