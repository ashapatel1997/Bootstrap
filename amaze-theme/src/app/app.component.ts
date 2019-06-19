import { Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';

/** array properties for menu item
 * @param id for identification of item using number
 * @param name for display name of the menu item
 * @param value is the value of menu item*/
interface menuItem
{
  id: number;
  name: string;
  value: string;
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /**instance of the menuItem interface */
  menuItems: menuItem[];
  
  /** called after Angular has initialized all data-bound properties of a directive. */
  ngOnInit()
  {
    this.menuItems =
      [
      { id: 1, name: "HOME", value: "home" },
      { id: 2, name: "ABOUT", value:"about" },
      { id: 3, name: "SERVICES", value: "services" },
      { id: 4, name: "PORTFOLIO", value: "portfolio" },
      { id: 5, name: "TEAM", value: "team"},
      { id: 6, name: "PRICING", value: "pricing" },
      { id: 7, name: "CONTACT", value: "contact" }
      ];

   
  }
  
 
 
}
