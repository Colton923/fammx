type ServerActionResponseType =
  | {
      status: 200
      data?: any // you can create a type here for whatever data shape you return...
    }
  | {
      status: 400
      errors?: any
    }

export type { ServerActionResponseType }
