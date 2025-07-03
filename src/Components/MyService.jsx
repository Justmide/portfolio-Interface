import React from "react";

const MyService = () => {
    return (
        <>
            <div className="w-full">
                {/* TITLE */}
                <div className="flex justify-center"
                  data-aos='fade-up'>
                    <span className="text-3xl">✨</span>
                    <p className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4 font-script">My Services</p>
                </div>
                {/* subtext */}
                <div className="w-full justify-center items-center flex"
                  data-aos='fade-up'>
                    <p className="lg:w-[70%] md:w-[70%] w-full text-center text-[12px] lg:text-[17px] font-quicksand text-[#c0c4ca] font-extrabold">
                        I build responsive, scalable full-stack web applications using React, Tailwind, Node.js, and MongoDB. From sleek frontends to secure JWT-authenticated backends, I deliver clean code, smooth animations, and high-standard mobile-ready interfaces. I also offer website hosting, business email setup, and complete solutions that drive real business value.
                    </p>
                </div>

                {/* boxess..  */}
               {/* Services Section */}
<div className="px-[10px] md:px-[40px] w-full h-auto mt-10 lg:px-[70px]">
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
    
    {/* Service Box 1 */}
    <div className="bg-[#1e293b] border border-purple-500 p-6 rounded-2xl text-white hover:translate-y-[-10px] duration-300 transition flex items-center flex-col"
      data-aos='fade-up'>
      <div className="text-4xl mb-4">💻</div>
      <h3 className="text-[17px] lg:text-xl font-bold mb-2">Full-Stack Development</h3>
      <p className="text-sm text-gray-300 text-center">
        From React UIs to secure Node.js backends — I build scalable, responsive apps.
      </p>
    </div>

    {/* Service Box 2 */}
    <div className="bg-[#1e293b] border border-pink-500 p-6 rounded-2xl text-white hover:translate-y-[-10px] duration-300 transition flex items-center flex-col"
      data-aos='fade-up'>
      <div className="text-4xl mb-4">🛒</div>
      <h3 className="text-[17px] lg:text-xl font-bold mb-2">E-commerce Setup</h3>
      <p className="text-sm text-gray-300 text-center">
        Launch your online store with payment, product, and order management integrated.
      </p>
    </div>

    {/* Service Box 3 */}
    <div className="bg-[#1e293b] border border-cyan-500 p-6 rounded-2xl text-white  hover:translate-y-[-10px] duration-300 transition flex items-center flex-col"
      data-aos='fade-up'>
      <div className="text-4xl mb-4">📧</div>
      <h3 className="text-[17px] lg:text-xl font-bold mb-2">Hosting & Email</h3>
      <p className="text-sm text-gray-300 text-center">
        I deploy your site and set up business emails like info@yourdomain.com.
      </p>
    </div>

  </div>
</div>

{/* Second box */}
<div className="w-full h-auto mt-10 lg:px-[70px] px-[10px] md:px-[40px]">
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
    
    {/* Service Box 1 */}
    <div className="bg-[#1e293b] border border-purple-500 p-6 rounded-2xl text-white hover:translate-y-[-10px] duration-300 transition flex items-center flex-col"
      data-aos='fade-up'>
      <div className="text-4xl mb-4">📱</div>
    <h3 className="text-[17px] lg:text-xl font-bold mb-2 text-center">Mobile App Development</h3>
<p className="text-sm text-gray-300 text-center">
  I create responsive, high-performance mobile apps using React Native — powered by clean backend APIs and smooth UI interactions.
</p>
    </div>

    {/* Service Box 2 */}
    <div className="bg-[#1e293b] border border-pink-500 p-6 rounded-2xl text-white hover:translate-y-[-10px] duration-300 transition flex items-center flex-col"
      data-aos='fade-up'>
 <div className="text-4xl mb-4">🚀</div>
      <h3 className="text-[15px] lg:text-xl font-bold mb-2">Deployment & Optimization</h3>
      <p className="text-sm text-gray-300 text-center">
 From Vercel to cPanel, I handle deployment, performance, and SEO-ready delivery.
      </p>
    </div>

    {/* Service Box 3 */}
    <div className="bg-[#1e293b] border border-cyan-500 p-6 rounded-2xl text-white  hover:translate-y-[-10px] duration-300 transition flex items-center flex-col"
      data-aos='fade-up'>
      <div className="text-4xl mb-4">📧</div>
     <h3 className="text-[17px] lg:text-xl font-bold mb-2 text-center">🎨 UI/UX Design & Animation</h3>
<p className="text-sm text-gray-300 text-center">
  I craft clean, engaging interfaces with Tailwind CSS, Framer Motion, and AOS — bringing websites to life with smooth, user-focused animations.
</p>

    </div>

  </div>
</div>

            </div>
        </>
    )
};

export default MyService