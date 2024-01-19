import { Widget } from "rayous";
import { mergeOptions, options } from "rayous/extra";
import MainComponent from "../page";



export interface PageOptions extends options {
	component: MainComponent;
}

export function page({
	pageId,
	pageClass
} : {
	pageId: string,
	pageClass: string
}){
	return function (constructor: any, extended?: any) {
		(constructor.prototype as Widget)._onMount = function(){
			this.pageId = pageId;
			this.pageClass = pageClass;
			this.$id = this.pageId;
			this.addClass(this.pageClass);
		} 
	}
}

export class Page extends Widget<PageOptions> {
	pageId = "";
	pageClass = "";
	
	constructor(options: PageOptions){
		super(mergeOptions({
			class: 'page',
			component: {} as any
		}, options));

		this.build(options);
	}

	build(options: PageOptions){}

}