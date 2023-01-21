import {FunctionComponent} from "react";
import Image from "next/image";
import {HeroBannerBlok} from "../types/Bloks.types";
import {storyblokEditable} from "@storyblok/react";

interface HeroProps {
    blok: HeroBannerBlok
}

const HeroBanner: FunctionComponent<HeroProps> = ({blok}) => {
    return (
        <div
            className={"relative m-auto flex max-w-full items-center justify-center p-4 min-h-[480px]"}{...storyblokEditable(blok)}>
            {blok.image.filename && blok.image.alt &&
                <Image width={"1280"} height={"1280"} src={blok.image.filename} alt={blok.image.alt}
                       className={"h-full w-full object-cover absolute"} loading={"eager"}/>}

            <div className={"relative text-center text-white"}>
                <h1>{blok.title}</h1>
                <p>{blok.text}</p>
                <p>{blok.button}</p>
            </div>

        </div>
    )
}

export default HeroBanner