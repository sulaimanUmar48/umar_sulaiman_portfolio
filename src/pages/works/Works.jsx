import titleHighlighter from '../../assets/elements/title_highlight.svg'
import quizImage from '../../assets/project_images/quizler.png'
import africaDevImage from '../../assets/project_images/africa_development_summit.png'
import shopImage from '../../assets/project_images/shopping_cart.png'

const Works = () => {


    const projects = [
        {
            name: "Quizller",
            liveDemo: "https://quizzler-app.vercel.app/",
            githubLink: "https://github.com/sulaimanUmar48/QuizzlerApp.git",
            image: quizImage,
            description: "This is a quiz app I built using React and Firebase"
        },
        {
            name: "Africa Development Summit",
            liveDemo: "https://africa-development-summit.vercel.app/",
            githubLink: "https://github.com/sulaimanUmar48/africa-development-summit.git",
            image: africaDevImage,
            description: ""
        },
        {
            name: "Shopping Cart",
            liveDemo: "https://shopping-cart-zeta-dusky-21.vercel.app/",
            githubLink: "https://github.com/sulaimanUmar48/ShoppingCart.git",
            image: shopImage,
            description: ""
        }
    ];

  return (
    <main className="w-full flex-1 bg-primary">
         <h1 className="text-lg text-center w-fit mx-auto">
            Works
            <img src={titleHighlighter}  className="w-full"/>
        </h1>
        <p className='text-xs text-center my-2'>Here are some of the projects I've contributed to or worked on these recent years    </p>
        <div className='p-[40px] flex flex-wrap items-center justify-center gap-[30px]'>
            {projects.map((project, i) => 
                <div key={i} className='w-[250px] p-2 bg-secondary rounded-[10px] border-1 border-text-primary/10 group relative hover:border-accent-one/50 select-none'>
                    <figure className='rounded-[10px] overflow-hidden h-[160px]'>
                        <img src={project.image} className='h-full w-full object-cover' />
                    </figure>
                    <div className='absolute top-36 flex w-fit gap-2 left-1/2 -translate-1/2 items-center'>
                        <a href={project.liveDemo} target='_blank'>
                            <button className="bg-white/20 py-2 px-4 rounded text-xs backdrop-blur-[4px] text-white border-1 hover:border-accent-two hover:text-accent-two cursor-pointer whitespace-nowrap">
                                Live Site
                            </button>
                        </a>
                        <a href={project.githubLink} target='_blank'>
                            <button className="bg-white/20 py-2 px-4 rounded text-xs backdrop-blur-[4px] text-white border-1 hover:border-accent-two hover:text-accent-two cursor-pointer whitespace-nowrap ">
                                Github Repo
                            </button>
                        </a>
                    </div>
                    <div className='border-1 border-text-primary/10 mt-2 w-full min-h-[40px] p-1 rounded-[6px]'>
                        <p className='text-[10px] text-text-primary/50 group-hover:text-text-primary/100 '>
                            {project.description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    </main>
  )
}

export default Works