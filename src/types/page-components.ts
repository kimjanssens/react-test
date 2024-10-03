export type PageComponent = {
	id: string;
	type: string;
	data: any;
};

export type HeaderData = {
	title: string;
	description: string;
};

export type FooterData = {
	links: FooterDataLink[];
};

export type FooterDataLink = {
	label: string;
	href: string;
};

export type StatisticsItem = {
	type: string;
	value: number;
};

export type PageLayoutItems = PageComponent[];
