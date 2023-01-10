import { Box } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <Box id="navbar">
      <li>
        <div>
          <h2>Home</h2>
        </div>
      </li>
      <li>
        <div>
          <h2>About</h2>
        </div>
      </li>
      <li>
        <div>
          <h2>Login</h2>
        </div>
      </li>
      <li>
        <div>
          <h2>Sign Up</h2>
        </div>
      </li>
    </Box>
  );
}
