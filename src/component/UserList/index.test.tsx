import UserList from ".";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import axios from "axios";

describe("UserList", () => {

  it("拿到users data 前 render loading", () => {
    render(<UserList />);
    expect(screen.getByText("loading...")).toBeInTheDocument();
  });

  it("拿到users data 後 render users", async () => {

    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValueOnce({
        data: [
            { id: '1', username: 'Dylan' },
            { id: '2', username: 'Chloe' },
            { id: '3', username: 'John' },
        ],
    });
    render(<UserList />);
    
    expect(await screen.findByText("Dylan")).toBeInTheDocument();
  
  });
});
