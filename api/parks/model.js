export const carPrices = {
  citycar: { price: 50 },
  utilitaria: { price: 75 },
  berlina: { price: 110 }
}
export const carType = ['citycar', 'utilitaria', 'berlina']
export const schema =
    {
      create: {
        startTime: {
          type: Date
        },
        endTime: {
          type: Date
        },
        createdAt: {
          type: Date
        },
        plate: {
          type: String,
          required: true
        },
        car: {
          type: String,
          enum: carType,
          required: true
        },
        totalDuration: {
          type: Number
        },
        totalPrice: {
          type: Number
        }
      },
      query: {
        startTime: {
          type: Date
        },
        endTime: {
          type: Date
        },
        createdAt: {
          type: Date
        },
        plate: {
          type: String
        },
        car: {
          type: String,
          enum: carType
        },
        totalPrice: {
          type: Number
        }
      },
      update: {
        startTime: {
          type: Date
        },
        endTime: {
          type: Date
        },
        createdAt: {
          type: Date
        },
        plate: {
          type: String
        },
        car: {
          type: String,
          enum: carType
        },
        totalPrice: {
          type: Number
        }
      }
    }
export var data = []
