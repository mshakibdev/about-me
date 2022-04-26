import React from 'react'
import photographySite from '../assets/photography.png'
import travelSite from '../assets/travel.png'
import foodCartSite from '../assets/foodCart.png'
import vidlySite from '../assets/vidly.png'
import quoteSite from '../assets/quotes.png'
import portfolioSite from '../assets/portfolio.png'
const Work = () => {
	return (
		<div name='work' className='w-full h-screen  bg-[#0a192f]'>
			{/* Container */}
			<div className='max-w-[1000px]  p-4 flex flex-col  text-[#d1d5db] lg:mx-auto  w-full h-full justify-center '>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
						Work
					</p>
					<p className='py-6'>Check out some of my recent work</p>
				</div>
				{/* Work-List container */}
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
					{/* Grid Item */}
					<div
						style={{backgroundImage: `url(${travelSite})`}}
						className='shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100'>
							<span className='text-xl font-bold  text-white tracking-wider'>
								Travel WebSite (Static)
							</span>
							<div className='pt-8 text-center'>
								<a href='https://travelsite2022.netlify.app/index.html'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='https://github.com/shakib313/TravelWebsite'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					<div
						style={{backgroundImage: `url(${photographySite})`}}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100'>
							<span className='text-lg font-bold text-center text-white tracking-wider'>
								PhotoGraphy WebSite (Static)
							</span>
							<div className='pt-8 text-center'>
								<a href='https://shakib313.github.io/photography/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='https://github.com/shakib313/photography'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{backgroundImage: `url(${portfolioSite})`}}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100'>
							<span className='text-lg font-bold text-white tracking-wider'>
								Portfolio Site (Tailwind CSS)
							</span>
							<div className='pt-8 text-center'>
								<a href='https://reactmeals-food-order-app.netlify.app/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{backgroundImage: `url(${foodCartSite})`}}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100'>
							<span className='text-xl font-bold text-white tracking-wider'>
								Food Order App (React.js)
							</span>
							<div className='pt-8 text-center'>
								<a href='https://reactmeals-food-order-app.netlify.app/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='https://github.com/shakib313/food_order_with_form'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{backgroundImage: `url(${vidlySite})`}}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100'>
							<span className='text-xl font-bold text-white tracking-wider'>
								Movie Store App (React.js)
							</span>
							<div className='pt-8 text-center'>
								<a href='https://vidly-apps.netlify.app/movies'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='https://github.com/shakib313/Vidly'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{backgroundImage: `url(${quoteSite})`}}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100'>
							<span className='text-lg font-bold text-white tracking-wider'>
								Quotes Genrator App (React.js)
							</span>
							<div className='pt-8 text-center'>
								<a href='https://greatquotelist.netlify.app/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='https://github.com/shakib313/quoteApp'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Work
