import { Vehicle } from './Vehicle'

export class Car extends Vehicle {
    StartEngine(): string {
        return "car engine started"
    }
}