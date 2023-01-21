import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import {PageBlok} from "../types/Bloks.types";
import {FunctionComponent} from "react";

interface PageProps {
    blok: PageBlok
}
const Page: FunctionComponent<PageProps> = ({ blok }) => (
    <main {...storyblokEditable(blok)}>
        {blok.body.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </main>
);

export default Page;