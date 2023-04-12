import { useState } from "react"

// Components
import LoginForm from "./Forms/LoginForm"
import SignupForm from "./Forms/SignupForm"

export default function LoginPage() {

  const [showLoginForm, setShowloginForm] = useState(true)

  return (
    <div className='login-page container mx-auto px-2 lg:px-0 relative'>
      <div id="bg-shape" className="w-48 h-48 bg-gradient-to-r from-blue to-pink absolute top-1/3 right-1/3 rounded-full opacity-50"></div>
      <div className=" bg-white bg-opacity-25 backdrop-blur-3xl flex flex-col justify-between p-3 rounded-2xl border-2 border-white mb-5 lg:flex-row lg:w-9/12 lg:mx-auto lg:bg-gradient-to-r lg:from-white lg:to-transparent lg:bg-opacity-10 ">
        {/* Forms  */}
        <div id='forms' className='lg:w-6/12'>
          {
            showLoginForm ? (
              <LoginForm  showLogin={setShowloginForm}/>

            ) : (
              <SignupForm showLogin={setShowloginForm}/>
            )
          }
        </div>
        {/* End of Forms  */}
        {/* Side image  */}
        <div id='side-image' className='hidden lg:w-6/12 rounded-2xl overflow-hidden bg-gradient-to-r from-pink-1 to-pink-2 lg:flex items-center'>
          <img src="./images/public-img/login-image.webp" alt="login" className='max-w-full h-fit' />
        </div>
        {/* End of Side image  */}
      </div>
    </div>
  )
}
