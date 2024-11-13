import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders the counter text', () => {
    render(_jsx(App, {}));
    expect(screen.getByText(/count is/i)).toBeInTheDocument(); // Adjusted regex to match button text.
});
