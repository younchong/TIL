const UserService = require("../user_service");
const UserClient = require("../user_client");
jest.mock("../user_client.js");

describe("user service mock", () => {
  let userService;
  const login = jest.fn(async () => "success");
  UserClient.mockImplementation(() => {
    return {
      login,
    }
  });

  beforeEach(() => {
    userService = new UserService(new UserClient());
  })

  it("call login() once", async () => {
    await userService.login("abc", "123");
    expect(login.mock.calls.length).toBe(1);
  });

  it("call login() twice, but call only once", async () => {
    await userService.login("abc", "123");
    await userService.login("abc", "123");
    
    expect(login.mock.calls.length).toBe(1);
  });
})