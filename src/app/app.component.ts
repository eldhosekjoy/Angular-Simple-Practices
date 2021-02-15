import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  stateflag = false;
  stclassname = 'basic-style';

  toggleclass()
  {
    //this.stateflag = !this.stateflag;
    // return this.stclassname;
    return{
      'basic-style' : !this.stateflag,
      'clicked-style' : this.stateflag
    }
  }

  btclick()
  {
    this.stateflag = ! this.stateflag;
  }

}






