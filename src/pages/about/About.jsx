import portraitPic from "../../assets/potraits/_OPE4028.jpg"
import lines from "../../assets/elements/wifi_looking_element.svg"
import titleHighlighter from '../../assets/elements/title_highlight.svg'
import toolsHighlighter from '../../assets/elements/tools_highlighter.svg'
import { useNavigate } from "react-router-dom"
import resume from '../../assets/documents/umar_sulaiman_resume.pdf'


const About = () => {

    const tools = [{name: "HTML", rating: 80},{name: "CSS", rating: 85}, {name: "JavaScript", rating: 75}, {name: "React", rating: 70}, {name: "Tailwind", rating: 85}, {name: "Firebase", rating: 70}]

    const navigate = useNavigate()



  return (
    <main className="w-full flex-1 bg-primary">
        <section className="w-full flex justify-start items-center gap-12 flex-col pt-6 relative "
            style={{minheight: "calc(100dvh - 60px)"}}
        >
            <h1 className="text-lg text-center ">
                About Me
                <img src={titleHighlighter}  className="w-full"/>
            </h1>
            <div className="flex w-fit gap-20 max-lg:flex-col">
                <figure className="min-w-[370px] max-w-[370px] aspect-square relative border-5 rounded-[20px] border-text-primary/10 max-sm:max-w-[300px] max-sm:min-w-[300px] max-sm:mx-auto ">
                    <img src={portraitPic} className="w-full h-full object-cover object-top rounded-[20px]" />
                    <img src={lines} className="absolute -top-10 -left-10" />
                </figure>
                <div className="w-[400px] flex flex-col gap-6">
                    <p className="text-3xl font-semibold -ml-3 max-lg:text-center"><span className="text-accent-one">“</span>Hi There<span className="text-accent-one">”</span></p>

                    <p className="text-xs leading-5 max-sm:px-8 max-lg:text-center">
                        I am a self-taught front-end web developer with a strong foundation in React, Tailwind CSS, HTML, CSS, and JavaScript, and I regularly work with libraries such as TanStack Table, React Router, and Axios to build efficient, dynamic applications. One of my notable projects is a quiz app, which sharpened my ability to combine clean code with engaging functionality. I am passionate about crafting clean user interfaces, smooth user experiences, and highly accessible designs that put people first. Driven by curiosity and a constant hunger to learn, I am steadily expanding my knowledge with the goal of growing into a full-stack developer and contributing to innovative solutions in a startup environment.
                    </p>
                    <div className="flex gap-4 text-white max-lg:mx-auto pb-10">
                        <button className="text-sm px-4 py-2 bg-accent-two rounded cursor-pointer active:scale-95"
                            onClick={()=>{navigate('/contact')}}
                        >
                            Hire Me
                        </button>
                        <a href={resume} download>
                            <button className="text-sm px-4 py-2 bg-accent-one rounded cursor-pointer active:scale-95">Download Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section className="p-[40px] pb-[80px] max-sm:mt-10 ">
            <h2 className="font-nunito text-2xl font-semibold relative w-fit">
                Learn more about <span className="text-accent-one">My Tools</span>
                <img src={toolsHighlighter} className="absolute right-0 w-30"/>
            </h2>
            <p className="mt-12 ml-14 max-sm:text-xs max-sm:ml-0 max-sm:text-center">My proficiency in the tools I use to pay the bills ;</p>
            <div className="flex gap-10 mt-20 w-[80%] flex-wrap mx-auto justify-center">
                {tools.map( tool => {

                    const offset = 50 - ((tool.rating / 100) * 50) 
                    return(
                        <div className="w-40 h-40">
                            <div className="w-40 h-40 relative">
                                <svg viewBox="0 0 20 20" className="h-full w-full relative"> 
                                    <circle
                                        cx={10}
                                        cy={10}
                                        r={8}
                                        fill="none"
                                        strokeDashoffset={offset}
                                        strokeDasharray={50}
                                        strokeLinecap="round"
                                        className="stroke-[0.5px] stroke-accent-one"
                                    > 
                                    </circle>
                                </svg>
                                <span className="absolute top-1/2 left-1/2 -translate-1/2">{`${tool.rating}`}%</span>
                            </div>
                            <p className="text-center">{tool.name}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    </main>
  )
}

export default About