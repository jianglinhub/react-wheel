import classes, { scopedClassMaker } from '../classes'

describe('classes', () => {
    it('test receive 0 className', () => {
        const result = classes('')
        expect(result).toEqual('')
    })
    it('test receive 1 className', () => {
        const result = classes('a')
        expect(result).toEqual('a')
    })
    it('test receive 2 className', () => {
      const result = classes('a', 'b')
      expect(result).toEqual('a b')
    })
    it('test receive undefined', () => {
      const result = classes(undefined)
      expect(result).toEqual('')
    })
    it('test receive 1 className and undefined', () => {
      const result = classes('a', undefined)
      expect(result).toEqual('a')
    })
    it('test receive other character', () => {
      const result = classes('a', '中文', undefined, null, false)
      expect(result).toEqual('a 中文')
    })
})

describe('scopedClassMarker', () => {
  it('x', () => {
    const sc = scopedClassMaker('gu-layout')
    expect(sc('')).toEqual('gu-layout')
    expect(sc('x')).toEqual('gu-layout-x')
    expect(sc({ y: true, z: false })).toEqual('gu-layout-y')
    expect(sc({ y: true, z: true })).toEqual('gu-layout-y gu-layout-z')
    expect(sc({ y: true, z: true }, { extra: 'red' })).toEqual('gu-layout-y gu-layout-z red')
  })
})