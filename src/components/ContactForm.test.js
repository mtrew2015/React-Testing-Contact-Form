import ContactForm from './ContactForm';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, wait } from '@testing-library/react';


it('renders without crashing', () => {
	render(<ContactForm />);
});

describe('It submit values that are validated for the form', () => {
	test('firstName is defined', () => {
		const component = render(<ContactForm />);
		const firstName = component.getByTestId('firstName');
		expect(firstName).toBeDefined();
	});
});

describe('Submits the values when submit is clicked', () => {
	test('message is submitted when submit is clicked', async () => {
		const component = render(<ContactForm />);
		const message = component.getByTestId('Message');
		const button = component.getByTestId('submit');

		fireEvent.click(button);

		await wait(() => expect(message).toBeInTheDocument());
	});
});


