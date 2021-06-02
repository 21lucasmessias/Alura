export const CalculateTime = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalFunction = descriptor.value;

    descriptor.value = (...args: any[]) => {
      const originalReturn = originalFunction.apply(this, args)

      return originalReturn
    }

    return descriptor
  } 
}