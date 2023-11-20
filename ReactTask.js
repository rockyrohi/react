import React, { useState } from 'react';
import './Tax.css';

function ReactTask() {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [address, setAddress] = useState("");

    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, id, address);

        // Create an object with name, id, and address
        const newItem = { name, id, address };

        // Check if name, id, and address are not empty
        if (name && id && address) {
            // Add the new item to the list
            setList((list) => [...list, newItem]);

            // Reset the form fields
            setName("");
            setId("");
            setAddress("");
        }
    };

    return (
        <div className='App'>
            <h1>ReactTask</h1>
            <form onSubmit={handleSubmit}>
                Name :  <input name='name' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} /><br />
                ID : <input name='id' placeholder='id' value={id} onChange={(e) => setId(e.target.value)} /><br />
                Address : <input name='address' placeholder='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                <br />
                <button>ADD</button>
            </form>
            <div className='red'>
                {
                    // Map over the list and display each item
                    list.map((item, index) => (
                        <div key={index}>

                            <table>

                                <tr>
                                    <td>Name  </td> <td>Id </td> <td> Address   </td>
                                </tr>
                                <tr>
                                    <th>{item.name}</th>

                                    <th>{item.id}</th>

                                    <th>{item.address}</th>
                                </tr>

                            </table>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default ReactTask;
