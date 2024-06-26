import React, { useState } from 'react'

const Manager = () => {
  const [user, setUser] = useState({ "ownername": "", "businessname": "", "businesstype": "", "email": "", "phone": "", "username": "", "password": "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const {name,email,password} = user;
    const response = await fetch(`http://localhost:5000/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...user })
    });
    const json = await response.json();
    console.log(json)
    // const expiryDate = new Date();

    // expiryDate.setTime(expiryDate.getTime() + (24 * 60 * 60 * 1000)); // 24 hours from now
    // document.cookie = `auth-token=${json.token}; expires=${expiryDate.toUTCString()}`;
    // if (json.token) {
    //   localStorage.setItem("auth-token", json.token);
    //   props.showAlert("Account Created","success");
    //   navigate('/')
    // } else {
    //   props.showAlert("Invalid Details","danger")
    // }
  }

  return (
    <div>
      <section className="">

        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 bg-green-50" style={{ minHeight: "100vh" }}>

          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-2xl font-bold leading-tight text-black">Sign up to your account</h2>

            <form action="#" method="POST" className="mt-8" onSubmit={handleSubmit}>
        
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Owner Name (Admin){' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="Text"
                      placeholder="Enter your Name"
                      onChange={handleChange}
                      name='ownername'
                      required
                    />
                  </div>
                </div>


                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Business Name :
                      {' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="Text"
                      placeholder="Enter the name of your Business"
                      onChange={handleChange}
                      name='businessname'
                      required
                    ></input>
                  </div>
                </div>

                <div>

                <div className="flex items-center justify-between">
                  <label htmlFor="businesstype" className="text-base font-medium text-gray-900">
                    {' '}
                    Business Type :
                    {' '}
                  </label>
                </div>
                <div className="mt-2">
                  <select name="businesstype" id="businesstype" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" onChange={handleChange} required>
                    <option value="" selected>Choose...</option>
                    <option>Hotel</option>
                    <option>Valets</option>
                    <option>Bars</option>
                    <option>Restaurants</option>
                    <option>Salons</option>
                    <option>Non-Profits</option>
                  </select>
                  {/* <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="Text"
                  placeholder="Enter the Type of your Business you have"
                ></input> */}
                </div>
              </div>

                {/* <div>

              <div className="flex items-center justify-between">
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Business Type :
                  {' '}
                </label>
              </div>
              <div className="mt-2">
                <select name="" id=""  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value=""></option>
                  <option value="">Full-Time</option>
                  <option value="">Part-Time</option>
                  <option value="">Temporary</option>
                  <option value="">Interns</option>
                  <option value="">Seasonal</option>
                  <option value="">Leased</option>
                </select>
              </div>
            </div>

                

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Email:
                      {' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="xyz@gmail.com"
                      onChange={handleChange}
                      name='email'
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      required
                    ></input>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Phone number:
                      {' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="Number"
                      placeholder="Enter Phone Number"
                      onChange={handleChange}
                      name='phone'
                      pattern="[0-9]{10}"
                      required
                    ></input>
                  </div>
                </div>

                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Username{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="Text"
                      placeholder="Enter your Username"
                      onChange={handleChange}
                      name='username'
                      minLength={5}
                      required
                    ></input>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Password:
                      {' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="*********"
                      onChange={handleChange}
                      name='password'
                      minLength={5}
                      required
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-teal-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-teal-200"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Manager
