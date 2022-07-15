import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-list-carrosel',
  templateUrl: './home-list-carrosel.component.html',
  styleUrls: ['./home-list-carrosel.component.scss']
})
export class HomeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public scroll(event: any) {
    // console.log('entrou', event)
    // window.addEventListener("wheel", e => {
    //   var dir = Math.sign(e.deltaY);
    //   console.log(dir);
    // });
    window
    .addEventListener('wheel', event => {
      if(Math.sign(event.deltaY) > 0) {
        console.log('scrll up')
      } else {
        console.log('scrll down')
      }
    })
  }

}
