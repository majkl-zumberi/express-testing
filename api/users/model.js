import _ from 'lodash'

export const roles = ['app-user', 'admin']

export const schema = {
  create: {
    email: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    role: {
      type: String,
      enum: roles,
      default: 'app-user'
    },
    name: {
      type: String
    },
    surname: {
      type: String
    }
  },
  query: {
    email: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      minlength: 6
    },
    role: {
      type: String,
      enum: roles,
      default: 'app-user'
    },
    name: {
      type: String
    },
    surname: {
      type: String
    }
  }
}
export const view = function (user) {
  return _.remove(user, 'password')
}

export const data = [{ email: 'admin@admin.com', password: '$2y$04$a8n0ViY73hgwozUB2M.bJuXR.nJOWjSYeOA.pkB9c5YEM9qwIS3nW', id: '1371b9e9-364e-4df3-b99f-9141671007a8', role: 'admin' }]
