import { Component } from '@angular/core';
import { StepperComponent } from '../../components/stepper/stepper.component';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [StepperComponent],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss',
})
export class PlanComponent {}
