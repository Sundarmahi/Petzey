import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-symptoms',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-symptoms.component.html',
  styleUrl: './view-symptoms.component.css'
})
export class ViewSymptomsComponent {


}
