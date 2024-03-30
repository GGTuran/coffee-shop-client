import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);  

  const handleDelete = id => {
    // make sure user is confirmed to 
    fetch(`https://coffee-store-server-qjlsts5kc-ggturans-projects.vercel.app/user/${id}`,{
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data => {
        if(data.deletedCount > 0) {
            console.log('Deleted successfully');
            // remove the deleted
            const remainingUsers = users.filter( user => user._id !== id);
            setUsers(remainingUsers);
        }
    })
    
  }

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
              <th>Last Logged In</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                users.map(user =>    
                <tr key={user._id}>
                    <th>{user.email}</th>
                    <td>{user.email}</td>
                    <td>{user._id}</td>
                    <td></td>
                    <td>
                        <button 
                        onClick={() => handleDelete(user._id)}
                        className="btn btn-ghost">Delete</button>
                    </td>
                    
                    
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
