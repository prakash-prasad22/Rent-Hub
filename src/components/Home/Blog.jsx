import React from 'react'
import { blogs } from '../../assets/data/blogs'

function Blog() {
  return (
    <div className='flex items-center justify-center gap-2 rounded-lg'>
        {blogs.map((blog , index) => (
            <div key={index} className='w-1/3 h-[200px] flex flex-col gap-2'>
                <img src={blog.img} alt="" className='w-full h-full object-scale-down'/>
                <h1 className='font-bold text-[16px]'>{blog.title}</h1>
                <p>{blog.description} <span className='font-bold'>Continue Reading </span></p>
            </div>
        ))}
    </div>
  )
}

export default Blog