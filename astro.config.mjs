import { defineConfig } from "astro/config"

// https://astro.build/config
import preact from "@astrojs/preact"

// https://astro.build/config
import tailwind from "@astrojs/tailwind"

import NetlifyCMS from "astro-netlify-cms"

// https://astro.build/config
export default defineConfig({
	integrations: [
		preact(),
		tailwind()
		// DEEJAY To fix the issue with the package Changes this to config.toml
		// NetlifyCMS({
		// 	config: {
		// 		backend: {
		// 			name: "git-gateway",
		// 			branch: "master"
		// 		},
		// 		media_folder: "public/images/uploads",
		// 		public_folder: "/images/uploads",
		// 		collections: [
		// 			{
		// 				name: "posts",
		// 				label: "Blog Posts",
		// 				folder: "src/pages/posts",
		// 				create: true,
		// 				delete: true,

		// 				disableIdentityWidgetInjection: true,
		// 				fields: [
		// 					{
		// 						name: "layout",
		// 						widget: "hidden",
		// 						label: "Layout",
		// 						default: "../../layouts/MarkdownPostLayout.astro "
		// 					},
		// 					{ name: "title", widget: "string", label: "Post Title" },
		// 					{ name: "pubDate", widget: "datetime", label: "Published Date" },
		// 					{
		// 						name: "description",
		// 						widget: "sting",
		// 						label: "Post Description"
		// 					},
		// 					{
		// 						name: "author",
		// 						widget: "sting",
		// 						label: "Post Author"
		// 					},
		// 					{
		// 						name: "image",
		// 						widget: "object",
		// 						label: "Post Author Pics",
		// 						fields: {
		// 							name: "url",
		// 							widget: "string",
		// 							label: "Author Pics URL"
		// 						},
		// 						fields: {
		// 							name: "alt",
		// 							widget: "string",
		// 							label: "Author Pics Alt"
		// 						}
		// 					},
		// 					{ name: "tags", widget: "list", label: "Post Tags" },
		// 					{ name: "cover", widget: "string", label: "Post Cover" },
		// 					{ name: "body", widget: "markdown", label: "Post Body" }
		// 				]
		// 			}
		// 		]
		// 	}
		// })
	]
})
