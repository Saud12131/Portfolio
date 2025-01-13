import { div } from 'framer-motion/client';
import React from 'react';

const About: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4  ">
                {/* Image Section */}
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <img
                        src="https://tse4.mm.bing.net/th?id=OIP.V9BpW-wcVzSe9T_W7r17hwHaE9&pid=Api&P=0&h=180"
                        alt="Saud Sayyed"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                {/* Text Section */}
                <div className="w-full md:w-2/3 p-6 border-2 border-gray-30  rounded-lg shadow-lg m-3">
                    <h1 className="text-2xl font-bold text-slate-200 mb-4">About Me</h1>
                    <p className="text-slate-100 font-bold">
                        I am Saud Sayyed,<br /> currently pursuing a Bachelor of Computer Applications (BCA) from Ahmednagar College,<br /> Ahmednagar.
                        I am passionate about technology and have a strong foundation in web development,<br /> with expertise in frontend, backend, and full-stack development. <br />
                        Alongside my web development skills, I have a keen interest <br /> in Artificial Intelligence and Machine Learning, and I am actively learning and exploring these cutting-edge fields.
                        I strive to combine my technical skills <br /> with my enthusiasm for innovation, constantly seeking opportunities to grow and create impactful solutions.
                    </p>
                </div>
            </div>
        </div >
    );
};

export default About;
