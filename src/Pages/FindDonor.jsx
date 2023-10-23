import React from 'react';
import { Button, Label, Radio } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
const FindDonor = () => {

    const navigate=useNavigate()

    const handleSubmit=(event)=>{
        event.preventDefault()
        const bG=event.target.bloodGroup.value 
        navigate(`/donorList/${bG}`)
        event.target.reset()
    }

    return (
        <div className='pt-32 md:py-44'>
            <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4 p-4 rounded-lg bg-white mx-auto">
            <div>
                    <fieldset
                        className="grid grid-cols-4 max-w-md gap-4"
                        id="radio"
                    >
                        <legend className="mb-4 text-2xl text-red-500">
                            Choose Blood Group
                        </legend>
                        <div className="flex items-center gap-2">
                            <Radio

                                id="A+"
                                name="bloodGroup"
                                value="A+"
                            />
                            <Label htmlFor="A+">
                                A+
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="A-"
                                name="bloodGroup"
                                value="A-"
                            />
                            <Label htmlFor="A-">
                                A-
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="B+"
                                name="bloodGroup"
                                value="B+"
                            />
                            <Label htmlFor="B+">
                                B+
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="B-"
                                name="bloodGroup"
                                value="B-"
                            />
                            <Label htmlFor="B-">
                                B-
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="O+"
                                name="bloodGroup"
                                value="O+"
                            />
                            <Label
                                htmlFor="O+"
                            >
                                O+
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="O-"
                                name="bloodGroup"
                                value="O-"
                            />
                            <Label
                                htmlFor="O-"
                            >
                                O-
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="AB+"
                                name="bloodGroup"
                                value="AB+"
                            />
                            <Label
                                htmlFor="AB+"
                            >
                                AB+
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="AB-"
                                name="bloodGroup"
                                value="AB-"
                            />
                            <Label
                                htmlFor="AB-"
                            >
                                AB-
                            </Label>
                        </div>
                    </fieldset>
                </div>
                <Button color='failure' type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default FindDonor;