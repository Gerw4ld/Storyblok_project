import { storyblokEditable } from "@storyblok/react";
import {FunctionComponent} from "react";
import {TeaserBlok} from "../types/Bloks.types";

interface TeaserProps {
    blok: TeaserBlok
}

const Teaser: FunctionComponent<TeaserProps> = ({ blok }) => {
    return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

export default Teaser;