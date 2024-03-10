import { AppointmentReport } from '../../appointments/models/appointment_report';

export class Appointmentbyparent {
  appointmentId: number = 0;
  appointmentDate: Date = new Date();
  vetId: number = 0;
  petParentId: number = 0;
  petId: number = 0;
  appointment_time: string = '';
  pet_issues: string = '';
  reasons_for_visit: string = '';
  appointmentReport: AppointmentReport = new AppointmentReport();
}
