import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserCard from "@/components/user-card";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <UserCard
        user={{
          name: "John Doe 1",
          email: "john@gmail.com",
        }}
      />,
    );

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
