import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "VueJuiceDnD",
      logo: {
        src: "./src/assets/logo.svg",
      },
      editLink: {
        baseUrl:
          "https://github.com/carlosjorger/vue3-juice-dnd/tree/main/docs/",
      },
      customCss: process.env.NO_GRADIENTS ? [] : ["/src/assets/landing.css"],
      social: {
        github: "https://github.com/carlosjorger/vue3-juice-dnd",
        "x.com": "https://twitter.com/carlosjorgerc",
      },
      sidebar: [
        {
          label: "Introduction",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Getting Started",
              link: "/introduction/introduction/",
            },
          ],
        },
        {
          label: "Guide",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Single vertical list",
              link: "/guides/verticallist/",
            },
            {
              label: "Single vertical list mixed styles",
              link: "/guides/verticalliststyles/",
            },
            {
              label: "Single vertical on a scroll container",
              link: "/guides/verticallistautoscroll/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
        "./src/assets/landing.css",
      ],
    }),
    vue(),
    tailwind({ applyBaseStyles: false }),
  ],
  adapter: netlify(),
});
