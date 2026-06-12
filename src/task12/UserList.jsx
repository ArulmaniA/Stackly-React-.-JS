import { Link } from "react-router-dom";


function UserList() {


const users = [

{
id:1,
name:"Arulmani",
email:"arulmani@thestackly.com",
phone:"9876543210",
address:"Attur",
city:"Salem"
},

{
id:2,
name:"Arun",
email:"arun@gmail.com",
phone:"9876543210",
address:"Anna Nagar",
city:"Chennai"
},

{
id:3,
name:"Karthik",
email:"karthik@gmail.com",
phone:"8765432109",
address:"Gandhipuram",
city:"Coimbatore"
},

{
id:4,
name:"Priya",
email:"priya@gmail.com",
phone:"7654321098",
address:"Salem Main Road",
city:"Salem"
}

];


return (

<div className="container">


<h2>User List</h2>


{
users.map((user)=>(

<Link 
className="user"
key={user.id}
to={`/user/${user.id}`}
>

{user.name}

</Link>

))

}


</div>

)


}


export default UserList;