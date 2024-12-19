"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { BsArrowUpRight,  BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import { Item } from "@radix-ui/react-select";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const metadata = {
    title: "My Projects | Jane Doe",
    description: "Explore Jane Doe’s portfolio of innovative projects.",
  };


const projects = [
    {
        num: '01',
        category: "Retail Websites",
        title: "HomeStyle Store",
        description: " A user-friendly website for a local home goods store, offering an online catalog, delivery tracking, and real-time customer support.",
        stack: [
            {name: "Stripe API"},
            {name: "Node.js"},
            {name: "AWS S3"},
            {name: "React.js"},
        ],
        image:"/assets/work/thumb1.png",
        live: "",
        github: ""
    },
    {
        num: '02',
        category: "E-commerce Solutions",
        title: "ProSupply Hub",
        description: "A scalable e-commerce solution for businesses to purchase office supplies and equipment. Features include inventory management, multi-vendor support, and advanced search functionality.",
        stack: [
            {name: "React.js"},
            {name: "Node.js"},
            {name: "Python (Django)"},
            {name: "AWS"},
        ],
        image:"/assets/work/thumb2.png",
        live: "",
        github: ""
    },
    {
        num: '03',
        category: "Creative Platforms",
        title: "PhotoFrame Studio",
        description: "A dynamic platform for photographers and filmmakers to showcase portfolios, sell digital content, and connect with clients. The site includes customizable galleries, booking tools, and payment integration.",
        stack: [
            {name: "Node.js"},
            {name: "AWS S3"},
            {name: "React.js"},
            {name: "Stripe API"},
        ],
        image:"/assets/work/thumb3.png",
        live: "",
        github: ""
    },
];


const Projects = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;

        setProject(projects[currentIndex]);
    }
    return (
        <motion.section 
            initial={{opacity: 0}} 
            animate={{ opacity: 1,
                       transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
             }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-24">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} Project
                            </h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return <li key={index} className="text-sm xl:text-lg text-accent">
                                                {item.name}
                                                {index !== project.stack.length - 1 && ","}
                                            </li>
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            {/* Live e GitHub button */}
                            <div className="flex items-center gap-4">
                              <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[40px] h-[40px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="texht-white text-1xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[40px] h-[40px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="texht-white text-1xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}>

                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div className="relative w-full h-full">
                                            <Image src={project.image} fill className="object-cover" alt={`${project.name || 'Project'} Thumbnail`} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"  />

                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}


export default Projects