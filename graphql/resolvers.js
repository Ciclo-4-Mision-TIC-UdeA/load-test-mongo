import { UserModel } from './usuario.js';

const resolversUsuario = {
  Query: {
    Usuarios: async () => {
      const usuarios = await UserModel.find();
      return usuarios;
    },
  },
  Mutation: {
    crearUsuario: async (parent, args) => {
      const usuarioCreado = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
      });

      return usuarioCreado;
    },

    eliminarUsuario: async (parent, args) => {
      const usuarioEliminado = await UserModel.findOneAndDelete({ correo: args.correo });
      return usuarioEliminado;
    },
  },
};

export { resolversUsuario };
