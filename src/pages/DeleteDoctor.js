// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInformation from '../hooks/useInformation';
import useVets from '../hooks/useVets';

const DeleteDoctor = () => {
    const [vets, setVets] = useVets();

    const navigate = useNavigate();

    const navigateAddNew = event => {
        navigate('/addvet');
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/vetinfo/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = vets.filter(vet => vet._id !== id);
                    setVets(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='mt-2 text-center'> Manage Inventories</h2>
            {
                vets.map(vet => <div key={vet._id}>

                    <>
                        <Table responsive="sm" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Pet Name </th>
                                    <th>speciality</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{vet.name}</td>
                                    <td>{vet.speciality}</td>
                                    <td>{vet.address}</td>
                                    <td><button className='btn btn-danger' onClick={() => handleDelete(vet._id)}>
                                        {/* <i><FontAwesomeIcon icon={faTrash} /></i> */}
                                        Delete</button></td>

                                </tr>

                            </tbody>
                        </Table>
                    </>

                </div>
                )
            }
            <button className='btn btn-success mt-5' onClick={navigateAddNew}>Add New Vet</button>

        </div>
    );
};

export default DeleteDoctor;