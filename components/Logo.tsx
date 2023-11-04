"use client"

import Link from "next/link";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

import LogoImage from "@logos/black.png"


const Logo = () => {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
        <div className="flex items-center w-40 h-15">
            <AspectRatio
                ratio={16 / 9}
                className="flex items-center justify-center"
            >
                <Image 
                    priority
                    src={LogoImage}
                    alt="logo"
                    className="dark:filter dark:invert"    
                />   
            </AspectRatio>
        </div>
    </Link>
  )
}

export default Logo