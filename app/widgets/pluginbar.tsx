import { Widget } from "rayous";
import { React } from "rayous/react";
import { XMButtonMini } from "./button";
import { XMIconMini } from "./icon";

export class Pluginbar extends Widget{
	constructor(){
		super({
			class: 'pluginbar'
		});

		this.addAll(
			<XMButtonMini>
				<XMIconMini icon="/icons/search.png"></XMIconMini>
			</XMButtonMini>,
			<XMButtonMini>
				<XMIconMini icon="/icons/skeleton.png"></XMIconMini>
			</XMButtonMini>,
			<XMButtonMini>
				<XMIconMini icon="/icons/sword.png"></XMIconMini>
			</XMButtonMini>,
			<XMButtonMini>
				<XMIconMini icon="/icons/play.png"></XMIconMini>
			</XMButtonMini>
		);
	}
}