import { Widget } from "rayous";
import { mergeOptions, options, ref } from "rayous/extra";
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
	_data = {};
	pageId = "";
	pageClass = "";
	@ref page_data: Record<string, any> | null = null;
	options: PageOptions;
	updated = false;
	
	constructor(options: PageOptions){
		super(mergeOptions({
			class: 'page',
			component: {} as any
		}, options));

		this.options = options;
		this.build(options);
	}

	build(options: PageOptions){}
	onNav(){}
	afterNav(){}

	update(){
		if(!this.updated) return this.updated = true; 
		this.findAll('*').forEach(e => e.remove());
		this.build(this.options);
	}

}