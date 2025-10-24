import image1 from '../Flag/Uk.png'
import image2 from '../Flag/Usa.png'
import image3 from '../Flag/Belgium.png'

const Feature = () => {
  return (
    <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto'>

        <div className='flex flex-col lg:flex-row justify-between items-start
        gap-10'>
            <div className='lg:w-1/4'>
                <h3 className='text-3xl text-[#1f1e1e] font-bold mb-3'>TERMS OF SALE - DELIVERY TERMS</h3>
                <p className='text-base text-gray-500'>We offer a range of delivery options to receive the Products purchased on our Site. You can choose the one that best suits your personal needs.</p>
                <button className='bg-[#39CF02] px-4 py-2 transition-all duration-300 rounded
                 text-white hover:bg-[#6C6765] hover:text-[#1f1e1e] my-6'>Delivery</button>
            </div>

              {/* featue Card */}
            <div className='w-full lg:w-3/4 bg-[#1f1e1e]'>
                <div className=' grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8 mt-20'>
                    <div className='flex justify-between items-center bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl
                     p-10 hover:-translate-y-4 transtion-all duration-300 '>
                    <div>
                        <img src={image1} alt="" />
                        <h5 className='text-2xl font-semibold
                        text-[#39CF02] px-5 text-center mt-5'>United Kingdom</h5>
                    </div>
                    </div>

                    <div className='flex justify-between items-center bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl
                    p-10 hover:-translate-y-4 transtion-all duration-300'>
                    <div>
                        <img src={image2} alt="" />
                        <h5 className='text-2xl font-semibold
                        text-[#39CF02] px-5 text-center mt-5'>U.S. states</h5>
                    </div>
                    </div>

                    <div className='flex justify-between items-center bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl
                    p-10 hover:-translate-y-4 transtion-all duration-300'>
                    <div>
                        <img src={image3} alt="" />
                        <h5 className='text-2xl font-semibold
                        text-[#39CF02] px-5 text-center mt-5'>Belgium</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Feature