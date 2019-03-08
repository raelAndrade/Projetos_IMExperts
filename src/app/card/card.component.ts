import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  //styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  /**
   * A constructor is called right after the creation of the component. It is ready and populated long before data is passed to it.
   * Use the constructor for constants or things that are hard-coded into your component,
   */
  constructor() { }

  /**
   * ngOnInit only runs after the first cycle of changes to the data, so you have access to your component inputs. 
   * Use ngOnInit for everything that depends on external data.
   */
  ngOnInit() {
  }

}
