import React from "react";
import { Icon } from "@iconify/react";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid justify-content-center gap-3">
          <Icon icon="gridicons:globe" width="30" color="white" />
          <p class="navbar-brand m-0">My Travel Journal</p>
        </div>
      </nav>
    </div>
  );
};
