import { ApplicationConfig } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core'; // Optional, for change detection
import { VehicleService } from './services/vehicle.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Optional
    { provide: VehicleService, useClass: VehicleService } // Provide the service
  ]
};
