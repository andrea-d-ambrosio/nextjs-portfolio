"use client";


import { FaHtml5, FaCss3, FaJs, FaFigma, FaReact, FaPython, FaRaspberryPi, FaNodeJs } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const metadata = {
    title: "About Me | Jane Doe",
    description: "Discover Jane Doe, a passionate software developer with over a decade of experience. Learn how she delivers innovative solutions and drives impactful projects.",
  };


const about = {
    title: 'About Me',
    description: 'Hi, I’m Jane Doe, a passionate software developer who loves turning ideas into functional, user-friendly applications. I specialize in web development, mobile apps, and process automation, blending creativity with technical expertise to deliver innovative solutions. Whether it’s designing sleek interfaces or optimizing complex systems, I thrive on solving problems and creating impactful results.',
    info: [
        {
          fieldName: "Name",
          fieldValue: "Jane Doe" 
        },
        {
            fieldName: "Phone",
            fieldValue: "+1 (555) 123-4567" 
        },
        {
            fieldName: "Experience",
            fieldValue: "8+ Years" 
        },
        {
            fieldName: "Nationality",
            fieldValue: "American" 
        },
        {
            fieldName: "Email",
            fieldValue: "info@janedoe.com" 
        },
        {
            fieldName: "Freelance",
            fieldValue: "Avaible" 
        },
        {
            fieldName: "Languages",
            fieldValue: "English" 
        },
    ]
};

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: 'With over a decade of experience in technology. I have a proven track record of delivering impactful solutions and leading innovative projects that drive meaningful results.',
    items: [
        {
            company:"TechSphere Innovations",
            position:"Senior Software Engineer",
            duration: "2018 – Present",
            description:" Leading the development of AI-driven solutions and overseeing cross-functional teams to deliver scalable web applications."
        },
        {
            company:"CyberNetics Corp.",
            position:"Cybersecurity Specialist",
            duration: "2015 – 2018",
            description:"Designed and implemented robust security protocols to safeguard sensitive data and prevent cyber threats."
        },
        {
            company:"IoT Solutions Inc",
            position:"IoT Systems Developer",
            duration: "2012 – 2015",
            description:"Developed and deployed connected device solutions, enhancing operational efficiency for clients."
        },
        {
            company:"DevWorks Studio",
            position:"Junior Web Developer",
            duration: "2010 – 2012",
            description:"Built and maintained responsive websites, focusing on clean code and user-centric design."
        },
        
    ]
};

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description: 'My education has equipped me with the skills to solve complex problems, create transformative solutions, and stay ahead of industry trends.',
    items: [
        {
            scholl:"Massachusetts Institute of Technology (MIT)",
            field:"Bachelor of Science in Computer Science",
            date: "2006 – 2010",
        },  
        {
            scholl:"Stanford University",
            field:"Master’s in Artificial Intelligence",
            date: "2010 – 2012",
        },
        {
            scholl:"Coursera (Stanford Online)",
            field:"Machine Learning Specialization",
            date: "2021",
        },
        {
            scholl:"CompTIA",
            field:"CompTIA Security+ Certification",
            date: "2022",
        },        
    ]
};

const skills = {
    title: "My Skills",
    description: "A versatile skill set, combined with strong analytical, problem-solving, and strategic planning abilities.",
    skillList: [
        {
            icon: <FaNodeJs />,
            name: "Node.JS" 
        },
        {
            icon: <FaPython />,
            name: "Python" 
        },
        {
            icon: <FaRaspberryPi />,
            name: "RaspberryPi" 
        },
        {
            icon: <FaReact />,
            name: "React" 
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.JS" 
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS" 
        },
    ]
};




const About = () => {
    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{
                opacity: 1, 
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
        
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-24">
            
          <div className="container mx-auto">

            <Tabs 
                defaultValue="experience" 
                className="flex flex-col xl:flex-row gap-[60px]">

                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About Me</TabsTrigger>
                </TabsList>

                <div className="min-h-[70vh] w-full">
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>

                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => {
                                        return (
                                        <li key={index} className="bg-[#232329] h-[184px] p-y px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.company}</p>
                                            </div>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>

                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                            <li key={index} className="bg-[#232329] h-[184px] p-y px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.date}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.field}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.scholl}</p>
                                                </div>
                                            </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                    </TabsContent>
                    <TabsContent value="skills" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>

                                    
                                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                            {skills.skillList.map((skill, index) => {
                                                return (
                                                <li key={index}>
                                                        <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="capitalize">{skill.name}</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                </li>
                                                );
                                            })}
                                        </ul>
                            
                                </div>
                    </TabsContent>
                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {about.description}
                            </p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, index)=> {
                                    return (
                                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                        <span className="text-white/60">{item.fieldName}</span>
                                        <span className="text-l">{item.fieldValue}</span>

                                    </li>
                                    )

                                })}
                            </ul>
                        </div>
                    </TabsContent>
                    
                </div>
            </Tabs>
           
          </div>  
        </motion.div>
    );
}


export default About;