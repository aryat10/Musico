'use client'
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./background-gradient"

interface Course{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
        image: "/courses/guitar.jpg" 
}
export default function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course:Course)=> course.isFeatured)
  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
       <h2 className="text-base text-teal-600 font-semibold tracking-wide">FEATURED COURSES</h2> 
       <p className="mt-2 text-3xl leading-white sm:text-4xl">LEARN WITH THE BEST</p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-colos-3 gap-8 justify-center">
            {featuredCourses.map((course:Course)=>(
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zink-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flexmflex-col items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-nuetral-200"> {course.title} </p>
                    <p className="text-sm text-nuetral-600 dark:text-nuetral-400 flex-grow"> {course.description} </p>
                    <Link href={`/courses/${course.slug}`}>
                      Learn More
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
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

