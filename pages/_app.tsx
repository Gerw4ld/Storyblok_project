import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {storyblokInit, apiPlugin} from "@storyblok/react";
import Page from "../src/bloks/Page";
import HeroBanner from "../src/bloks/HeroBanner";
import Teaser from "../src/bloks/Teaser";

storyblokInit({
    accessToken: "Aiv4FnFxUhWqAkelVYSIOgtt",
    use: [apiPlugin],
    components: {
        page: Page,
        heroBanner: HeroBanner,
        teaser: Teaser
    }
});

function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp