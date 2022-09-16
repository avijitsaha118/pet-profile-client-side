import React from 'react';
import useVets from '../hooks/useVets';
import './SelectedInfo.css';
import ShowInfo from './ShowInfo';
import ShowVetInfo from './ShowVetInfo';

const VetSections = () => {

    const [vets] = useVets();

    return (
        <>
            <h3 className='mt-4 text-center'>Find Your Veterinarian</h3>
            <div className='mt-4 info-container'>
                {
                    vets.map(vet => <ShowVetInfo
                        key={vet._id}
                        vet={vet}
                    >

                    </ShowVetInfo>)
                }
            </div>
        </>
    );
};

export default VetSections;