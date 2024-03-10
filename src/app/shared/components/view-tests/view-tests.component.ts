import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-tests',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-tests.component.html',
  styleUrl: './view-tests.component.css'
})
export class ViewTestsComponent {


}
