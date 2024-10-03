import { HeaderData } from "@/types/page-components";

export default function Header(props: { data: HeaderData }) {
	return (
		<header>
			<h1>{props.data.title}</h1>
			<p>{props.data.description}</p>
		</header>
	);
}
