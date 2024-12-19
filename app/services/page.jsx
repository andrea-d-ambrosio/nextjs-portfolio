"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";


const metadata = {
    title: "My Services | Jane Doe",
    description: "Discover the services offered by Jane Doe, from web development and mobile apps to cybersecurity consulting and process automation.",
  };


const services = [
    {
        num: '01',
        title: "Full-Stack Web Development",
        description: "Crafting dynamic, responsive websites and applications from scratch, using cutting-edge technologies like React and Node.js.",
        href: "/services"
    },
    {
        num: '02',
        title: "Process Automation",
        description: "Streamlining workflows with custom scripts and tools that save time and enhance productivity.",
        href: "/services"
    },
    {
        num: '03',
        title: "Cybersecurity Consulting",
        description: "Safeguarding systems with tailored security measures to protect against cyber threats.",
        href: ""
    },
    {
        num: '04',
        title: "Mobile App Development",
        description: "Designing sleek, intuitive apps for iOS and Android to deliver exceptional user experiences.",
        href: ""
    },
    {
        num: '05',
        title: "API Development",
        description: "Connecting systems seamlessly with robust, scalable APIs built for performance.",
        href: ""
    },
    {
        num: '06',
        title: "Tech Consulting",
        description: "Strategic consulting to guide businesses in adopting and optimizing the most advanced technologies.",
        href: ""
    }
]

const Services = () => {
    return (
            <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-24">
                <div className="container mx-auto">
                    <motion.div 
                        initial={{opacity: 0}} 
                        animate={{ 
                            opacity:1, 
                            transition: {
                                delay:2.4, duration:0.4, ease: "easeIn"},
                            }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                    >
                        
                        {services.map((service, index) => {
                            return (
                            <div key={index} 
                                 className="flex-1 flex flex-col justify-center gap-6 group">

                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                        <Link href={service.href} className="w-[40px] h-[40px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                            <BsArrowDownRight className="text-primary text-1xl"/>
                                        </Link>
                                </div>

                                <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>

                                <p className="text-white/60">{service.description}</p>

                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                            );
                        })}

                    </motion.div>
                </div>
            </section>
    )
}


export default Services