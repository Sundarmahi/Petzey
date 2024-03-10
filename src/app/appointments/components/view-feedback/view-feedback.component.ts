import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

export interface FeedbackFormModel {
  doctorCompetenceRating: number;
  treatmentOutcomeRating: number;
  referthisdoctorRating: number;
  appointmentProcessRating: number;
  additionalComments: string;
}

@Component({
  selector: 'app-view-feedback',
  standalone: true,
  imports: [CommonModule, CommonModule],
  templateUrl: './view-feedback.component.html',
  styleUrl: './view-feedback.component.css',
})
export class ViewFeedbackComponent {
  feedback = {
    doctorCompetenceRating: 0,
    treatmentOutcomeRating: 0,
    referthisdoctorRating: 0,
    additionalComments: '',
    appointmentProcessRating: 0,
  };

  // constructor(private feedbackService: FeedbackService,private http:HttpClientModule) {}

  // onSubmit() {
  //   const appointmentId = 123;
  //   this.feedbackService.submitFeedback(appointmentId, this.feedback).subscribe(
  //     (response) => {
  //       console.log('Feedback submitted successfully:', response);
  //       this.resetForm();
  //     },
  //     (error) => {
  //       console.error('Error submitting feedback:', error);

  //     }
  //   );
  // }

  resetForm() {
    this.feedback = {
      doctorCompetenceRating: 0,
      treatmentOutcomeRating: 0,
      referthisdoctorRating: 0,
      additionalComments: '',
      appointmentProcessRating: 0,
    };
  }
}
