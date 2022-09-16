import { useEffect, useState } from "react";

const useVets = () => {

    const [vets, setVets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/vetinfo')
            .then(res => res.json())
            .then(data => setVets(data))
    }, []);
    return [vets, setVets]
}
export default useVets;