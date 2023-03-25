import { useState, useEffect } from "preact/hooks"

export default function NetlifyIdentity() {
	useEffect(() => {
		if (window.netlifyIdentity) {
			window.netlifyIdentity.on("init", (user) => {
				if (!user) {
					window.netlifyIdentity.on("login", () => {
						document.location.href = "/admin/"
					})
				}
			})
		}
	}, [])

	return (
		<div>
			{/* <h3>{greeting}! Thank you for visiting!</h3> */}
			{/* <button onClick={() => setGreeting(randomMessage())}>New Greeting</button> */}
		</div>
	)
}
