import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '../icon'

describe('Icon', () => {
    it('is a react component', () => {
        const json = renderer.create(<Icon name="alipay" />).toJSON()
        expect(json).toMatchSnapshot()
    })
})