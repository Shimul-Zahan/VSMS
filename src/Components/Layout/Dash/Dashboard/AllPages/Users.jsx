import React, { useContext, useEffect, useState } from 'react'
import { ClimbingBoxLoader, ScaleLoader } from 'react-spinners';
import axios from 'axios';
import { MyContext } from '../../../../../Auth/AuthProvide';

const Users = () => {
    const { loading } = useContext(MyContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUser();
    }, [])

    const getAllUser = async () => {
        const res = await axios.get('http://localhost:8000/users');
        setUsers(res.data);
    }

    const handleDlt = async id => {
        const res = await axios.delete(`http://localhost:8000/users?id=${id}`);
        if (res.data.message) {
            window.alert("deleted successfully");
            getAllUser();
        }
    }

    if (loading) {
        return <div className='w-full h-screen bg-gray-700 flex justify-center items-center'>
            <ScaleLoader color="#0000FF" />
        </div>
    }

    return (
        <div className="h-screen px-10 pt-4 bg-[#151c47]" style={{
            height: 'calc(100vh - 80px)'
        }}>
            <h1 className="uppercase tracking-widest text-[#b9a683] text-5xl font-bold">Users</h1>
            <p className="mt-2 text-xl text-[#b9a683]">Welcome to Users Page </p>
            <div className='py-5'>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y-2 divide-[#b9a683]  text-2xl">
                        <thead className="">
                            <tr>
                                <th className="whitespace-nowrap text-start px-4 py-2 font-medium text-[#b9a683]">SL.</th>
                                <th className="whitespace-nowrap text-start px-4 py-2 font-medium text-[#b9a683]">Name</th>
                                <th className="whitespace-nowrap text-start px-4 py-2 font-medium text-[#b9a683]">Email</th>
                                <th className="whitespace-nowrap text-start px-4 py-2 font-medium text-[#b9a683]">Role</th>
                                <th className="whitespace-nowrap text-start px-4 py-2 font-medium text-[#b9a683]">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-[#b9a683]">
                            {users && users.map((user, index) =>
                                <tr className="" key={index}>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-[#b9a683]">{index + 1}</td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-[#b9a683]">{user.name}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-[#b9a683]">{user.email}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-[#b9a683]">{user?.role}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-[#b9a683]">
                                        <button onClick={() => handleDlt(user._id)} className='text-[#b9a683] p-2 hover:bg-[#b9a683] hover:text-black'>DELETE</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Users