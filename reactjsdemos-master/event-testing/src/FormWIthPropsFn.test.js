import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormWithPropsFn from './FormWithPropsFn';

describe(`Form Tests`, () => {
    describe(`onSubmit tests`, () => {
        const mockSubmit = jest.fn();
        const testName = `Test Name`;

        it(`should update the name state when the text input is typed in`, () => {
            // Arrange
            const { container } = render(<FormWithPropsFn submit={mockSubmit} />);
            const nameInput = container.querySelector(`[name="name"]`);
            expect(nameInput.value).toEqual(``);

            // Act
            userEvent.type(nameInput, testName);

            // Assert
            expect(nameInput.value).toEqual(testName);

        });

        it(`should call the handleSubmit function when the submit button is clicked`, () => {
            // Arrange
            const { container } = render(<FormWithPropsFn submit={mockSubmit} />);
            const nameInput = container.querySelector(`[name="name"]`);
            const submitButton = container.querySelector(`[type="submit"]`);

            // Act
            userEvent.type(nameInput, testName);
            fireEvent.click(submitButton);

            // Assert
            expect(mockSubmit).toHaveBeenCalled();
            expect(mockSubmit).toHaveBeenCalledWith({ name: testName });

        });

    });
});