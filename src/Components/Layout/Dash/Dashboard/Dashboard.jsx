import { useContext } from "react";
import { ScaleLoader } from "react-spinners";
import { MyContext } from "../../../../Auth/AuthProvide";


const Dashboard = () => {


  const { loading } = useContext(MyContext);

  if (loading) {
    return <div className='w-full h-screen bg-gray-900 flex justify-center items-center'>
      <ScaleLoader color="#0000FF" />
    </div>
  }

  return (
    <div className="h-screen px-10 pt-4 bg-[#151c47]" style={{
      height: 'calc(100vh - 80px)'
    }}>
      <h1 className="uppercase tracking-widest text-white text-5xl font-bold">Dashboard</h1>
      <p className="mt-2 text-xl text-[#b9a683]">Welcome to Versity Management Dashboard</p>
    </div>
  )
}

export default Dashboard