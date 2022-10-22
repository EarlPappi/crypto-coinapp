import { FaChartLine } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="h-full">
            <div className="h-full">
                <div className="w-1/2 mx-auto">
                    <h1 className=" font-bold text-[2em] text-center"><span className="text-[#FFAB00]">---[ </span>Contact<span className="text-[#FFAB00]"> ]---</span></h1>


                    <h1 className="text-[4em] text-center font-bold">Let's get in Touch</h1>
                </div>

                <div className="w-3/4  bg-slate-300 p-6 mx-auto rounded-2xl">
                    <h2>Send a Message</h2>

                    <form action="">
                        <div className='flex gap-4'>
                            <input type="text" placeholder="First Name" required className="block w-1/2 p-3 my-3 rounded-xl"/>
                            <input type="text" placeholder="Last Name" required className="block w-1/2 p-3 my-3 rounded-xl" />
                        </div>

                        <input type="email" placeholder="Email Address" required className="block w-full p-3 my-3 rounded-xl"/>

                        <textarea placeholder='Enter Message Here' name="" id="" cols="30" rows="10" className='w-full block p-3 resize-none my-3'></textarea>


                        <button className="font-white bg-[#226BD0] text-white hover:bg-blue-800 my-3 p-3 rounded-lg">Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Contact;