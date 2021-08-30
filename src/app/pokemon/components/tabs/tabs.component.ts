import { Component } from '@angular/core';

type Tabs = 'tab-favorites' | 'tab-pokemons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent{

  public currentTab: Tabs = 'tab-favorites';
}
