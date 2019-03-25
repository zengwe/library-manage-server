import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
// @ts-ignore
@Table({
  tableName: 'z_test'
})
export class Test extends Model<Test> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  id: number;
  @Column({

  })
  name: string;
}