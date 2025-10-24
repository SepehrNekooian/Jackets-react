import ima1 from "../assets/13.jpg"
import ima2 from "../assets/22.jpg"
import ima3 from "../assets/2.jpg"
import ima4 from "../assets/4.jpg"
import ima5 from "../assets/5.jpg"
import ima6 from "../assets/6.jpg"
import ima7 from "../assets/7.jpg"
import ima8 from "../assets/8.jpg"
import ima9 from "../assets/9.jpg"
import ima10 from "../assets/10.jpg"
import ima11 from "../assets/11.jpg"
import ima12 from "../assets/12.jpg"



const Products = () => {
  return (
    <div className=" my-24 md:px-30 px-8 max-w-screen-2xl  mx-auto " id="Feature">

        <div className="text-center mt-28">
            <h3 className="  md:text-5xl text-3xl font-bold text-[#1f1e1e] mb-2">Jackets at <span className="text-[#39CF02]">reasonable</span> price</h3>
        </div>

        {/* Apps cards */}
        <div className="mt-28">
            
            <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-4 my-30  mx-auto">

            <div className=" rounded-[35px]  p-8 items-center
            flex justify-center hover:-translate-y-4 transition-all duration-300  ">
            <div data-aos="fade-up">

                <img src={ima1} alt="" />
                <h5 className=" text-2xl font-semibold text-[#1f1e1e] px-5 text-center mt-5 ">£310.00</h5>

            </div>

            </div>

            <div className=" rounded-[35px]  shadow-3xl p-8 items-center
            flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div data-aos="fade-down">

                <img src={ima2} alt="" />
                <h5 className="text-2xl font-semibold text-[#1f1e1e] px-5 text-center mt-5 ">£700.00</h5>

            </div>

            </div>

            <div className=" rounded-[35px]  shadow-3xl p-8 items-center
            flex justify-center hover:-translate-y-4 transition-all duration-300">
            <div data-aos="fade-up">

                <img src={ima3} alt="" />
                <h5 className="text-2xl font-semibold text-[#1f1e1e] px-5 text-center mt-5 ">£700.00</h5>

            </div>

            </div>

            <div className=" rounded-[35px]  shadow-3xl p-8 items-center
            flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div data-aos="fade-down">

                <img src={ima4} alt="" />
                <h5 className="text-2xl font-semibold text-[#1f1e1e] px-5 text-center mt-5 ">£800.00</h5>

            </div>

            </div>

            <div className=" shadow-3xl p-8 items-center
            flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div data-aos="fade-up">

                <img src={ima5} alt="" />
                <h5 className="text-2xl font-semibold text-[#1f1e1e] px-5 text-center mt-5 ">£350.00</h5>

            </div>

            </div>

            <div className=" rounded-[35px]  shadow-3xl p-8 items-center
            flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div data-aos="fade-down">

                <img src={ima6} alt="" />
                <h5 className="text-2xl font-semibold text-[#1f1e1e] px-5 text-center mt-5 ">£245.00</h5>

            </div>

            </div>

            <div className=" rounded-[35px]  shadow-3xl p-8 items-center
            flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div data-aos="fade-up">

                <img src={ima7} alt="" />
                <h5 className="text-2xl font-semibold text-[#1f1e1e] px-5 text-center mt-5 ">£220.00</h5>

            </div>

            </div>

            <div className=" rounded-[35px]  shadow-3xl p-8 items-center
            flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div data-aos="fade-down">

                <img src={ima8} alt="" />
                <h5 className="text-2xl font-semibold text-[#1f1e1e] px-5 text-center mt-5 ">£245.00</h5>

            </div>

            </div>

            <div className=" rounded-[35px]  shadow-3xl p-8 items-center
            flex justify-center hover:-translate-y-4 transition-all duration-300">
            <div data-aos="fade-up">

                <img src={ima9} />
                <h5 className="text-2xl font-semibold text-[#1f1e1e] px-5 text-center mt-5 ">£400.00</h5>

            </div>

            </div>


            <div className="rounded-[35px]  shadow-3xl p-8 items-center
            flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div data-aos="fade-down">

                <img src={ima10} alt="" />
                <h5 className="text-2xl font-semibold text-[#1f1e1e] px-5 text-center mt-5 ">£245.00</h5>

            </div>

            </div>

            <div className=" rounded-[35px]  shadow-3xl p-8 items-center
            flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div data-aos="fade-up">

                <img src={ima11} alt="" />
                <h5 className="text-2xl font-semibold text-[#1f1e1e] px-5 text-center mt-5 ">Internet</h5>

            </div>

            </div>

            <div className="rounded-[35px]  shadow-3xl p-8 items-center
            flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
            <div data-aos="fade-down">

                <img src={ima12} alt="" />
                <h5 className="text-2xl font-semibold text-[#1f1e1e] px-5 text-center mt-5 ">£310.00</h5>

            </div>

            </div>
            


            </div>

        </div>

    </div>
  )
}

export default Products