import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

interface StartupCardType {
  _id: number | string
  _createdAt: string
  views: number
  author: {
    _id: number | string
    name: string;
  }
  description: string
  image: string
  category: string
  title: string
}
//destructuring:
const StartupCard = ({post}:{post: StartupCardType}) => {
  const {_createdAt, views, author:{_id:authorId,name}, title, category, _id, image, description} = post;


  return (
    <li className="relative bg-[#f4f4f4] px-6 py-4 rounded-[20px] border-t-[3px] border-l-[3px] border-black overflow-hidden hover:border-red-500">
  {/* Simulated thick bottom/right borders using pseudo-shadow */}
  <div className="absolute inset-0 rounded-[20px] border-b-[6px] border-r-[6px] border-black hover:border-red-500 "></div>

  <div className="relative z-10 flex justify-between items-center">
    <p className="text-[16px] font-medium text-black">
      {formatDate(_createdAt)}
    </p>
    <div className="flex items-center gap-1.5 text-black">
      <EyeIcon className="size-5 text-primary" />
      <span className='text-[16px] font-medium'>{views}</span>
    </div>
  </div>

      <div className='flex-between mt-5 gap-5'>
        <div className='flex-1'>
          <Link href={`/user/${authorId}`}>

          <p className='text-[16px] font-bold line-clamp-1'>{name}</p>
          
          
          </Link>
          <Link href={'/startup/${_id}'}>
          <h3 className='text-[26px] font-semibold line-clamp-1'>{title}</h3>
          
          </Link>
        </div>

        <Link href={`/user/${authorId}`}>
        <Image src='https://placehold.co/48x48' alt='place' width={48} height={48} className='rounded-full'/>
        
        
        </Link>




      </div>

      <Link href={'/startup/${_id}'}>
      <p className='font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all'>
        {description}
        
        </p>
        <img src={image} alt="placeholder" className='w-full h-[164px] rounded-[10px] object-cover' />
        </Link>

        <div className='flex justify-between items-center gap-3 mt-5'>
          <Link href={`/?query={category.toLowerCase()}`}>

          <p className='text-[16px] font-medium'>{category}</p>
          </Link>
        <Button className='rounded-full bg-black-200 font-medium text-[16px] text-white px-5 py-3 !important' asChild>
          <Link href={`/startup/${_id}}`}> Details
          
          </Link>
        </Button>
        
        </div>


      </li>
  )
}

export default StartupCard