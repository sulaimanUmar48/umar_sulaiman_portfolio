import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid"
import { useEffect, useState, useRef } from "react";
import selfPotrait from '../../assets/potraits/_OPE4024.jpg'
import groupOneLogo from '../../assets/logos/group_one.svg'
import groupTwoLogo from '../../assets/logos/group_two.svg'
import htmlLogo from '../../assets/logos/html.svg'
import firebaseLogo from "../../assets/logos/firebase.svg";

import quizImage from '../../assets/project_images/quizler.png'
import africaDevImage from '../../assets/project_images/africa_development_summit.png'
import shopImage from '../../assets/project_images/shopping_cart.png'

import resume from '../../assets/documents/umar_sulaiman_resume.pdf'

import "./home.css"
import { useNavigate } from "react-router-dom";


const Home = () => {

    const [currentProject, setCurrentProject] = useState(0)
    let angle = useRef(90)

    const projects = [
        {
            name: "Quizller",
            liveDemo: "https://quizzler-app.vercel.app/",
            githubLink: "https://github.com/sulaimanUmar48/QuizzlerApp.git",
            image: quizImage
        },
        {
            name: "Africa Development Summit",
            liveDemo: "https://africa-development-summit.vercel.app/",
            githubLink: "https://github.com/sulaimanUmar48/africa-development-summit.git",
            image: africaDevImage
        },
        {
            name: "Shopping Cart",
            liveDemo: "https://shopping-cart-zeta-dusky-21.vercel.app/",
            githubLink: "https://github.com/sulaimanUmar48/ShoppingCart.git",
            image: shopImage
        }
    ];


    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setCurrentProject(prev => prev === projects.length - 1 ? 0 : prev + 1)
            angle.current += 90;
            console.log(angle.current)
        }, 5000)

        return ()=>{clearInterval(intervalID)}
    }, [currentProject])

    const navigate = useNavigate()


    // Function for display featured carasoul = PREV
    function prevImage(){
        setCurrentProject(prev => prev === 0 ? images.length - 1 : prev - 1)
    }
    // carasoul function = NEXT
    function nextImage(){
        setCurrentProject(prev => prev === images.length - 1 ? 0 : prev + 1)
    }


  return (
    <main className="w-screen flex-1 bg-primary flex gap-[20px] px-[40px] pb-[20px] max-sm:flex-col max-sm:px-[20px] max-sm:items-center max-sm:pt-6 max-lg:flex-col max-lg:items-stretch">
        <div className="flex-1 h-full flex flex-col gap-[20px]">
            <div className="flex-1 bg-secondary rounded-[20px] border-[1px] border-text-primary/10 p-[30px] relative overflow-hidden">
                <h2 className="text-[30px] font-nunito w-3/4 font-bold max-sm:text-[20px]">                
                    <span className="text-accent-one">“</span>Hello, my name is Umar Sulaiman and I am a <span className="text-accent-one">Front-End Web Developer</span><span className="text-accent-one">”</span>
                    
                </h2>

                <p className="text-xs font-nunito mt-10 mb-4">Based in Ibadan, Oyo State, Nigeria.</p>
                <span className="text-[10px] flex items-center gap-2"><div className="w-2 aspect-square bg-green-400 rounded-full"></div>Available for a job</span>

                <div className="absolute w-[300px] aspect-square -right-[150px] -bottom-[150px] -rotate-45 transition duration-800 ease-out max-sm:w-[220px]"
                    style={{transform: `rotate(-${angle.current}deg)`}}
                >
                    <img src={htmlLogo} className="w-20 absolute -top-10 left-1/2 -translate-x-1/2 rotate-45 max-sm:w-10" />
                    <img src={groupOneLogo} className="w-30 absolute -right-15 top-1/2 -translate-y-1/2 rotate-135 max-sm:w-15" />
                    <img src={groupTwoLogo} className="w-30 absolute -bottom-15 left-1/2 -translate-x-1/2 rotate-225 max-sm:w-15" />
                    <img src={firebaseLogo} className="w-20 absolute -left-10 top-1/2 -translate-y-1/2 -rotate-45 max-sm:w-10" />
                </div>
            </div>
            <div className="flex-1 flex gap-[20px] max-sm:flex-col"> 
                <div className="flex-1 bg-secondary rounded-[20px] border-[1px] border-text-primary/10 relative flex max-w-[100%] h-full w-[100%] items-stretch overflow-hidden select-none max-lg:min-h-[240px]"> 
                    <ChevronLeftIcon 
                        className="text-primary w-12 absolute top-1/2 -translate-1/2 left-5 cursor-pointer hover:text-accent-one z-100 "
                        onClick={prevImage} 
                    />
                    <ChevronRightIcon 
                        className="text-primary w-12 absolute top-1/2 -translate-1/2 -right-6 cursor-pointer hover:text-accent-one z-100"
                        onClick={nextImage} 
                    />

                    {/* Images */}
                    <div 
                        className="flex relative z-10 transition ease-out duration-1500"
                        style={{transform: `translateX(-${currentProject * 100}%)`}}
                    >
                        {projects.map( (project, i) => 
                            <figure className="w-full flex-[0_0_100%] h-full" key={i}>
                                <img src={project.image} className="object-cover w-full h-full"/>
                            </figure>
                        )}
                    </div>

                    <div className="flex gap-6 absolute bottom-4 left-1/2 -translate-1/2 z-60">
                        <a href={projects[currentProject].liveDemo} target="_blank">
                            <button className="bg-white/20 py-2 px-4 rounded text-xs backdrop-blur-[4px] text-white border-1 hover:border-accent-two hover:text-accent-two cursor-pointer active:scale-95 whitespace-nowrap">
                                Live Site
                            </button>
                        </a>
                        <a href={projects[currentProject].githubLink} target="_blank">
                            <button className="bg-white/20 py-2 px-4 rounded text-xs backdrop-blur-[4px] text-white border-1 hover:border-accent-two hover:text-accent-two cursor-pointer active:scale-95 whitespace-nowrap ">
                                Github Repo
                            </button>
                        </a>
                    </div>
                    <div className="flex gap-2 absolute bottom-2 left-1/2 -translate-x-1/2 z-50 transition ease-out duration-300">
                        {projects.map( (_, i) => 
                            <div 
                                key={i}
                                className={`w-2 h-2 border-1 border-white rounded-full ${i === currentProject ? "bg-white" : null} cursor-pointer`}
                                onClick={()=>{setCurrentProject(i)}}
                                >
                            </div>
                        )}
                    </div>
                </div>
                    
                <div className="flex-1 bg-secondary rounded-[20px] border-[1px] border-text-primary/10 relative max-sm:min-h-[280px] max-sm:text-sm">

                    <div className="w-full flex justify-center items-center flex-col gap-6"
                        style={{height: "calc(100% - 80px)"}}
                    >
                        <div className="flex justify-start gap-20">
                            <div>
                                <p className="font-bold">Clients</p>
                                <p className="font-semibold">6+</p>
                            </div>
                            <div>
                                <p className="font-bold">Experience</p>
                                <p className="font-semibold">2+</p>
                            </div>
                        </div>
                        <div className="flex justify-start gap-8">
                            <div>
                                <p className="font-bold">Featured Works</p>
                                <p className="font-semibold">2</p>
                            </div>
                            <div>
                                <p className="font-bold">Projects</p>
                                <p className="font-semibold">3</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute w-[320px] h-20 bg-primary -bottom-[1px] -right-[1px] border-[1px] border-text-primary/10 border-b-0 border-r-0 rounded-tl-[20px] inverted-border before:bg-secondary before:border-b-1 before:border-r-1 before:border-text-primary/10 before:shadow-[5px_5px_0] before:shadow-primary after:bg-secondary after:border-b-1 after:border-r-1 after:border-text-primary/10 after:shadow-[3px_3px_0_3px] after:shadow-primary flex justify-center items-start pt-[10px] max-sm:w-[280px]">

                        <div className="w-[300px] h-[60px] rounded-[14px] text-xs flex gap-[10px] font-semibold max-sm:w-[260px]">
                            <button className="border-1 border-text-primary/10 flex-1 rounded-[10px] bg-secondary cursor-pointer hover:bg-accent-two active:scale-95 hover:text-white active:bg-accent-two/80"
                                onClick={()=>{navigate("/contact")}}
                            >
                                Hire Me
                            </button>
                            <a href={resume} 
                                className="flex-1 block"
                            download>
                                <button className="border-1 border-text-primary/10 w-full h-full rounded-[10px] bg-secondary cursor-pointer hover:bg-accent-two active:scale-95 hover:text-white active:bg-accent-two/80" >
                                    Download Resume
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="flex-1 h-full bg-secondary w-[340px] max-w-[340px] rounded-[20px] border-[1px] border-text-primary/10 p-4 flex lg:flex-col max-sm:flex-col max-lg:flex-row max-lg:w-[100%] max-lg:max-w-full max-lg:gap-10">
            <figure className="border-1 border-text-primary/10 w-full aspect-square max-lg:aspect-auto rounded-[12px] overflow-hidden max-sm:w-full max-lg:w-[300px] ">
                <img src={selfPotrait} className="h-full w-full object-cover object-top" />
            </figure>

            <div className="font-inter text-xs py-3 flex flex-col gap-2 mt-6 ">          
                <div className="flex gap-1">
                    <div className=" h-[10] w-[2px] bg-text-primary rounded-full "></div>
                    <p className="">
                        <span className="font-bold">Name: </span>
                        Umar-Balogun Sulaiman
                    </p>
                </div>
                <div className="flex gap-1">
                    <div className=" h-[10] w-[2px] bg-text-primary rounded-full "></div>
                    <p className="">
                        <span className="font-bold">D.O.B: </span>
                        25th - Jan - 2025
                    </p>
                </div>
                <div className="flex gap-1">
                    <div className=" h-[10] w-[2px] bg-text-primary rounded-full "></div>
                    <p className="">
                        <span className="font-bold">Hobbies: </span>
                        Program, Read, Travel, Movie    
                    </p>
                </div>

                <div className="flex gap-1">
                    <div className=" h-[10] w-[2px] bg-text-primary rounded-full "></div>
                    <p className="">
                        <span className="font-bold">Nationality: </span>
                        Nigeria
                    </p>
                </div>

                <div className="flex gap-1">
                    <div className=" h-[10] w-[2px] bg-text-primary rounded-full "></div>
                    <p className="">
                        <span className="font-bold">Email: </span>
                        sulaiman.tech20@gmail.com
                    </p>
                </div>

                <div className="flex gap-1">
                    <div className=" h-[10] w-[2px] bg-text-primary rounded-full "></div>
                    <p className="">
                        <span className="font-bold">Phone: </span>
                        +23491-6370-1212
                    </p>
                </div>

                <div className="flex gap-1">
                    <div className=" h-[10] w-[2px] bg-text-primary rounded-full "></div>
                    <p className="">
                        <span className="font-bold">Fav Quote: </span>
                        "Carpe Diem"
                    </p>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Home