const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  register() {
    this.valida();
  }

  valida() {
    this.cleanUp();
    // Validação
    // O email precisa ser válido
    // Senha entre 3 e 10
  }

  cleanUp() {
    for(const key)
  }
}

module.exports = Login;
