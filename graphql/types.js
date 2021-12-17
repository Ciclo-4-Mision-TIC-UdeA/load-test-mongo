import { gql } from 'apollo-server-express';

const tiposUsuario = gql`
  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
  }

  type Query {
    Usuarios: [Usuario]
  }

    type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
    ): Usuario

    eliminarUsuario(correo: String): Usuario
`;

export { tiposUsuario };
