import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 
})
export class AppComponent implements OnInit {
  isShow: boolean; //hide or shoe scroll button
  topPosToStartShowing = 10; //page offset for scroll button

  /*show scroll button if y offset is >= 100*/
  @HostListener('window:scroll')
  checkScroll() {

    /* window의 scroll top
     Both window.pageYOffset and document.documentElement.scrollTop returns the same
    result in all the cases.window.pageYOffset is not supported below IE 9.*/

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

   
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  /**smooth scroll to top */
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      
      behavior: 'smooth'
    });
  }

 
  /*scroll to the specified section on the same page*/
  scroll(element: HTMLElement) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }

  /*form validation*/
  userDetailsFormGroup: FormGroup
  ngOnInit() {
    this.userDetailsFormGroup = new FormGroup(
      {
        nameControl: new FormControl('', Validators.required),
        emailControl: new FormControl('', [Validators.required, Validators.email]),
        //genderControl: new FormControl('', Validators.required)
        messageControl: new FormControl('', Validators.required)
      }
    );

   
  }
  
  
}
