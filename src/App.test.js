import React from "react";
import App from "./App";
import ContactForm from './components/ContactForm';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, wait } from '@testing-library/react';
import { MutationObserver } from 'mutationobserver-shim';

test("renders App without crashing", () => {
  render(<App />);
});


