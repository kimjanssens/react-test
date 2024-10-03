import { StatisticsItem } from "@/types/page-components";
import { useEffect, useState } from "react";

const Statistics = () => {
	const [chartData, setChartData] = useState<StatisticsItem[]>([]);

	useEffect(() => {
		const getChartData = async () => {
			const response = await fetch("http://localhost:3000/chart.json");
			const data = await response.json();

			setChartData(data);
		};

		getChartData();
	}, []);

	return (
		<div>
			<h1>Statistics</h1>
			<pre>{JSON.stringify(chartData, 0, 2)}</pre>
		</div>
	);
};

export default Statistics;
