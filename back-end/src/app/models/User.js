import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      phone: Sequelize.STRING,
      register: Sequelize.STRING,
      cep: Sequelize.STRING,
      number: Sequelize.STRING,
      complement: Sequelize.STRING,
      neighborhood: Sequelize.STRING,
      street: Sequelize.STRING,
      city: Sequelize.STRING,
      uf: Sequelize.STRING,
    },
    {
      sequelize,
    }
  );
  }
}

export default User;