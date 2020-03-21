module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'form',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
};