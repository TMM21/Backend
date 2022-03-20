import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm-plus'

import { VehicleFeatures } from '../vehicleFeature'
import { Vehicles } from '../vehicle'
import { Trips } from '../Trips'

@Entity()
export class VehicleType extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column()
  public seatNumber: number
  @OneToMany((type) => Trips, (trip) => trip.type)
  public trip: Trips[]

  @ManyToOne((type) => VehicleFeatures, (feature) => feature.type)
  public feature: VehicleFeatures
  @ManyToOne((type) => Vehicles, (vehicle) => vehicle.vehicleType)
  public vehicle: Vehicles

  @CreateDateColumn()
  public createdAt: Date
  @UpdateDateColumn()
  public updatedAt: Date
}
