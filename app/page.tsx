import Image from "next/image";
import SearchForm from "../components/SearchForm";
import StartupCard from "@/components/StartupCard";

interface StartupCardType {
  _id: number | string
  _createdAt: string
  views: number
  author: {
    _id: number | string
    name: string
  }
  description: string
  image: string
  category: string
  title: string
}


export default async function Home({searchParams}:{
  searchParams: Promise <{query?: string}>
}) {
  const query =(await searchParams).query;

  const posts = [{
    _createdAt: new Date().toLocaleDateString(),
    views: 55,
    author:{_id:1, name: 'Daniel'},
    _id:1,
    description: 'This is a description.',
    image:'https://plus.unsplash.com/premium_photo-1682464708085-95b4486e2c32?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category:'Robots',
    title:'We Robots',
  }

  ]

  return (
    <>
   <section className="relative w-full min-h-[530px] flex justify-center items-center flex-col py-10 px-6 overflow-hidden">
  {/* Pattern background with bg-primary */}
  <div className="absolute inset-0 z-0 bg-primary 
    [background-image:linear-gradient(to_right,transparent_48%,rgba(251,232,67,0.2)_48%,rgba(251,232,67,0.6)_51%,transparent_51%)] 
    [background-size:5%_100%] bg-center bg-repeat-x">
  </div>

  {/* Content on top */}
  <div className="relative z-10 flex flex-col items-center text-center">
    <h1 className="heading sm:text-[54px] sm:leading-[64px]">
      Pitch Your Startup,<br />Connect With Entrepreneurs
    </h1>
    <p className="sub-heading !max-w-3xl">
      Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
    </p>
  <SearchForm query={query}/>
  </div>



</section>

<section className="px-6 py-10 max-w-7xl mx-auto">
<p className="text-[30px] font-semibold">
  {query ? `Search results for '${query}` : 'All Startups'}

</p>
<ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
  {posts ?.length > 0 ?(
    posts.map((post: StartupCardType, index: number)=>(<StartupCard key={post?._id} post={post}/>

    ))
  ):(
    <p className="no-results">No startups found</p>
  
  )}


</ul>

</section>




    
    </>
    
  );
}
