import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from './models/vehicle.model';
import { VehicleSearchComponent } from './components/vehicle-search/vehicle-search.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, VehicleSearchComponent, VehicleDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  activeVehicle: Vehicle | null = null;
  isLoading = false;  // Shortened boolean initialization

  // Handles vehicle selection
  onVehicleSelected(vehicle: Vehicle | null): void {
    this.isLoading = true;  // Simulating a loading state
    setTimeout(() => {
      this.activeVehicle = vehicle;
      this.isLoading = false;
    }, 500);  // Simulates a delay in data retrieval
  }
}
