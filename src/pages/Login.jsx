import {} from 'react'

export default function Login() {
  return (
    <div className='signup-div'>
    <div className='container-signup'>
     <h1>Lets Connect</h1>
     <form>
       <div className='form-div'>
         <label
            htmlFor='username'
            className=''>Username
         </label>
         <input  type='text' name='name' id='name'
         placeholder='Enter your username' className='name'/>
      </div>

      <div className='form-div'>
         <label
            htmlFor='email'
            className=''>Email </label>
         <input  type='email' name='email' id='email'
         placeholder='Enter your email' className='name'/>
      </div>

 <div className='form-div'>
         <label htmlFor='password'className=''>Password  </label>
         <input  type='password' name='password' id='password'
         placeholder='Enter your password' className='name'/>
      </div>

      <div className='form-div'>
         <label htmlFor='password'className=''>Select your account type </label>
       <select>
         <option value="volvo">Buyer</option>
         <option value="saab">Seller</option>
       </select>
      </div>

      {/* <div className='form-div'>
         <label htmlFor='password'className=''>Login to your account </label>
      <button>Sign up</button>
      </div> */}
     </form>
    </div>
   </div>
  )
}
