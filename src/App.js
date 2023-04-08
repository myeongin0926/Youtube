import React from "react";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeContextApi";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <SearchHeader />

      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
};

export default App;
