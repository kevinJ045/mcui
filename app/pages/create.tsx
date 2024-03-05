import { Container, InputWrapper, Text } from "rayous";
import { React } from "rayous/react";
import { Page, PageOptions, page } from "../widgets/page";
import { XMButton } from "../widgets/button";
import { XMIcon, XMIconMini } from "../widgets/icon";
import { loadingGeneration } from "../widgets/loadergen";
import { EntryController, ref } from "rayous/extra";

@page({
	pageId: "createpage",
	pageClass: "create-page"
})
export class Createpage extends Page {

	build(options: PageOptions){
		this.addAll(
			<XMButton class="back-button dark flat no-border margin-left" onClick={() => options.component.activatePage('worldspage')}>
				<XMIconMini class="prefix" icon="/icons/apps.png"></XMIconMini>
				<Text>Back</Text>
			</XMButton>,
			new InputWrapper({
				class: 'input',
				id: 'world-name'
			}),
			<Container class="button-group-two">
				<XMButton class="full">
					<XMIconMini class="prefix" icon="/icons/skeleton.png"></XMIconMini>
					<Text>Survival</Text>
				</XMButton>
				<XMButton class="full dark">
					<XMIconMini class="prefix" icon="/icons/castle.png"></XMIconMini>
					<Text>Creative</Text>
				</XMButton>
			</Container>,
			<XMButton class="create-world" onClick={() => this.page_data ? this.back(options) :this.showLoading(options)}>
				<XMIconMini class="prefix" icon="/icons/play.png"></XMIconMini>
				<Text>{this.page_data ? 'Save' : 'Create'}</Text>
			</XMButton>
		)

	}

	afterNav(){
		this.find('#world-name')?.val(this.page_data?.name || '');
	}

	back(options: any){
		options.component.back();
	}

	showLoading(options: any){
		loadingGeneration(options, () => this.back(options));
	}
}