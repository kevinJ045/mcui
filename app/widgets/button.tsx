import { Button } from "rayous";
import { ButtonOptions, mergeOptions } from "rayous/extra";



export class XMButton extends Button {
	constructor(options: ButtonOptions){
		super(mergeOptions({
			class: 'button'
		}, options));
	}
}


export class XMButtonMini extends XMButton {
	constructor(options: ButtonOptions){
		super(mergeOptions({
			class: 'mini no-border'
		}, options));
	}
}