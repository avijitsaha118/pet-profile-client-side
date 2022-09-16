import React from 'react';
import { useForm } from "react-hook-form";

const AddPet = (event) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/vetinfo`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

            });
    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Add Your Personal Details</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' required {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Article' required {...register("description")} />
                <input className='mb-2' placeholder='Years of Experience' type="text" required {...register("experience")} />
                <input className='mb-2' placeholder='Location' type="text" {...register("address")} />
                <input className='mb-2' placeholder='Speciality' type="text" {...register("speciality")} />
                <input className='mb-2' placeholder='Email' type="text" {...register("email")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Submit Form" />
            </form>
        </div>
    );
};

export default AddPet;