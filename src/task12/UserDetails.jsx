import { useParams } from "react-router-dom";


function UserDetails(){


const {id} = useParams();



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



const user = users.find(
(item)=>item.id === Number(id)
);



return(


<div className="details">


<h2>User Details</h2>


<h3>Name : {user.name}</h3>

<p>Email : {user.email}</p>

<p>Phone : {user.phone}</p>

<p>Address : {user.address}</p>

<p>City : {user.city}</p>


</div>


)


}


export default UserDetails;