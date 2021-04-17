import React from "react";
import renderer from 'react-test-renderer'
import {AuthContext} from '../ContextWrapper'
import Navigation from "./index";

jest.mock("react-router-dom", () => ({
    Link: "Link"
}));

describe('Navigation component', () => {
    test('should render correctly if user is is logged', () => {
        const component = renderer.create(
            <AuthContext.Provider value={{isLogged: true}}>
                <Navigation userD={{username:'Pesho'}}/>
            </AuthContext.Provider>
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    test('should render correctly if user is not is logged', () => {
        const component = renderer.create(
            <AuthContext.Provider value={{isLogged: false}}>
                <Navigation userD={{}}/>
            </AuthContext.Provider>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})