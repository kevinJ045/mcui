import { Container, Text, Widget } from "rayous";
import { React } from "rayous/react";
import { BgWidget } from "../widgets/bg";
import { XMButton } from "../widgets/button";
import { XMIcon } from "../widgets/icon";


export class Homepage extends Widget {
	
	constructor(){
		super({
			class: 'page home-page'
		});

		this.add(
			<Container class="minecraft-logo"></Container>
		)

		this.addAll(
			<Container class="all-buttons">
				<Container class="main-buttons">
					<Container class="pair-buttons">
						<XMButton class="dark">
							<XMIcon icon="/icons2/world.png"></XMIcon>
							<Text class="bottom-text animated-on-hover animated-text text-large">Play</Text>
						</XMButton>
						<XMButton class="dark">
							<XMIcon icon="/icons2/levers.png"></XMIcon>
							<Text class="bottom-text animated-on-hover animated-text text-large">Settings</Text>
						</XMButton>
					</Container>
					<Container class="tiny-buttons">
						<XMButton class="dark icon-button">
							<XMIcon icon="/icons2/shop.png" class="md"></XMIcon>
						</XMButton>
						<XMButton class="dark icon-button">
							<XMIcon icon="/icons2/person.png" class="md"></XMIcon>
						</XMButton>
						<XMButton class="dark icon-button">
							<XMIcon icon="/icons2/craft.png" class="md"></XMIcon>
						</XMButton>
					</Container>
				</Container>
				<XMButton class="dark full">
					<XMIcon icon="/icons2/xp.png" class="prefix sm"></XMIcon>
					<Text>Hello</Text>
				</XMButton>
			</Container>
		);

	}

}