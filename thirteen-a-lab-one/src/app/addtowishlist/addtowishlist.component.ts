import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-addtowishlist',
  templateUrl: './addtowishlist.component.html',
  styleUrls: ['./addtowishlist.component.scss']
})
export class AddtowishlistComponent implements OnInit {
  @Input()
  showButton = false;
  @Input()
  Id: number[]=[];

  toggle: boolean[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  toggleValue()
  {
    
  }
 
  }


