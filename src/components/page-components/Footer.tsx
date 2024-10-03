import Link from "next/link";

import { FooterData } from "@/types/page-components";

export default function Footer(props: { data: FooterData }) {
	return (
		<div>
			<p>List of links here</p>

			{!props.data.links && <p>No links available</p>}

			{props.data.links && (
				<nav>
					{props.data.links.map((link, index) => (
						<Link key={index} href={link.href}>
							{link.label}
						</Link>
					))}
				</nav>
			)}
		</div>
	);
}
