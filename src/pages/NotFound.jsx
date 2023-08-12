import React from "react";

function NotFound() {
	const styles = {
		body: {
			fontFamily: "Arial, sans-serif",
			backgroundColor: "#f0f0f0",
			margin: 0,
			padding: 0,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "100vh",
		},
		container: {
			textAlign: "center",
			padding: "20px",
			backgroundColor: "#fff",
			borderRadius: "10px",
			boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
		},
		h1: {
			fontSize: "4rem",
			margin: 0,
			color: "#FF5959",
		},
		p: {
			fontSize: "1.5rem",
			marginTop: "10px",
			color: "#888",
		},
		a: {
			color: "#FF5959",
			textDecoration: "none",
		},
	};

	return (
		<div style={styles.body}>
			<div style={styles.container}>
				<h1 style={styles.h1}>404</h1>
				<p style={styles.p}>
					Oops! The page you're looking for could not be found.
				</p>
				<p style={styles.p}>
					Go back to{" "}
					<a style={styles.a} href="/">
						homepage
					</a>
					.
				</p>
			</div>
		</div>
	);
}

export default NotFound;
