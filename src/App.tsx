import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import { RepositoryList } from "./components/repository-list/RepositoryList";
import { RepositoryInfo } from "./components/repository-page/RepositoryInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

export const App = () => (
  <Container>
    <Router>
      <Routes>
        <Route
          path="/repositories/:repositoryId"
          element={<RepositoryInfo />}
        />
        <Route path="/" element={<RepositoryList />} />
      </Routes>
    </Router>
  </Container>
);
