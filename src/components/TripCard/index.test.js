import React from "react";
import renderer from 'react-test-renderer'
import TripCard from "./index";

jest.mock("react-router-dom", () => ({
    Link: "Link"
}));

describe('TripCard component', () => {
    test('should render correctly', () => {
        const component = renderer.create(
            <TripCard/>
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})