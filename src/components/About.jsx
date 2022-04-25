import React from 'react'

const About = () => {
	return (
		<div name='about' className='w-full h-screen  bg-[#0a192f]'>
			{/* Container */}
			<div className='max-w-[1000px] pb-2  px-4 flex flex-col text-[#d1d5db]  lg:mx-auto  h-full justify-center '>
				<div className='flex items-start'>
					<div className='basis-1/2  pb-[35px] sm:text-right '>
						<p className='font-bold text-[45px]  inline  border-b-4 border-pink-600'>
							About
						</p>
					</div>
					<div className='basis-1/2'></div>
				</div>
				<div className='sm:flex'>
					<div className='pb-8 mr-10 text-4xl font-bold sm:text-right basis-1/2'>
						<p>Hi. I'm Shakib, nice to meet you. Please take a look around.</p>
					</div>
					<div className='basis-1/2'>
						<p>
							I am passionate about building excellent software that improves
							the lives of those around me. I specialize in creating software
							for clients ranging from individuals and small-businesses all the
							way to large enterprise corporations. What would you do if you had
							a software expert available at your fingertips?
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
