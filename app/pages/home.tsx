import { Canvas, Container, Text, Widget } from "rayous";
import { React } from "rayous/react";
import { BgWidget } from "../widgets/bg";
import { XMButton } from "../widgets/button";
import { XMIcon } from "../widgets/icon";
import { SkinViewer } from "@/skinview3d/viewer";
import { IdleAnimation } from "@/skinview3d/animation";
import { Vector3 } from "three";
import { WidgetEvent } from "rayous/extra";


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
				<XMButton onClick={() => this.showLoading()} class="dark full">
					<XMIcon icon="/icons2/xp.png" class="prefix sm"></XMIcon>
					<Text>Hello</Text>
				</XMButton>
			</Container>
		);

		let canvas = new Canvas({});
		
		let skviewer = new SkinViewer({
			canvas: canvas.raw().at(0) as any,
			width: 200,
			height: 200,
			zoom: 0.5
		});
		skviewer.controls.enablePan = false;
		skviewer.controls.enableZoom = false;
		skviewer.controls.enableRotate = false;
		skviewer.controls.addEventListener('change', (e) => {
			e.target.object.position.y = 0
		});

		skviewer.nameTag = 'makanobush';
		skviewer.loadSkin('/skin.webp')

		this.add(<Container class="skin-viewer">
			{canvas}
		</Container>);

		skviewer.animation = new IdleAnimation();

		const head = skviewer.scene.children[2].children[0]
		.children[0].children[0];

		skviewer.scene.children[2].rotation.y = -0.4;
		skviewer.scene.children[2].rotation.x = 0.4;

		this.on('mousemove', (e: WidgetEvent) => {

			let w = window.innerWidth - skviewer.width;
			let h = window.innerHeight - skviewer.height;

			var x = e.pos.x - (w);
			var y = e.pos.y - (h);
	
			// Calculate rotation angles
			var angleX = Math.atan2(x, w);
			var angleY = Math.atan2(y, h);
	
			// Set the rotation of the head object
			head.rotation.y = angleX * 0.8;
			head.rotation.x = angleY * 0.8;

		});

	}

	showLoading(){
		let loader = new Container({class: 'loading-loader dark'});
		this.add(loader);
		setTimeout(() => loader.remove(), 10000);
	}

}