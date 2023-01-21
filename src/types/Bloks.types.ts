import {SbBlokData} from "@storyblok/js";
import {StoryblokImage} from "./Storyblok.types";

export interface PageBlok extends SbBlokData {
    body: SbBlokData[]
}
export interface HeroBannerBlok extends SbBlokData{
    title: string,
    text: string,
    button: string
    image: StoryblokImage
}

export interface TeaserBlok extends SbBlokData{
    headline: string
}