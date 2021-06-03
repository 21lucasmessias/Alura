export const CalculateTime = (seconds: boolean = false) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalFunction = descriptor.value;

    descriptor.value = (...args: any[]) => {
      let unit = 'ms'
      let divider = 1

      if(seconds){
        unit = 's'
        divider = 1000
      }

      console.log('---------------------------')
      console.log(`Params for method ${propertyKey}: ${JSON.stringify(args)}`)

      const t1 = performance.now()

      const originalReturn = originalFunction.apply(this, args)

      console.log(`Result of the method: ${JSON.stringify(originalReturn)}` )

      const t2 = performance.now()
      console.log(`${propertyKey} takes ${(t2 - t1)/divider} ${unit}`)
      console.log('-----------------------')

      return originalReturn
    }

    return descriptor
  } 
}