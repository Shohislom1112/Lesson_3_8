import { useNavigate } from 'react-router-dom';

interface UserData {
  name: string;
  username: string;
}

interface ProfileProps {
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
}

const Profile: React.FC<ProfileProps> = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser({ name: '', username: '' });
    localStorage.setItem('user', JSON.stringify({ name: '', username: '' }));
    navigate('/login');
  };

  return (
    <div className="profile">
      <div className="pro">
        <h1 className="h1">{user.name}</h1>
        <h1 className="h1">{user.username}</h1>
        <button className="btn btn-outline-success" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
