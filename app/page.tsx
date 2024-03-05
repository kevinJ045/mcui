import { Component, Text, Widget } from "rayous";
import { buildProps } from "rayous/extra";
import { React } from "rayous/react";
import { Homepage } from "./pages/home";
import { BgWidget } from "./widgets/bg";
import { Worldspage } from "./pages/worlds";
import { Createpage } from "./pages/create";
import { Loadingpage } from "./pages/loading";

export default class MainComponent extends Component {
  static updateMode: "reinit" | "refresh" = "refresh";
  history: string[] = [];

  build(props: buildProps) {
    return new Widget({
      children: [
        <BgWidget />,
        <Homepage component={this}></Homepage>,
        <Worldspage component={this}></Worldspage>,
        <Createpage component={this}></Createpage>,
        <Loadingpage component={this}></Loadingpage>
      ],
    });
  }

  activatePage(pagename: string, data?: any) {
    this._currentWidget
      .findAll(".page")
      .forEach((e) => {
        e.removeClass("active");
        if((e as any).page_data) (e as any).page_data = null;
      });
    this._currentWidget.find("#" + pagename)?.addClass("active");
    (this._currentWidget.find("#" + pagename) as any)?.onNav();
    if(data) (this._currentWidget.find("#" + pagename) as any).page_data = data;
    this.history.push(pagename);
    if(this.history.length > 5) this.history = this.history.reverse().slice(0, 5).reverse();
    (this._currentWidget.find("#" + pagename) as any)?.afterNav();
  }

  back(data?: any){
    this.activatePage(this.history.reverse()[1], data);
  }

  afterBuild(props: any): void {
    this.activatePage("homepage");
  }
}
