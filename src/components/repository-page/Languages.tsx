import { FC } from "react";
import { useRepoLanguages } from "../../hooks";
import { Card, CardRow, CardTitle } from "../shared/Card";
import { ErrorMessage } from "../shared/ErrorMessage";
import { LoadingSpinner } from "../shared/LoadingSpinner";

interface LanguagesProps {
  url: string;
}

export const Languages: FC<LanguagesProps> = ({ url }) => {
  const { languages, isLoading } = useRepoLanguages(url);

  if (isLoading) {
    return (
      <Card>
        <LoadingSpinner />
      </Card>
    );
  }

  if (languages) {
    const languageRows = Object.entries(languages).map(([key, value]) => (
      <CardRow key={key}>
        {key}: {value}
      </CardRow>
    ));

    return (
      <Card>
        <CardTitle>Languages</CardTitle>
        {languageRows.length ? languageRows : "No data"}
      </Card>
    );
  }

  return <ErrorMessage />;
};
