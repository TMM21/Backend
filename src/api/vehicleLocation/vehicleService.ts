import { VehicleLocation } from './locationModel'
import { AppError } from '../../utils'
import { Vehicles } from '../vehicle'
import { vehicleLocate } from './vehicleInterface'

export class VehicleServiceLocation {
  public CreateVehicleLocation = async (vehicelData: vehicleLocate) => {
    const vehicle = await Vehicles.findOneOrFail({
      where: [
        {
          id: vehicelData.vehicle.id,
        },
      ],
    }).catch(() => {
      throw new AppError('invalid vehicle data')
    })

    const location = VehicleLocation.create(vehicelData)
    location.status = vehicelData.status
    ;(location.HeadingTo = vehicelData.headingTo),
      (location.Left = vehicelData.left),
      (location.Location = vehicelData.headingTo)
    location.vehicle = vehicelData.vehicle
    location.PC = vehicle.PC
    location.plateNumber = vehicle.plateNumber

    await location.save()
  }
  public getLocation = async (location) => {
    try {
      const locate = await VehicleLocation.find({
        where: [
          {
            PC: location.PC,
          },
        ],
      })
      return locate
    } catch (error) {
      throw new AppError(error)
    }
  }
}
