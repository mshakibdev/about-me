import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import FireBase from '../assets/firebase.png'
import AWS from '../assets/aws.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
const Skills = () => {
	const skillSet = [
		{
			name: 'Html',
			img: HTML,
		},
		{
			name: 'Css',
			img: CSS,
		},
		{
			name: 'Tailwind',
			img: Tailwind,
		},
		{
			name: 'JavaScript',
			img: JavaScript,
		},
		{
			name: 'React',
			img: ReactImg,
		},
		{
			name: 'Node',
			img: Node,
		},
		{
			name: 'Mongo',
			img: Mongo,
		},
		{
			name: 'Firebase',
			img: FireBase,
		},
		{
			name: 'AWS',
			img: AWS,
		},
		{
			name: 'GitHub',
			img: GitHub,
		},
	]
	return (
		<div name='skills' className='w-full h-screen bg-[#0a192f]'>
			{/* Container */}
			<div className='max-w-[1000px] px-4 flex flex-col text-[#d1d5db] lg:mx-auto  w-full h-full justify-center '>
				<div>
					<p className='text-4xl font-bold inline border-b-4 border-pink-600'>
						Skills
					</p>
					<p className='py-4'>// These are the technologies I've worked with</p>
				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
					{skillSet.map((skill) => (
						<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
							<img className='w-20 mx-auto' src={skill.img} alt='HTML icon' />
							<p className='my-4'>{skill.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Skills
