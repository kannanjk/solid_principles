import { Vehicle } from './Vehicle'

export class Car implements Vehicle {
    StartEngine(): string {
        return "car engine started"
    }
} 