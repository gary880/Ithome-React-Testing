import useFetchUsers from "../../utils/hooks/useFetchUsers";

const UserList = () => {

  const { users, loading } = useFetchUsers();

  return (
    <>
      <h1>Users</h1>
      {
        loading ?
          <p>loading...</p> :
          <>
            {users.map((user) => (
              <p key={user.id}>{user.username}</p>
            ))}
          </>
      }
    </>
  );

}


export default UserList;


