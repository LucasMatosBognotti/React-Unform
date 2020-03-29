import User from '../models/User';

class UserController {
  async store(req, res) {
    const existEmail = await User.findOne({ where: { email: req.body.email } }); 

    const existPhone = await User.findOne({ where: { phone: req.body.phone } });

    const existRegister = await User.findOne({ where: { register: req.body.register } });

    if(existEmail || existPhone || existRegister) {
      return res.status(401).json({ error: 'User already exist' });
    }

    const { id, name, email  } = await User.create(req.body);

    return res.json({ 
      user: {
        id,
        name,
        email
      } 
    });

  }

  async index(req, res) {
    const user = await User.findAll({
      attributes: ['id', 'name', 'email']
    });
  
    return res.json(user);
  }

  async show(req, res) {
    const user = await User.findOne({ where: { id: req.params.id } });

    if ( user == null) {
      return res.status(400).json({ error: 'User not found' });
    }

    return res.json(user);
  }

  async update(req, res) {
    
    const { email, phone, register } = req.body;

    const user = await User.findByPk(1);

    if (email !== user.email || phone !== user.phone || register !== user.register) {
      const existEmail = await User.findOne({ where: { email: req.body.email } });
      
      const existPhone = await User.findOne({ where: { phone: req.body.phone } });

      const existRegister = await User.findOne({ where: { register: req.body.register } });


      if (existEmail || existPhone || existRegister) {
        return res.status(400).json({ error: 'Failed to update user, check your data '});
      }
    }
      const { id, name } = await user.update(req.body);

      return res.json({
        id,
        name,
        email,
        phone,
      });

    }
  
  async delete(req, res) {
    const user = await User.destroy({ where: { id: req.params.id } });

    if (user == 0) {
      return res.status(401).json({ erro: 'Error when deleting the user'})
    }

    return res.json({ success: 'User deleted successfully' });
  }
}

export default new UserController();