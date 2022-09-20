import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar';
import Postsection from '../../components/Postsection';
import Suggestions from '../../components/Suggestions';
import ProfileBig from '../../components/ProfileBig';
import './style.css'

function ProfilePage() {
  return (
    <div className="App">

      <Logo />
      <Navbar />
      <Suggestions />
      <ProfileBig />
      <Postsection className="posts" />
    </div>
  );
}

export default ProfilePage;
