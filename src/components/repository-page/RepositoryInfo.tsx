import { useRepository } from "../../hooks";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../shared/LoadingSpinner";
import { Languages } from "./Languages";
import { Issues } from "./Issues";
import { Forks } from "./Forks";
import styled from "styled-components";
import { WatchingCount } from "./WatchingCount";
import { ExternalLink } from "../shared/ExternalLink";
import { ErrorMessage } from "../shared/ErrorMessage";

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
