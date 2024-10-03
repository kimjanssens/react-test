import { StatisticsItem } from "@/types/page-components";
import { useEffect, useState } from "react";

import { Pie } from "@visx/shape";
import { Group } from "@visx/group";

const COLORS = [
	"#8C401E",
	"#D54E00",
	"#F7031E",
	"#F77A1E",
	"#F7B41E",
	"#F7931E",
];

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
			<h1>Statistics</h1>-
			<svg width={400} height={400}>
				<Group top={200} left={200}>
					<Pie
						data={chartData}
						pieValue={(d) => d.value}
						outerRadius={200}
						innerRadius={150}
						padAngle={0.02}
					>
						{(pie) => {
							return pie.arcs.map((arc, index) => {
								const [centroidX, centroidY] = pie.path.centroid(arc);

								console.log(arc);

								return (
									<g key={index}>
										<path d={pie.path(arc)} fill={COLORS[index]} />
										<text
											x={centroidX}
											y={centroidY}
											dy=".33em"
											fill="white"
											fontSize={12}
											textAnchor="middle"
										>
											{arc.data.type}
										</text>
									</g>
								);
							});
						}}
					</Pie>
				</Group>
			</svg>
		</div>
	);
};

export default Statistics;
