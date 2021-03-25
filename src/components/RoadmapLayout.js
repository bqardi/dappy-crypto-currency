import { Fragment, useEffect, useState } from "react";
import Roadmap from "./Roadmap";

function RoadmapLayout({children}){
	var [data, seetData] = useState([]);

	useEffect(() => {
		fetch("/data/roadmap.json")
			.then(response => response.json())
			.then(result => seetData(result.items));
	}, []);

	return (
		<Roadmap>
			{data?.map((item, index) => {
				var color = "white";
				switch (item.status) {
					case "done":
						color = "green";
						break;
					case "progress":
						color = "blue";
						break;
					default:
						color = "white";
				}
				return (
					<Roadmap.Item key={item.id}>
						<Roadmap.Row space={item.status !== "more"}>
							<Roadmap.Dot color={color} small={item.status === "more"} />
							{(index + 1) % 3 !== 0 ? <Roadmap.Line /> : undefined}
						</Roadmap.Row>
						<Roadmap.Row>
							{item.date ? <Roadmap.Date>
								{item.date}
							</Roadmap.Date> : undefined}
						</Roadmap.Row>
						<Roadmap.Text>
							{item.content.map((content, i, arr) =>
								<Fragment key={i}>
									{i === arr.length - 1 ? content : [content, <br key={"br-" + i}/>]}
								</Fragment>
							)}
						</Roadmap.Text>
					</Roadmap.Item>
				)
			})}
		</Roadmap>
	);
}

export default RoadmapLayout;