import Link from "next/link"
import courseData from "../data/music_courses.json"
export default function FeaturedCourses() {
  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
       <h2 className="text-base text-teal-600 font-semibold tracking-wide">FEATURED COURSES</h2> 
       <p className="mt-2 text-3xl leading-white sm:text-4xl">LEARN WITH THE BEST</p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-colos-3 gap-8 justify-center">
            test
        </div>
      </div>
      <div className="text-center mt-20">
        <Link className="bg-slate-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full "
         href={"/courses"}>
            View All Courses
        </Link>
      </div>
    </div>
  )
}

