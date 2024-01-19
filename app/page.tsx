import { Component, Text, Widget } from "rayous";
import { buildProps } from "rayous/extra";
import { React } from "rayous/react";
import { Homepage } from "./pages/home";
import { BgWidget } from "./widgets/bg";

export default class extends Component {

	static updateMode: "reinit" | "refresh" = "refresh";

	build(props: buildProps) {
		return new Widget({
			children: [
				<BgWidget />,
				<Homepage></Homepage>
			]
		});
	}
}