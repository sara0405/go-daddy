import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useRepository } from "../../hooks";
import { ErrorMessage } from "../shared/ErrorMessage";
import { ExternalLink } from "../shared/ExternalLink";
import { LoadingSpinner } from "../shared/LoadingSpinner";
import { Forks } from "./Forks";
import { Issues } from "./Issues";
import { Languages } from "./Languages";
import { WatchingCount } from "./WatchingCount";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h1`
  color: #00838c;
  margin-right: 8px;
`;

export const RepositoryInfo = () => {
  const { repositoryId } = useParams();
  const { repository, isLoading } = useRepository(repositoryId);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (repository) {
    const issuesUrl = repository.issues_url.replace("{/number}", "");
    return (
      <Container>
        <HeaderContainer>
          <TitleContainer>
            <Title>{repository?.full_name} </Title>
            <ExternalLink url={repository.html_url} />
          </TitleContainer>
          <WatchingCount count={repository.watchers} />
        </HeaderContainer>
        <p>{repository.description}</p>
        <Languages url={repository.languages_url} />
        <Issues url={issuesUrl} />
        <Forks url={repository.forks_url} />
      </Container>
    );
  }

  return <ErrorMessage />;
};
