import React from 'react'

const contact = () => {
  return (
    <div>
      <div class="flex justify-center items-center mt-20 mb-20 sm:mt-20 sm:mb-20 md:mt-20 md:mb-20 lg:mt-20 lg:mb-20 bg-white">
          <div class="container mx-auto my-4 px-4 lg:px-20">
            <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div class="flex">
                <h1 class="font-bold uppercase text-4xl">Let's Get Started</h1>
              </div>
              <div>
                <p class="mt-2 flex ">Send us your contact details and one of our student advisors will get in touch with you about next steps!</p>
              </div>
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="First Name*" />
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Last Name*" />
                <select id="countries" class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                  <option selected>Program of Interest</option>
                  <option value="IAE1">IAE1 - High Beginner</option>
                  <option value="IAE2">IAE2 - Low Intermediate</option>
                  <option value="IAE3">IAE3 - Upper Intermediate</option>
                  <option value="IAE4">IAE4 - Advanced</option>
                  <option value="PACE">PACE</option>
                </select>
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email" placeholder="Email*" />
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number" placeholder="Phone*" />
              </div>
                <div class="my-4">
                  <textarea placeholder="Questions?" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div class="my-2 w-1/2 lg:w-1/4">
                  <button class="uppercase text-sm font-bold tracking-wide bg-light-purple text-white p-3 rounded-lg w-full 
                              focus:outline-none focus:shadow-outline">
                    LEARN ENGLISH WITH US
                  </button>
                </div>
              </div>

              <div
                class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-dark-cyan rounded-2xl">
                <div class="flex flex-col text-white">
                  <h1 class="font-bold uppercase text-4xl my-4">Drop in our school</h1>
                  <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    tincidunt arcu diam,
                    eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
                  </p>

                  <div class="flex my-4 w-2/3 lg:w-1/2">
                    <div class="flex flex-col">
                      <i class="fas fa-map-marker-alt pt-2 pr-2" />
                    </div>
                    <div class="flex flex-col">
                      <h2 class="text-2xl">Our Address</h2>
                      <p class="text-gray-400">180 Main St, Winnipeg, MB R3C 1A6</p>
                    </div>
                  </div>
                  
                  <div class="flex my-4 w-2/3 lg:w-1/2">
                    <div class="flex flex-col">
                      <i class="fas fa-phone-alt pt-2 pr-2" />
                    </div>
                    <div class="flex flex-col">
                      <h2 class="text-2xl">Call Us</h2>
                      <p class="text-gray-400">Tel: 1-888-709-0730</p>
                      <p class="text-gray-400">Fax: 1-888-709-0730</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default contact
