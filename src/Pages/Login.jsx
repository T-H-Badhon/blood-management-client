import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleSubmit=event=>{
        event.preventDefault()
        const form=event.target 
        const email=form.email.value 
        const password=form.password.value
        console.log(email,password)
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
        </div>
    );
};

export default Login;