import * as React from "react";


export default function Index() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className="App">

      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
                <div className="card_item" key={user.id}>
                     <div className="card_inner">
                                <div class="grid-container">
                                <img key={user.avatar} src={user.avatar} />         
                <p>
                  <strong>{user.first_name}</strong>
                  <br/>
                  {user.email}
                </p>
                
                
              </div>
              </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
