import { Component } from "rayous";
import { buildProps } from "rayous/extra";
import "@/styles/styles.scss";

export default class extends Component {
	build(props: buildProps) {
		return props.page!;
	}
}