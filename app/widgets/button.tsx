import { Button } from "rayous";
import { ButtonOptions, mergeOptions } from "rayous/extra";



export class XMButton extends Button {
	constructor(options: ButtonOptions){
		super(mergeOptions({
			class: 'button'
		}, options));
	}
}