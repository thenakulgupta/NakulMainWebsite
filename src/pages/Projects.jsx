import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import fm from "front-matter";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

function Projects(props) {
	const [meta, setMeta] = useState("");
	const [content, setContent] = useState("");
	const { title } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		import(`../projects/${title}.md`)
			.then((res) => res.default)
			.then((res) => {
				fetch(res)
					.then((data) => data.text())
					.then((res) => {
						let result = fm(res);
						setMeta(result.attributes);
						setContent(result.body);
					});
			})
			.catch((err) => {
				setContent(null);
			});
	}, [title]);

	return content !== null ? (
		<Layout>
			<section className="shadow-blue white-bg padding mt-0">
				<ul className="list-inline project-info mt-0">
					<li className="list-inline-item">
						<a
							href={meta && meta.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="icon-link"></i> {meta && meta.url}
						</a>
					</li>
				</ul>
				<Markdown children={content}></Markdown>
			</section>
		</Layout>
	) : (
		<NotFound />
	);
}

export default Projects;
