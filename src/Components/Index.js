import React, { useEffect, useState } from 'react'

const Index = () => {

    const [users, setUsers] = useState([]);



    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        const FinalData = await response.json();
        setUsers(FinalData)
    }



    useEffect(() => {
        getUsers();
    }, [])


    return (
      
            <div className="container">
               
                {
                    users.map((curElem) => {
                        return (

                            <div className="card_item" key={curElem.id}>
                                <div className="card_inner">
                                <div class="grid-container">
                                <div class="grid-item"> <img src={curElem.avatar_url} alt="" /> </div>
                                <div class="grid-item"><div className="userName">{curElem.login}</div> </div>
                                <div class="grid-item"><div className="userUrl">{'johnsame@gmail.com'}</div> </div>
                                   </div>
                                 
                                </div>

                            </div>
                        )
                    })
                }

            </div>              


    )
}

export default Index;

