import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import image from '../../assets/Banner/group-diverse-grads-throwing-caps-up-sky.jpg'

export const Registration = () => {
    const [register, setRegister] = useState(false);
    const [showName, setShowName] = useState({});
    const [showImagePreview, setShowImagePreview] = useState({});
    const fileInputRef = useRef();
    const handleClearFile = () => {
        setShowName('');
        setShowImagePreview('');
        fileInputRef.current.value = '';
    }

    return (
        <div className="w-80 md:w-96 lg:w-[800px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">
            {/* register form  */}
            <form className={`p-8 w-full ${register ? 'lg:translate-x-0' : 'lg:-translate-x-full hidden lg:block'} duration-500`}>
                <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Register</h1>
                <div className="space-y-5">
                    <label htmlFor="name" className="block">Name</label>
                    <input id="name" type="name" placeholder="John Doe" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                    <label htmlFor="u_email" className="block">Email</label>
                    <input id="u_email" type="u_email" placeholder="example@example.com" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                    <label htmlFor="u_password" className="block">Password</label>
                    <input id="u_password" type="u_password" placeholder=".............." min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />





                    {/* for image */}
                    <div className="  my-10">
                        {showName?.name ? (
                            <div className=" mx-auto flex max-w-[600px] items-center gap-x-6  rounded-lg border-2 border-dashed border-gray-400 p-5 bg-white">
                                <img className="size-[100px] h-[100px] w-full max-w-[150px] rounded-lg object-cover" src={showImagePreview} alt={showName?.name} />
                                <div className="flex-1 space-y-1.5 overflow-hidden">
                                    <h5 className=" text-xl font-medium tracking-tight truncate">{showName?.name}</h5>
                                    <p className=" text-gray-500">{(showName.size / 1024).toFixed(1)} KB</p>
                                </div>
                                <div onClick={handleClearFile}>
                                    <svg width={30} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#000000"></path></g>
                                    </svg>
                                </div>
                            </div>
                        ) : (
                            <label className=" mx-auto flex max-w-[600px] flex-col items-center justify-center space-y-3 rounded-lg border-2 border-dashed border-gray-400 p-6 bg-white" htmlFor="file5">
                                <svg width={50} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 42 32" enableBackground="new 0 0 42 32" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">  <g> <path fill="black" d="M33.958,12.988C33.531,6.376,28.933,0,20.5,0C12.787,0,6.839,5.733,6.524,13.384 C2.304,14.697,0,19.213,0,22.5C0,27.561,4.206,32,9,32h6.5c0.276,0,0.5-0.224,0.5-0.5S15.776,31,15.5,31H9c-4.262,0-8-3.972-8-8.5 C1,19.449,3.674,14,9,14h1.5c0.276,0,0.5-0.224,0.5-0.5S10.776,13,10.5,13H9c-0.509,0-0.99,0.057-1.459,0.139 C7.933,7.149,12.486,1,20.5,1C29.088,1,33,7.739,33,14v1.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V14 c0-0.003,0-0.006,0-0.009c3.019,0.331,7,3.571,7,8.509c0,3.826-3.691,8.5-8,8.5h-7.5c-3.238,0-4.5-1.262-4.5-4.5V12.783l4.078,4.07 C25.176,16.951,25.304,17,25.432,17s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.513,0-0.707l-4.461-4.452 c-0.594-0.592-1.055-0.592-1.648,0l-4.461,4.452c-0.195,0.194-0.195,0.512,0,0.707s0.512,0.195,0.707,0L20,12.783V26.5 c0,3.804,1.696,5.5,5.5,5.5H33c4.847,0,9-5.224,9-9.5C42,17.333,37.777,13.292,33.958,12.988z" ></path>  </g></g></svg>
                                <div className="space-y-1.5 text-center">
                                    <h5 className="whitespace-nowrap text-lg font-medium tracking-tight ">Upload your file</h5>
                                    <p className="text-sm text-gray-500">File Should be in PNG, JPEG or JPG formate</p>
                                </div>
                            </label>
                        )}

                        <input ref={fileInputRef} onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                const imageFile = e.target.files[0];
                                setShowName(imageFile);
                                setShowImagePreview(URL.createObjectURL(imageFile));
                            }
                        }} className="hidden" id="file5" type="file" />
                    </div>




                </div>
                {/* button type will be submit for handling form submission*/}
                <button type="button" className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block">Submit</button>
                <p className="mb-3 text-center">Already have an account?<div onClick={() => { setRegister(!register); }} className="underline font-semibold">Login</div></p>
                <hr />
                <button type="button" className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current inline-block mr-2"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>Continue with Google</button>
            </form>
            {/* img */}
            <div className={`hidden lg:block absolute w-1/2 h-full top-0 z-50 duration-500 overflow-hidden bg-black/20 ${register ? 'translate-x-full rounded-bl-full duration-500' : 'rounded-br-full'}`}>
                <img src={image} className="object-cover h-full" alt="card navigate ui" />
            </div>
            {/* login form */}
            <form className={`p-8 w-full mr-0 ml-auto duration-500 ${register ? 'lg:translate-x-full hidden lg:block' : ''}`}>
                <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Login</h1>
                <div className="space-y-5">
                    <label htmlFor="_email" className="block">Email</label>
                    <input id="_email" type="email" placeholder="example@example.com" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                    <label htmlFor="_password" className="block">Password</label>
                    <input id="_password" type="password" placeholder=".............." min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                </div>
                {/* button type will be submit for handling form submission*/}
                <button type="button" className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block">Submit</button>
                <p className="mb-3 text-center">Don&apos;t have an account?<div onClick={() => { setRegister(!register); }} className="underline font-semibold">Register</div></p>
                <hr />
                <button type="button" className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"><svg viewBox="-0.5 0 48 48" version="1.1" className="w-6 inline-block mr-3" xmlns="http://www.w3.org/2000/svg" xmlnsXdiv="http://www.w3.org/1999/xdiv" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Google-color</title> <desc>Created with Sketch.</desc><defs></defs><g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Color-" transform="translate(-401.000000, -860.000000)"><g id="Google" transform="translate(401.000000, 860.000000)"><path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"></path><path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"></path><path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"></path><path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"></path></g></g></g></g></svg>Continue with Google</button>
            </form>
        </div>
    );
}