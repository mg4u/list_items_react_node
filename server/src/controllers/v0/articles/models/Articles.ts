import {Table, Column, Model, BelongsTo, PrimaryKey, CreatedAt, UpdatedAt, DataType, DeletedAt} from 'sequelize-typescript';
import { Users } from '../../users/models/Users';

@Table({
  tableName: 'articles',
  freezeTableName: true
})
export class Articles extends Model<Articles> {
  @PrimaryKey
  
  @Column({
    type: DataType.INTEGER(11),
    autoIncrement: true
  })
  public id: number;

  @Column({
    type: DataType.INTEGER(11),
    allowNull: false,
    defaultValue: '0'
  })
  public user_id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: true
  })
  public title: string
  
  @Column({
    type: DataType.TEXT,
    allowNull: true
  })
  public description: string

  @CreatedAt
  created_at: Date;
 
  @UpdatedAt
  updated_at: Date;

  @BelongsTo( () => Users, {
    targetKey: 'id',
    foreignKey: 'user_id'
  })
  public basicinfo: Users

}
