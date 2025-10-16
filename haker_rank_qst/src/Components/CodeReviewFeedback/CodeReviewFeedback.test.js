import { render, screen, fireEvent } from "@testing-library/react";
import CodeReviewFeedback from "./By_UseStateHook/CodeReviewFeedback";
import { aspects } from "./By_UseStateHook/aspects";

jest.useFakeTimers();

describe("CodeReviewFeedback Component", () => {
  test("renders all aspects", () => {
    render(<CodeReviewFeedback />);

    aspects.forEach((aspect) => {
      expect(screen.getByText(aspect)).toBeInTheDocument();
    // expect(screen.queryByText(/goodbye/i)).not.toBeInTheDocument();
    });
  });
});
