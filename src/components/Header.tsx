'use client'

import Image from "next/image"
import CustomButton from "./Custom/CustomButton"
import { useRouter } from "next/navigation"

const Header = () => {
    const router = useRouter()

    const handleSignUp = () => {
        router.push('/#')
    }

    return <div className="header w-full px-[100px] my-[46px] flex items-center justify-between">
        <Image width={200} height={60} src='/img/logo.png' alt="" className="logo" />

        <div className="nav flex items-center justify-between gap-16">
            <div className="text-[22px] cursor-pointer" >CATALOGUE</div>
            <div className="text-[22px] cursor-pointer" >FASHION</div>
            <div className="text-[22px] cursor-pointer" >FAVOURITE</div>
            <div className="text-[22px] cursor-pointer" >LIFESTYLE</div>
            <CustomButton title={'SIGN UP'} handleClick={handleSignUp} />
        </div>
    </div>
}

export default Header