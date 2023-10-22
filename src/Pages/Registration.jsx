import React from 'react';
import { Button, Checkbox, Label, TextInput,Radio } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Registration = () => {
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target
        const userName=form.donorName.value
        const bloodGroup=form.bloodGroup.value
        const email=form.email.value
        const address=form.donorAddress.value 
        const password1=form.password1.value
        const password2=form.password2.value
        console.log(userName,bloodGroup,email,address,password1,password2)
    }
    return (
        <div className='pt-5 md:py-20'>
            <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4 p-4 rounded-lg bg-white mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            color="failure"
                            htmlFor="donorName"
                            value="Donor Name"
                        />
                    </div>
                    <TextInput
                        color="failure"
                        id="donorName"
                        placeholder="Enter name"
                        required
                        shadow
                        type="text"
                    />
                </div>
                <div>
                    <fieldset
                        className="grid grid-cols-4 max-w-md gap-4"
                        id="radio"
                    >
                        <legend className="mb-4">
                            Choose your blood group
                        </legend>
                        <div className="flex items-center gap-2">
                            <Radio
                                
                                id="A_P"
                                name="bloodGroup"
                                value="A_P"
                            />
                            <Label htmlFor="A_P">
                                A+
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="A_N"
                                name="bloodGroup"
                                value="A_N"
                            />
                            <Label htmlFor="A_N">
                                A-
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="B_P"
                                name="bloodGroup"
                                value="B_P"
                            />
                            <Label htmlFor="B_P">
                                B+
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="B_N"
                                name="bloodGroup"
                                value="B_N"
                            />
                            <Label htmlFor="B_N">
                                B-
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="O_P"
                                name="bloodGroup"
                                value="O_P"
                            />
                            <Label
                                htmlFor="O_P"
                            >
                                O+
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="O_N"
                                name="bloodGroup"
                                value="O_N"
                            />
                            <Label
                                htmlFor="O_N"
                            >
                                O-
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="AB_P"
                                name="bloodGroup"
                                value="AB_P"
                            />
                            <Label
                                htmlFor="AB_P"
                            >
                                AB+
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="AB_N"
                                name="bloodGroup"
                                value="AB_N"
                            />
                            <Label
                                htmlFor="AB_N"
                            >
                                AB-
                            </Label>
                        </div>
                    </fieldset>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            color="failure"
                            htmlFor="email"
                            value="Donor Email"
                        />
                    </div>
                    <TextInput
                        color="failure"
                        id="email"
                        placeholder="new@email.com"
                        required
                        shadow
                        type="email"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            color="failure"
                            htmlFor="address"
                            value="Donor address"
                        />
                    </div>
                    <TextInput
                        color="failure"
                        id="donorAddress"
                        placeholder="Enter present address"
                        required
                        shadow
                        type="text"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            color="failure"
                            htmlFor="password1"
                            value="password"
                        />
                    </div>
                    <TextInput
                        color="failure"
                        id="password1"
                        required
                        shadow
                        type="password"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            color="failure"
                            htmlFor="password2"
                            value="Repeat password"
                        />
                    </div>
                    <TextInput
                        color="failure"
                        id="password2"
                        required
                        shadow
                        type="password"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label
                        color="failure"
                        className="flex"
                        htmlFor="agree"
                    >
                        <p>
                            I agree with the
                        </p>
                        <a
                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                            href="/forms"
                        >
                            <p>
                                terms and conditions
                            </p>
                        </a>
                    </Label>
                </div>
                <Button color="failure" type="submit">
                    Register new account
                </Button>
                <h1>Already have account?<Link className='text-red-500' to='/login'> Go To Login</Link></h1>
            </form>

        </div>
    );
};

export default Registration;