export const schema =
    {
      create: {
        name: {
          type: String,
          required: true
        },
        done: {
          type: Boolean,
          default: false
        },
        note: {
          type: String,
          required: false
        },
        number: {
          type: Number,
          required: false
        }
      },
      query: {
        name: {
          type: String,
          required: false
        },
        done: {
          type: Boolean,
          required: false
        },
        note: {
          type: String,
          required: false
        },
        number: {
          type: Number,
          required: false
        }
      },
      update: {
        name: {
          type: String,
          required: false
        },
        done: {
          type: Boolean,
          default: false
        },
        note: {
          type: String,
          required: false
        },
        number: {
          type: Number,
          required: false
        }
      }
    }
export var data = [
  {
    name: 'liviu',
    done: true,
    id: '1a17e23d-f6b3-4bfd-9576-4421bcba8b3c'
  },
  {
    name: 'liviu',
    done: true,
    id: '7619b77c-24b1-437a-9bec-e6e3c2781cf7'
  },
  {
    name: 'liviu',
    done: true,
    id: 'c0e5c8d7-83f2-473e-b8ce-202a9a3b7a07'
  },
  {
    name: 'liviu',
    done: true,
    id: '9b9d597e-1f54-49cf-ab66-897c5a7de521'
  },
  {
    name: 'liviu',
    done: true,
    id: '1371b9e9-364e-4df3-b99f-9141671007a8'
  },
  {
    name: 'liviu',
    done: true,
    id: 'd05fa31b-77fa-42ad-8e3d-a06971a431f0'
  }
]
