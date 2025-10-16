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

  test("initial upvotes and downvotes are 0", () => {
    render(<CodeReviewFeedback />);

    aspects.forEach((ele, idx) => {
      console.log(ele, "index value", idx);

      expect(screen.getAllByText(/Upvotes:/)[idx]).toHaveTextContent(
        "Upvotes: 0"
      );
      expect(screen.getAllByText(/Downvotes:/)[idx]).toHaveTextContent(
        "Downvotes: 0"
      );
    });
  });

  test("clicking upvote increases the count", () => {
    render(<CodeReviewFeedback />);

    const getUpvodeBtn = screen.getAllByText("👍 Upvote");
    fireEvent.click(getUpvodeBtn[0]);
    expect(screen.getAllByText(/Upvotes:/)[0]).toHaveTextContent("Upvotes: 1");
  });

  test("clicking downvote increases the count", () => {
    render(<CodeReviewFeedback />);

    const getDownvodeBtn = screen.getAllByText("👎 Downvote");
    fireEvent.click(getDownvodeBtn[0]);
    expect(screen.getAllByText(/Downvotes:/)[0]).toHaveTextContent(
      "Downvotes: 1"
    );
  });

  test("animation classes applied on vote and removed after timeout", () => {
    render(<CodeReviewFeedback />);

    const getUpvodeBtn = screen.getAllByText("👍 Upvote");
    fireEvent.click(getUpvodeBtn[0]);
    const getTextValues = screen.getAllByText(/Upvotes:/)[0];
    console.log("getText", getTextValues);
    expect(getTextValues).toHaveClass("animate-upvote");
    jest.advanceTimersByTime(200);

    expect(getTextValues).not.toHaveClass("animate-downvote");
    // expect(screen.getAllByText(/Upvotes:/)[0]).toHaveTextContent("Upvotes: 1");
  });
});
