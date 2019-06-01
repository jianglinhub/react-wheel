import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../button/button'

describe('button', () => {
    it('is a react component', () => {
        const json = renderer.create(<Button />).toJSON()
        expect(json).toMatchSnapshot()
    })
})