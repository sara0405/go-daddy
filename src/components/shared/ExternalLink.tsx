import link from "../../icons/external-link.png";
import { FC } from "react";
import styled from "styled-components";

interface LinkProps {
  url: string;
  isSmall?: boolean;
}

interface ImageProps {
  isSmall?: boolean;
}

const Image = styled.img<ImageProps>`
  width: ${(props) => (props.isSmall ? "20px" : "30px")};
  height: ${(props) => (props.isSmall ? "20px" : "30px")};
  margin-right: 4px;
`;

const StyledA = styled.a`
  display: inline-flex;
  justify-content: center;
`;

export const ExternalLink: FC<LinkProps> = ({ url, isSmall }) => (
  <StyledA href={url} target="_blank" rel="noreferrer">
    <Image src={link} alt="external-link" isSmall={isSmall} />
  </StyledA>
);
