import { useEffect, useState } from "react";
// step 1
import { useParams, useNavigate, Link } from "react-router-dom";

function UserDetails() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const { user_id } = useParams();
  // step 2
  const navigate = useNavigate();

  const getData = () => {
    setLoading(true);
    fetch(`https://reqres.in/api/users/${user_id}`)
      .then((res) => res.json())
      .then((res) => setUser(res.data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong.. please refresh</h1>;
  }

  return (
    <div>
      <img src={user.avatar} alt="prof-pic" />
      <br />
      <p>
        {user.first_name} {user.last_name}
      </p>
      <p>{user.email}</p>
      {/* step 3 */}
      <button onClick={() => navigate("/users")}>
        GO TO USERS PAGE USING useNavigate hook
      </button>
      <Link to="/users">
        <button>GO TO USERS PAGE USING LINK</button>
      </Link>
    </div>
  );
}

export default UserDetails;
