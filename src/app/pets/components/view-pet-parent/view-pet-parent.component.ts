import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-pet-parent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-pet-parent.component.html',
  styleUrl: './view-pet-parent.component.css'
})
export class ViewPetParentComponent {
petList: any;
petCard: any;
deletePetId(arg0: any) {
throw new Error('Method not implemented.');
}
updateStatus(arg0: string,arg1: any) {
throw new Error('Method not implemented.');
}
cards() {
throw new Error('Method not implemented.');
}
lists() {
throw new Error('Method not implemented.');
}

}
