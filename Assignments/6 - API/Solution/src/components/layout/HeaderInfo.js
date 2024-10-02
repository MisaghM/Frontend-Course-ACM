import { Link } from 'react-router-dom';

function HeaderInfo() {
  const username = localStorage.getItem('username');
  const role = localStorage.getItem('role');

  return (
    <div className="d-flex align-items-center">
      {username && (
        <p className="m-0 pe-1 pe-sm-3 text-center">Welcome, {username}!</p>
      )}
      {role === 'client' && (
        <Link to="/customer"><button className="rounded-3 border-0 text-white">My Reservations</button></Link>
      )}
      {role === undefined && (
        <Link to="/login"><button className="rounded-3 border-0 text-white">Login!</button></Link>
      )}
    </div>
  );
}

export default HeaderInfo;
