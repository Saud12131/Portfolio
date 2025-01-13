
import Card from './Card';

export default function Projects() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-6xl w-full px-4">
                <h1 className="text-3xl font-bold mb-6 text-slate-50">My Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <Card
                        title="Wanderlust"
                        description="Wanderlust: Hotel Booking Platform with Razorpay Payment Integration: Secure and efficient payment processing- Forgot Password Functionality: Easy
 password recovery for users- Email Verification using Nodemailer: Ensuring authenticity and security
User-Friendly Interface: Providing a smooth and intuitive user experience"
                        liveLink="https://wanderlust-myk8.vercel.app/"
                        sourceLink="https://github.com/Saud12131/WANDERLUST.git"
                        imageUrl="./public/wanderlust.png"
                    />
                    <Card
                        title="Medium"
                        description=" Developed a scalable Medium clone using React, TypeScript, and Tailwind for the frontend. Implemented a
 serverless backend with Hono, Cloudflare Workers, PostgreSQL, and Prisma, utilizing TypeScript for consistency.
 Featured CRUD operations, user authentication, and a seamless reading experience."
                        liveLink="https://medium-1-horj.onrender.com/"
                        sourceLink="https://github.com/Saud12131/Medium.git"
                        imageUrl="./public/medium.png"
                    />
                    <Card
                        title="Share-A-Bite"
                        description="Share a Bite is a food ordering app built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to browse a variety of food options, place orders, and enjoy a seamless food delivery experience, all in a user-friendly interface"
                        liveLink="https://share-a-bite-frontend.vercel.app/"
                        sourceLink="https://github.com/Saud12131/full-stack-task-delivery-app.git"
                        imageUrl="./public/share-a-bite.png"
                    />
                </div>
            </div>
        </div>
    );
}
