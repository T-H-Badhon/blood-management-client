import React, { useContext } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const { logIn, googleLogIn, facebookLogIn } = useContext(AuthContext)
    const google =()=>{
        googleLogIn()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const facebook =()=>{
        facebookLogIn()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }


    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        logIn(email,password)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })

        event.target.reset()
    }
    return (
        <div className=' pt-32 md:pt-40' >
            <form onSubmit={handleSubmit} className="flex max-w-md flex-col mx-auto bg-white p-4 rounded-lg gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            color="failure"
                            htmlFor="email"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email"
                        placeholder="your@email.com"
                        required
                        type="email"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            color="failure"
                            htmlFor="password"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password"
                        required
                        type="password"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label color="failure" htmlFor="remember">

                        Remember me
                    </Label>
                </div>
                <Button color="failure" type="submit">
                    Submit
                </Button>
                <h1>Create new account? <Link className='text-red-500' to='/registration'>Go To Registration</Link> </h1>
            </form>
            <div className='md:flex justify-center items-center m-4'>
                <Button onClick={google} className='bg-white m-2'><h1 className='text-red-500'>Sign In with Google</h1></Button>
                <Button onClick={facebook} className='bg-white m-2'><h1 className='text-red-500'>Sign In with FaceBook</h1></Button>
            </div>
        </div>
    );
};

export default Login;