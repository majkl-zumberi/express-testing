export const devicePrices = {
  notebook: { price: 50 },
  desktop: { price: 30 },
  tablet: { price: 20 }
}
export const deviceType = ['notebook', 'desktop', 'tablet']
export const schema =
    {
      create: {
        startTime: {
          type: Date
        },
        endTime: {
          type: Date
        },
        device: {
          type: String,
          enum: deviceType,
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
        device: {
          type: String,
          enum: deviceType
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
        device: {
          type: String,
          enum: deviceType
        },
        totalPrice: {
          type: Number
        }
      }
    }
export var data = []
