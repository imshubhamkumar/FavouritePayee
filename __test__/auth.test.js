import { render, fireEvent } from "@testing-library/react";
import Login from "@/app/auth/login/index.js";

it("Should show error", async () => {
  const { getByLabelText, getByText } = render(<Login />);

  const usernameInput = getByLabelText("Username");
  const passwordInput = getByLabelText("Password");
  const submitButton = getByText("Login");

  fireEvent.change(usernameInput, { target: { value: "myUser" } });
  fireEvent.change(passwordInput, { target: { value: "myPassword" } });

  fireEvent.click(submitButton);

  // Here you can perform your assertion based on the UI feedback of the login process
  // For example:
  // const errorElement = getByText("Incorrect username or password");

  // Instead of the below line, you should check for the expected side effect.
  // expect(handleLogin).toBeCalled();

  // Ensure that the form submission would actually trigger a login process,
  // ideally, check for the rendered error message or any other expected behavior.
});
