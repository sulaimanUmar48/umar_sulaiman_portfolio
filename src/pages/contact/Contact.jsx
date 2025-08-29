import titleHighlighter from '../../assets/elements/title_highlight.svg'
import sun_svg from '../../assets/elements/sun.svg'
import { useState } from 'react'


const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const date = new Date().toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                });

  return (
    <main className="w-full flex-1 bg-primary px-[40px]">
         <h1 className="text-lg text-center w-fit mx-auto">
            Get In Touch
            <img src={titleHighlighter}  className="w-full"/>
        </h1>
        <p className='my-4 text-center text-sm relative w-fit mx-auto'>
            Be it a job or business proposal, I'd love to hear from you
            <img src={sun_svg} className='absolute -right-5 -top-4'/>
        </p>
        <div className='flex h-[430px] max-sm:flex-col max-sm:mt-20 gap-40 max-sm:gap-10'>
            <form 
                method='POST'
                action={'https://formsubmit.co/sulaiman.tech20@gmail.com'}
                className='flex-1 w-full flex flex-col  justify-center gap-4'
            > 
                <fieldset className='w-full flex gap-4'>
                    <label className='relative flex-1'>
                        <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} className='border-b-1 w-full text-sm p-2 border-text-primary/50 outline-0' placeholder='NAME' required/>
                    </label>
                    <label className='relative flex-1'>
                        <input type="email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className='border-b-1 w-full text-sm p-2 border-text-primary/50 outline-0' placeholder='EMAIL'  required/>
                    </label>
                </fieldset>
                <textarea 
                    name='messaage'
                    className='resize-none placeholder:text-text-primary border-b-1 w-full  h-[180px] p-2 text-sm outline-0' 
                    placeholder='WRITE YOUR MESSAGE... ' 
                    required
                >
                </textarea>
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_next" value={import.meta.env.PROD ? `https://umar-sulaiman-portfolio.vercel.app/thank_you` : `http://localhost:5800/thank_you` }/>
                <input type="hidden" name="_subject" value={`New Message - %${name}% - %${date}%`}/>
                <button className='text-xs px-7 py-3 w-fit bg-accent-two rounded font-semibold text-white active:accent-accent-one cursor-pointer'>SEND MESSAGE</button>
            </form>
            <div className='flex-1 font-nunito flex flex-col justify-center gap-10 pb-20'>
                <div className='w-fit'>
                    <p className='text-xs text-text-primary/50 font-bold w-fit'>EMAIL</p>
                    <p className='text-text-primary font-bold w-fit'>sulaiman.tech20@gmail.com</p>
                </div>

                <div className='w-fit'>
                    <p className='text-xs text-text-primary/50 font-bold w-fit'>Phone</p>
                    <p className=' text-text-primary font-bold w-fit'>+23491-6370-1212</p>
                </div>
                <div className='w-[150px]'>
                    <p className='text-xs text-text-primary/50 font-bold w-fit mb-2'>Socials</p>
                    <ul className='flex justify-between gap-2 w-[150px] '>
                        <a href="https://x.com/imsulaiman_Umar" target='_blank'>
                            <li className='w-8 aspect-square rounded-full border-[1.5px] border-text-primary/30 flex justify-center items-center hover:bg-accent-two active:bg-accent-one active:scale-96 cursor-pointer hover:border-text-primary'>
                                <i className="text-[12px] fa-brands fa-x-twitter"></i>
                            </li> 
                        </a>
                        <a href="https://www.linkedin.com/in/sulaiman-umar-4a4a14343/" target='_blank'>
                            <li className='w-8 aspect-square rounded-full border-[1.5px] border-text-primary/30 flex justify-center items-center hover:bg-accent-two active:bg-accent-one active:scale-96 cursor-pointer hover:border-text-primary'>
                                <i className="text-[12px] fa-brands fa-linkedin-in"></i>
                            </li>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=9163701212&text=Hello,%20I%20want%20more%20information%20concerning%20your%20skills%20and%20products." target='_blank'>
                            <li className='w-8 aspect-square rounded-full border-[1.5px] border-text-primary/30 flex justify-center items-center hover:bg-accent-two active:bg-accent-one active:scale-96 cursor-pointer hover:border-text-primary'>
                                <i className="text-[12px] fa-brands fa-whatsapp"></i>
                            </li>
                        </a>
                        <a href="https://www.instagram.com/iamsulaiman_umar/" target='_blank'>
                            <li className='w-8 aspect-square rounded-full border-[1.5px] border-text-primary/30 flex justify-center items-center hover:bg-accent-two active:bg-accent-one active:scale-96 cursor-pointer hover:border-text-primary'>
                                <i className="text-[12px] fa-brands fa-instagram"></i>
                            </li>
                        </a>
                    </ul>

                </div>                
            </div>
        </div>
    </main>
  )
}

export default Contact