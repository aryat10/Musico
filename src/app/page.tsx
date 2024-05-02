import Herosection from "@/components/ui/Herosection";
import FeaturedCourses from "@/components/ui/FeaturedCourses";
export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
    <Herosection/> 
    <FeaturedCourses/>
   </main>
  );
}
