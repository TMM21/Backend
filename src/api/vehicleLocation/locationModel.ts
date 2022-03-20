import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm-plus'
import { Vehicles } from '../vehicle'
import { VehicleStatus } from '../../enums'

@Entity()
export class VehicleLocation extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  public vehicle: Vehicles
  @Column()
  public plateNumber: string
  @Column()
  public Location: string
  @Column()
  public Left: string
  @Column()
  public PC: string
  @Column()
  public HeadingTo: string
  @Column({ type: 'enum', enum: VehicleStatus })
  public status: VehicleStatus
  @CreateDateColumn()
  public createdAt: Date
  @UpdateDateColumn()
  public updatedAt: Date
}
