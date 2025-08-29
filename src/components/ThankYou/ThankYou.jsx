import { useNavigate } from "react-router-dom"

const ThankYou = () => {
    const navigate = useNavigate()

  return (
    <main className="flex-1 bg-primary flex justify-center items-center absolute h-screen z-10000 w-full">
        <div className="bg-secondary min-w-[350px] w-[90%] max-w-[500px] p-8 rounded-lg">
            <h2 className="font-bold mb-3">
                THANK YOU
            </h2>
            <p className="text-xs">Thank you for reaching out, I will get back to you shortly...</p>
            <button 
                className="px-4 py-2 text-xs bg-text-primary text-primary rounded float-end mt-6 cursor-pointer"
                onClick={()=>{navigate("/contact", {replace: true})}}
            >
                Go Back
            </button>
        </div>
    </main>
  )
}

export default ThankYou