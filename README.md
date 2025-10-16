toBeInTheDocument() - it  checks if the element is attached to document.body

Query Methods in React Testing Library - These are different query methods for finding elements in the DOM

1. getBy* - Synchronous, throws error if not found
// Returns the element immediately
// Throws error if element doesn't exist
// Use when element should be present

yu can catch by using - getByRole(), queryByText(), getByLabelText(), getByPlaceholderText(), getByTestId(), getByAltText()


2. queryBy* - Synchronous, returns null if not found
// Returns the element immediately
// Returns null if element doesn't exist
// Use when testing element absence



3. findBy* - Asynchronous, waits for element
// Returns a Promise
// Waits up to 1000ms by default
// Throws error if element not found within timeout
// Use for elements that appear after async operations