import { useState, useEffect } from "react";
// 1.
import { Link, useSearchParams } from "react-router-dom";

function getCurrentPage(val) {
  let value = Number(val);

  if (typeof value !== "number" || value <= 0) {
    value = 1;
  }
  if (!value) {
    value = 1;
  }
  return value;
}

function Users() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const initPage = getCurrentPage(searchParams.get("page"));
  const [page, setPage] = useState(initPage);

  useEffect(() => {
    setSearchParams({ page });
  }, [page]);

  const getData = () => {
    setLoading(true);

    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getData();
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong.. please refresh</h1>;
  }

  console.log(typeof searchParams.get("page"));
  return (
    <>
      <h1>Users</h1>
      {data.map((user) => (
        <div key={user.id}>
          <img src={user.avatar} alt="prof-pic" />
          <p>
            <Link to={`/users/${user.id}`}>More Details..</Link>
            {/* /users/1 */}
            {/* /users/2 */}
            {/* /users/3 */}
            {/* /users/4 */}
          </p>
        </div>
      ))}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </button>
      <button>{page}</button>
      <button disabled={page === 2} onClick={() => setPage(page + 1)}>
        NEXT
      </button>
    </>
  );
}

export default Users;
