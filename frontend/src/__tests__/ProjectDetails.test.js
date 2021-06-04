import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ProjectDetails from "../ProjectDetails"

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Renders project data", async () => {
    const fakeProjectDetail = {
        name: "Mock project",
        status: "Available",
        description: "This is an example of a project description for testing purposes"
    };
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeProjectDetail)
        })
    );

    await act(async () => {
        render(<ProjectDetails id="123" />, container);
    });

    expect(container.querySelector("h2").textContent).toBe(fakeProjectDetail.name);
    expect(container.querySelector("h3").textContent).toBe(fakeProjectDetail.status);
    expect(container.textContent).toContain(fakeProjectDetail.description);

    global.fetch.mockRestore();

});