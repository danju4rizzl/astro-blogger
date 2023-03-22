import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function get() {
	return rss({
		title: "DeejayDev's blog",
		description: "The #1 Tech Blog in pidgin",
		site: "https://astro-blogger-demo.netlify.app",
		items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
		customData: `<language>en-us</language>`,

		stylesheet: "/rss/styles.xsl"
	})
}
