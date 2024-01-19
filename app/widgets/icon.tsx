import { Span, Widget } from "rayous";
import { mergeOptions, options } from "rayous/extra";


export interface XMIconOptions extends options {
	icon?: string
}

export class XMIcon extends Widget<XMIconOptions> {
	constructor(options: XMIconOptions){
		super(mergeOptions({
			class: 'icon',
			style: {
				'--icon-url': `url("${options.icon || ""}")`
			}
		}, options))
	}

	setIcon(icon: string){
		this.options.icon = icon;
		this.style = {
			'--icon-url': `url("${icon || ""}")`
		}
	}
}