import { FC } from "react";
import { Repository } from "../../types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card, CardTitle } from "../shared/Card";

interface RepositoryCardProps {
  repository: Repository;
}

const StyledCard = styled(Card)`
  cursor: pointer;
`;

export const RepositoryCard: FC<RepositoryCardProps> = ({ repository }) => (
  <Link to={`/repositories/${repository.name}`}>
    <StyledCard>
      <CardTitle>{repository.name}</CardTitle>
    </StyledCard>
  </Link>
);
