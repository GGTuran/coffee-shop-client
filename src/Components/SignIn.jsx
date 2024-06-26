// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const SignIn = () => {

        
        const { signInUser } = useContext(AuthContext);

    // const { signInUser } = useContext(AuthContext);


    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
       
        signInUser(email, password)
        .then((result) => {
            console.log(result.user);
            const user ={
                email,
                lastLoggedAt: result.user?.metadata?.lasSignInTime
            }

            fetch('https://coffee-store-server-qjlsts5kc-ggturans-projects.vercel.app/user',{
                method: 'PATCH',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(user)
            }
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
            )

        }).catch((err) => {
            console.log(err)
        });

    //     signInUser(email, password)
    //   .then((result) => {
    //         console.log(result.user); 
    //   }).catch((err) => {
    //     console.log(err)
    //   });

    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={ handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignIn;