import { Component, Text, Widget } from "rayous";
import { buildProps } from "rayous/extra";
import { React } from "rayous/react";
import { Homepage } from "./pages/home";
import { BgWidget } from "./widgets/bg";
import { Worldspage } from "./pages/worlds";

export default class MainComponent extends Component {

	static updateMode: "reinit" | "refresh" = "refresh";

	build(props: buildProps) {
		return new Widget({
			children: [
				<BgWidget />,
				<Homepage component={this}></Homepage>,
				<Worldspage component={this}></Worldspage>,
				// <Worldspage></Worldspage>
			]
		});
	}

	activatePage(pagename: string){
		this._currentWidget.findAll('.page').forEach(e => e.removeClass('active'));
		this._currentWidget.find('#'+pagename)?.addClass('active');
	}

	afterBuild(props: any): void {
		this.activatePage('homepage');
	}
}