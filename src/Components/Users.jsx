import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUser = useLoaderData();

  return (
    <div>
      <h2>Users:{loadedUser.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Users</th>
              <th>Email</th>
              <th>ID</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                loadedUser.map(user =>    
                <tr key={user._id}>
                    <th>{user.email}</th>
                    <td>{user._id}</td>
                    
                    
                  </tr>)
            }
       
            {/* row 2 */}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
