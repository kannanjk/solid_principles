import { Vehicle } from './Vehicle'
import { Car } from './Car'
import { ElectricCar } from './ElectricCar'

function starteVehicle(vehicle: Vehicle) {
    console.log(vehicle.StartEngine());
}

const myCar = new Car()
const myElectriCar = new ElectricCar()

starteVehicle(myCar)
starteVehicle(myElectriCar)