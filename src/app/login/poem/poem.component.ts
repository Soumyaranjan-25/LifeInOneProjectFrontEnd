import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent {
  quote = "In life, we only have one shot to make the most of our time. Time management isn't just about getting more done, it's about making every moment count. When we prioritize what truly matters, we can create a life that feels full and meaningful, even in the midst of our busiest days."

}
