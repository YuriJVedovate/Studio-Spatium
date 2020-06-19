const db = require('./db');

const cadusuarios = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
});

// cadusuarios.sync({
//         force: true
//     });

module.exports = cadusuarios;