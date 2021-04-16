import React from "react";
import renderer from 'react-test-renderer'
import DestinationCard from "./index";

jest.mock("react-router-dom", () => ({
    Link: "Link"
}));

describe('DestinationCard component', () => {
    test('should render correctly', () => {
        const component = renderer.create(
            <DestinationCard/>
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})