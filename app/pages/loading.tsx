import { Container } from "rayous";
import { React } from "rayous/react";
import { Page, PageOptions, page } from "../widgets/page";

@page({
	pageId: "loading_gen_page",
	pageClass: "loading-page"
})
export class Loadingpage extends Page {

	build(options: PageOptions){
		this.attr({ loading: this.page_data?.title || "Loading" })
		this.addClass('loading-loader dark');
	}

}