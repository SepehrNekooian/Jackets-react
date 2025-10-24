import Banner from "../assets/14.jpg"




const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-8">

        <div>
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">

                {/* banner image */}
                <div>
                    <img src={Banner} alt="" className="lg:h-[500px]" />
                </div>

                {/* banner content */}
                <div className="md:w-3/5">
                    <h2 className="md:text-7xl text-2xl font-extrabold mb-6 leading-relaxed text-[#1f1e1e]">U<span className="text-[#39CF02]">S</span>A HOCKEY</h2>
                    <p className="text-2xl mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Animi nostrum perspiciatis, nam mollitia obcaecati eaque cum 
                    autem a laudantium. Voluptatem reiciendis quas nesciunt quo inventore!</p>
                    <div className="space-x-5">
                        <button className="py-3 px-8 bg-[#39CF02] font-semibold text-white
                        rounded hover:bg-[#6C6765] hover:text-[#1f1e1e] transition-all duration-300">SIGN UP</button>
                        
                    </div>
                </div>

                

            </div>
        </div>

        

        

    </div>

    
  )
}

export default Home