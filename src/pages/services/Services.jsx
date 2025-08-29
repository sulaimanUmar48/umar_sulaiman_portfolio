import titleHighlighter from '../../assets/elements/title_highlight.svg'
import sun_svg from '../../assets/elements/sun.svg'


const Services = () => {
  return (
    <main className="w-full flex-1 bg-primary">
        <h1 className="text-lg text-center w-fit mx-auto">
            Services
            <img src={titleHighlighter}  className="w-full"/>
        </h1>
        <p className='my-2 text-center text-sm relative w-fit mx-auto max-sm:text-xs'>
            I specialize in <span className='text-accent-one'>front-end Web Design</span> and <span className='text-accent-two'>Development</span> and below are my pricing plans 
            <img src={sun_svg} className='absolute -right-5 -top-4'/>
        </p>
        <div className='flex justify-center mt-20 max-sm:flex-col max-sm:items-center'>
            <div className='w-[300px] bg-secondary p-4 text-center font-nunito hover:scale-105 hover:bg-accent-two/80 hover:text-white group transition-all duration-200 ease-out'>
                <div className='w-[100px] aspect-square mx-auto  relative'>
                    <svg viewBox='0 0 80 80' className='w-full h-full'> 
                        <circle
                            cx={40}
                            cy={40}
                            r={30}
                            fill='none'
                            className='stroke-18 stroke-accent-two/20 group-hover:stroke-accent-two/90'
                        > 
                        </circle>
                    </svg>
                    <span className='absolute top-1/2 left-1/2 -translate-1/2 font-semibold'>01</span>
                </div>
                <p className='text-sm font-bold my-2'>Basic</p>
                <p className='text-xs'>$200 - $400</p>
                <div className='text-[11px] my-4'>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>Up to 3 pages</p>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>Mobile friendly Design</p>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>Template-based layouts</p>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>Contact form</p>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>Delivery: ~1 week</p>
                </div>
                <p className='text-[11px] mt-8'>
                    Perfect for individuals and small businesses looking for a simple, professional site
                </p>
            </div>
            <div className='w-[300px] bg-secondary p-4 text-center font-nunito hover:scale-105 hover:bg-accent-two/80 hover:text-white group transition-all duration-200 ease-out'>
                <div className='w-[100px] aspect-square mx-auto  relative'>
                    <svg viewBox='0 0 80 80' className='w-full h-full'> 
                        <circle
                            cx={40}
                            cy={40}
                            r={30}
                            fill='none'
                            className='stroke-18 stroke-accent-two/20 group-hover:stroke-accent-two/90'
                        > 
                        </circle>
                    </svg>
                    <span className='absolute top-1/2 left-1/2 -translate-1/2 font-semibold'>02</span>
                </div>
                <p className='text-sm font-bold my-2'>Standard</p>
                <p className='text-xs'>$500 - $800</p>
                <div className='text-[11px] my-4'>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>Up to 7 pages</p>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>Custom Design tailored to your brand</p>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>Mobile and Tablet Optimized</p>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>Basic SEO</p>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>Contact forms & Google Maps Integration</p>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>Delivery: ~2-3 weeks</p>
                </div>
                <p className='text-[11px] mt-8'>
                    Ideal for businesses ready to stand out and grow online
                </p>
            </div>
            <div className='w-[300px] bg-secondary p-4 text-center font-nunito hover:scale-105 hover:bg-accent-two/80 hover:text-white group transition-all duration-200 ease-out'>
                <div className='w-[100px] aspect-square mx-auto  relative'>
                    <svg viewBox='0 0 80 80' className='w-full h-full'> 
                        <circle
                            cx={40}
                            cy={40}
                            r={30}
                            fill='none'
                            className='stroke-18 stroke-accent-two/20 group-hover:stroke-accent-two/90'
                        > 
                        </circle>
                    </svg>
                    <span className='absolute top-1/2 left-1/2 -translate-1/2 font-semibold'>03</span>
                </div>
                <p className='text-sm font-bold my-2'>Premium</p>
                <p className='text-xs'>$1000+</p>
                <div className='text-[11px] my-4'>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>8+ pages or unlimited sections</p>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>Fully custom design</p>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>{'CMS integration(Shopify, e.t.c)'}</p>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>Blog, shop, booking system, or advanced features</p>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>Advanced SEO & Analytics setup</p>
                    <p className='py-2 border-t-1 border-b-1 border-primary'>Delivery: ~4-6 week</p>
                </div>
                <p className='text-[11px] mt-8'>
                    Best for businesses needing advanced functionality & scalability
                </p>
            </div>
        </div>
        <p className='text-center my-16 text-sm'>Each plan comes with maintainance and support. All being <span className='text-accent-one font-semibold'>$10-$25/hour</span>.</p>
    </main>
  )
}

export default Services