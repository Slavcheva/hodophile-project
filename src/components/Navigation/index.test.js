import React from "react";
import renderer from 'react-test-renderer'
import Navigation from "./index";
import {render} from '@testing-library/react'

jest.mock("react-router-dom", () => ({
    Link: "Link"
}));

// const isLogged =false
describe('Navigation component', () => {
    test('should render correctly', () => {
        const component = renderer.create(
            <Navigation isLogged={false}/>
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    test('should render correctly if isLogged', () => {
        const component = renderer.create(
            <Navigation isLogged={true}/>
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})





//
// let mockIsLoggedIn = false
// jest.mock('', () => {
//     return jest.fn(() => ({
//         isLogged: mockIsLoggedIn
//     }))
// })
//

// describe('Navigation component', () => {
//     test('should render correctly', () => {
//         const component = renderer.create(
//             <Navigation/>
//         )
//         const tree = component.toJSON()
//         expect(tree).toMatchSnapshot()
//     })
//     test('can show logged in message', () => {
//         mockIsLoggedIn = true
//         const {getByText} = render(<Navigation/>)
//         expect(getByText('HELLO, ')).toBeTruthy()
//     })
// })