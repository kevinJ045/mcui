import { Button, Canvas, Container, Grid, Image, Text, Widget } from "rayous";
import { React } from "rayous/react";
import { Page, PageOptions, page } from "../widgets/page";
import { Pluginbar } from "../widgets/pluginbar";
import { XMButton, XMButtonMini } from "../widgets/button";
import { XMIcon, XMIconMini } from "../widgets/icon";
import { AllWorlds } from "../const/worlds";

@page({
	pageId: "worldspage",
	pageClass: "worlds-page transparent"
})
export class Worldspage extends Page {
	build(options: PageOptions){

		this.addAll(
			<Container class="sidebar">
				<Container class="navbar">
					<XMButton class="dark flat no-border margin-left" onClick={() => options.component.activatePage('homepage')}>
						<XMIconMini class="prefix" icon="/icons/apps.png"></XMIconMini>
						<Text>Back</Text>
					</XMButton>
					<Container class="title">
						<XMIcon class="md" icon="/icons2/world.png"></XMIcon>
						<Text>Worlds</Text>
					</Container>
				</Container>
				<Container class="tabs">
					<XMButton class="hover">
						<XMIconMini class="prefix" icon="/icons/castle.png"></XMIconMini>
						<Text>Single Player</Text>
					</XMButton>
					<XMButton class="dark hover">
						<XMIconMini class="prefix" icon="/icons/person.png"></XMIconMini>
						<Text>Multiplayer</Text>
					</XMButton>
					<XMButton class="dark hover">
						<XMIconMini class="prefix" icon="/icons/monitor2.png"></XMIconMini>
						<Text>Servers</Text>
					</XMButton>
				</Container>

				<Container class="buttons">
					<XMButton class="full">
						<XMIconMini class="prefix" icon="/icons/layers.png"></XMIconMini>
						<Text>New World</Text>
					</XMButton>

					<Container class="mini-buttons">
						<XMButtonMini class="dark hover"><XMIconMini icon="/icons/xbox.png"></XMIconMini></XMButtonMini>
						<XMButtonMini class="dark hover"><XMIconMini icon="/icons/tree.png"></XMIconMini></XMButtonMini>
						<XMButtonMini class="dark hover"><XMIconMini icon="/icons/unknown1.png"></XMIconMini></XMButtonMini>
					</Container>
				</Container>
			</Container>,
			<Container class="mainbar">
				{
					new Grid({
						class: 'worlds-list',
						items: AllWorlds,
						grid: false,
						template(item: typeof AllWorlds[0]){
							return new Container({
								class: 'world',
								children: [
									<Image src={item.picture}></Image>,
									<Text class="name">{item.name}</Text>,
									<XMButtonMini class="dark edit hover"><XMIconMini icon="/icons/color.png"></XMIconMini></XMButtonMini>,
									<XMButtonMini class="dark info hover"><XMIconMini icon="/icons/expand.png"></XMIconMini></XMButtonMini>
								]
							});
						}
					})
				}
			</Container>,
			<Pluginbar></Pluginbar>
		);


	}

}