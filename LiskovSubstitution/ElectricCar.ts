import { Vehicle } from './Vehicle'

export class ElectricCar implements Vehicle{
    StartEngine(): string {
        return 'Electric car quiqly started!'
    }
} 