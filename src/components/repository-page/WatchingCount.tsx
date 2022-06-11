import eye from "../../icons/search.png";
import { FC } from "react";
import styled from "styled-components";

interface WatchingCountProps {
  count: number;
}

const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 4px;
`;

const Container = styled.span`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 25px;
`;

export const WatchingCount: FC<WatchingCountProps> = ({ count }) => (
  <Container>
    <Image src={eye} alt="watching" />
    {count}
  </Container>
);
