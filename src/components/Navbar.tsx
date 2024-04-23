// import React from "react";
'use client';
import React , { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return(
        <div 
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            {/* Navbar yahan rhega  */}
            <Menu setActive={setActive}>
              <Link href={"/"}>
                 
                  <MenuItem setActive={setActive}
                      active={active} 
                      item="Home"> 
                     
                    </MenuItem>
                  
             </Link>

                    {/* <MenuItem setActive={setActive}
                      active={active} 
                      item="Our Courses"> 
                      <HoveredLink href="/courses">
                        All courses 
                      </HoveredLink>
                    </MenuItem> */} 

        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/interface-design">Basic Music Theory</HoveredLink>
            <HoveredLink href="/seo">Advanced Composition</HoveredLink>
            <HoveredLink href="/branding">Music production</HoveredLink>
          </div>
        </MenuItem>

        <Link href={"/contact"}>
        <MenuItem setActive={setActive}
                      active={active} 
                      item="Contaact us"> 
                     
                    </MenuItem>
        </Link>
                
            </Menu>
        </div>
    )
}

export default Navbar;