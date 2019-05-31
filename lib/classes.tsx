
export const scopedClassMaker = (prefix: string) => {
  return function x(name?: string) {
    return ['fui-dialog', name].filter(Boolean).join('-')
  } 
}