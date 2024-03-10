import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard_service/dashboard.service';
import { CommonModule } from '@angular/common';
import { AppointmentSummary } from '../../models/appointment_summary';

@Component({
  selector: 'app-appointment-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-summary.component.html',
  styleUrl: './appointment-summary.component.css',
})
export class AppointmentSummaryComponent {
  count: AppointmentSummary = new AppointmentSummary();

  constructor(private service: DashboardService) {}

  ngOnInit() {
    this.getAppointmentSummary();
  }

  id: number = 700;

  getAppointmentSummary() {
    this.service.getAppointmentSummary(this.id).subscribe((data) => {
      this.count = data;
      console.log(this.count);
    });
  }
}
