import {Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, DataType} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  freezeTableName: true
})
export class Users extends Model<Users> {

  @PrimaryKey
  
  @Column({
    type: DataType.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  })
  public id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: true
  })
  public name: string
  
  @Column({
    type: DataType.STRING(64),
    allowNull: true
  })
  public password: string

  @Column({
    type: DataType.STRING(100),
    allowNull: true
  })
  public email: any

  @Column({
    type: DataType.STRING(20),
    allowNull: true
  })
  public phone: any

  @Column({
    type: DataType.INTEGER(11),
    allowNull: true,
    defaultValue: '1'
  })
  public status: number

  @Column({
    type: DataType.STRING(400),
    allowNull: true
  })
  public api_token: string

  exclode() {
    return {
        id: this.id,
        password: this.password,
    }
  }

  short() {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone,
      status: this.status,
      // api_token: this.api_token
    }
  }

}
