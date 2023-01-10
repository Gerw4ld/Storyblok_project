import {FunctionComponent} from "react";
import Image from "next/image";
import backgroundImage from "./../../public/background.jpg"

const HeroBanner: FunctionComponent<any> = ({}) => {
    return (
        <div className={"relative m-auto flex max-w-full items-center justify-center p-4 min-h-[480px]"}>
            <Image width={"1280"} height={"1280"} src={backgroundImage} alt={'background image'} className={"w-full h-full absolute"} loading={"eager"}/>
            <div className={"relative text-center text-white"}>

            </div>
        </div>
    )
}

export default HeroBanner