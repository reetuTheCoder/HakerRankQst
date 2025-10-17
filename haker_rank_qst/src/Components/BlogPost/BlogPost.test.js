import { fireEvent, render, screen, within } from "@testing-library/react";
import InputFields from "./InputFields";
import Blogs from "./Blogs";
import PostDisplay from "./PostDisplay";

describe("InputFields Component", () => {
  test("renders title input and description textarea", () => {
    const setTitle = jest.fn();
    const setDescription = jest.fn();
    render(
      <InputFields
        title=""
        setTitle={setTitle}
        description=""
        setDescription={setDescription}
      />
    );

    const titleInput = screen.getByPlaceholderText("Enter Title");
    const descTextarea = screen.getByPlaceholderText("Enter Description");
    expect(titleInput).toBeInTheDocument();
    expect(descTextarea).toBeInTheDocument();

    fireEvent.change(titleInput, { target: { value: "New Post" } });
    fireEvent.change(descTextarea, { target: { value: "about new post" } });

    expect(setTitle).toHaveBeenCalledWith("New Post");
    expect(setDescription).toHaveBeenCalledWith("about new post");
  });
});

describe("PostDisplay Component", () => {
  test("renders title and description and triggers onClick when delete button is clicked", () => {
    const clickDeleteBtn = jest.fn();
    render(
      <PostDisplay
        title="Test Title"
        description="Test Description"
        onClick={clickDeleteBtn}
      />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();

    const getDeleteBtn = screen.getByText("Delete");
    fireEvent.click(getDeleteBtn);

    expect(clickDeleteBtn).toHaveBeenCalledTimes(1);
  });
});

describe("Blog Component", () => {
  test("adds a post only when both title and description are provided and deletes post", () => {
    render(<Blogs />);

    const titleInput = screen.getByPlaceholderText("Enter Title");
    const descTextArea = screen.getByPlaceholderText("Enter Description");
    const createPostBtn = screen.getByText("Create Post");
    const postsList = screen.getByTestId("posts-list");

    fireEvent.click(createPostBtn);
    expect(within(postsList).queryByText("New Post")).not.toBeInTheDocument();
    expect(
      within(postsList).queryByText("about new post")
    ).not.toBeInTheDocument();

    fireEvent.change(titleInput, { target: { value: "New Post" } });
    fireEvent.click(createPostBtn);
    expect(within(postsList).queryByText("New Post")).not.toBeInTheDocument();

    fireEvent.change(titleInput, { target: { value: "" } });
    fireEvent.change(descTextArea, { target: { value: "about new post" } });
    fireEvent.click(createPostBtn);
    expect(
      within(postsList).queryByText("about new post")
    ).not.toBeInTheDocument();

    fireEvent.change(titleInput, { target: { value: "New Post" } });
    fireEvent.change(descTextArea, { target: { value: "about new post" } });
    fireEvent.click(createPostBtn);

    expect(within(postsList).getByText("New Post")).toBeInTheDocument();
    expect(within(postsList).getByText("about new post")).toBeInTheDocument();

    const deleteBtn = within(postsList).getByText("Delete");
    fireEvent.click(deleteBtn);

    expect(within(postsList).queryByText("New Post")).not.toBeInTheDocument();
    expect(
      within(postsList).queryByText("about new post")
    ).not.toBeInTheDocument();
  });
});
