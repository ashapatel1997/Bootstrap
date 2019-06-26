import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, HostListener} from '@angular/core';

/** array properties for menu item
 * @param id for identification of item using number
 * @param name for display name of the menu item*/
interface menuItem
{
  id: number;
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})


export class AppComponent implements OnInit {

  //instance of the menuItem interface 
  menuItems: menuItem[];

  //get selected item from menu
  selectedItem: string="home";

  //boolean value false for scroll offset <=10 
  scrolled: boolean = false;

  //scroll listner
  /*show scroll button if y offset is > 10*/
  @HostListener('window:scroll')
  checkScroll() {
    //get scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    /*if scroll position > 10 then scrolled = true,
     & apply class to change header background color*/

    if (scrollPosition > 10) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }



  /** called after Angular has initialized all data-bound properties of a directive. */
  ngOnInit()
  {
    //menu item id,name,value
    this.menuItems =
      [
      { id: 1, name:"home" },
      { id: 2, name:"about" },
      { id: 3, name:"services" },
      { id: 4, name:"portfolio" },
      { id: 5, name:"team"},
      { id: 6, name: "pricing" },
      { id: 7, name: "contact" }
      ];

    
  }

  /**
   * function call when click on menu item
   * @param event for click event handler
   * @param item is selected menu item
   */
  listClick(event, item) {
    this.selectedItem = item.name;
  }

 
}
