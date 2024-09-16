import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponentComponent implements OnInit {


 drinks: Observable<String[]> = new Observable<String[]>();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
