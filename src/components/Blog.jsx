import cardimg1 from "../assets/111.jpg"
import cardimg2 from "../assets/11.jpg"
import cardimg3 from "../assets/1111.jpg"
import cardvid from "../assets/Photo.jpg"

// -------------



const Blog = () => {
  return (
    <div>
        
        <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto'>
            {/* header */}
            <div className='text-center ' >
                <h2 className='md:text-5xl text-3xl font-bold text-[#1f1e1e] mb-2'>
                 <span className='text-[#39CF02]'>Online</span> Shopping and Ordering</h2>
                <p className='mt-4 text-[#1f1e1e] max-w-2xl mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Repudiandae a labore ipsam corporis debitis et, modi consectetur vel iste officiis?</p>
            </div>
            <div className="flex justify-center items-center mt-10">
                <button className="bg-[#39CF02] text-white px-8 py-4 transition-all duration-300 rounded
                 hover:text-[#1f1e1e] hover:bg-[#6C6765]">MORE</button>
            </div>

           


            {/* photo */}

            <figure className="relative  overflow-hidden mt-14
            md:mt-14  mx-auto ">
                <img src={cardvid} alt="" width={940} height={500} className="w-full h-full
                object-cover" data-aos="zoom-in" />
            </figure>

            {/* testimonial */}

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-40'>
                {/* card-1 */}
                <div className='bg-white border-b-4 shadow-2xl rounded-lg p-6 cursor-pointer' data-aos="fade-down">
                    <div className='mb-4 flex justify-center items-center'>
                        <img src={cardimg1} alt="" className='size-50 w-full object-cover'/>
                    </div>
                    <blockquote className='text-[#1f1e1e] text-sm mb-3'><span className='text-[#39CF02] font-bold'> £220.00</span> KM</blockquote>
                    <div className='text-start flex justify-between items-center mt-5'>
                        <div>
                            <button className='bg-[#39CF02] px-4 py-2 transition-all duration-300 rounded
                              hover:text-[#1f1e1e] hover:bg-[#6C6765] font-bold'>BOOK NOW</button>
                            {/* <p className='text-sm text-gray-500'>Lorem, ipsum.</p> */}
                        </div>
                        
                    </div>
                </div>

                {/* card-2 */}
                <div className='bg-white border-b-4 shadow-2xl rounded-lg p-6 cursor-pointer' data-aos="fade-up">
                    <div className='mb-4 flex justify-center items-center '>
                        <img src={cardimg2} alt="" className='size-50 w-full object-cover'/>
                    </div>
                    <blockquote className='text-[#1f1e1e] text-sm mb-3'><span className='text-[#39CF02] font-bold'>$0.47</span> KM</blockquote>
                    <div className='text-center flex justify-between items-center mt-5'>
                        <div>
                            <button className='bg-[#39CF02] px-4 py-2 transition-all duration-300 rounded
                              hover:text-[#1f1e1e] hover:bg-[#6C6765] font-bold'>BOOK NOW</button>
                            {/* <p className='text-sm text-red'>Lorem, ipsum.</p> */}
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>

                {/* card-3 */}
                <div className='bg-white border-b-4 shadow-2xl rounded-lg  p-6 cursor-pointer' data-aos="fade-down">
                    <div className='mb-4 flex justify-center items-center'>
                        <img src={cardimg3} alt="" className='size-50 w-full  object-cover '/>
                    </div>
                    <blockquote className='text-[#1f1e1e] text-sm mb-3'><span className='text-[#39CF02] font-bold'>$1.87</span> KM</blockquote>
                    <div className='text-start flex justify-between items-center mt-5'>
                        <div>
                            <button className='bg-[#39CF02] px-4 py-2 transition-all duration-300 rounded
                              hover:text-[#1f1e1e] hover:bg-[#6C6765] font-bold'>BOOK NOW</button>
                            {/* <p className='text-sm text-gray-500'>Lorem, ipsum.</p> */}
                        </div>
                        
                    </div>
                </div>

            </div>

            

        </div>



        

    
    </div>
  )
}

export default Blog