import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  identificacion: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
});

const UserModel = model('User', userSchema);

export { UserModel };
