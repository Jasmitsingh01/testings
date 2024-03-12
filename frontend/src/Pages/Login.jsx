import { Link } from "react-router-dom";

function Login() {
    const SubmitHandler=(e)=>{
      const formdata=new FormData(e);
      console.log(formdata)
    }
  return (
<form onSubmit={(e)=>SubmitHandler(e)} >
    <div>
        <label htmlFor="fullname">Full Name</label>
    <input type="text" placeholder="Enter Full Name" name="fullname" id="fullname" />
    </div>
    <div>
        <label htmlFor="email">Eamil</label>
    <input type="email" placeholder="Enter email" name="email" id="email" />
    </div>
    <div>
        <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password" placeholder="Password"  />
    </div>
    <button type="sumbit">Singin</button>
    <Link to={'/singup'}>Do'nt have account ? Singin</Link>

</form>
    )
}

export default Login