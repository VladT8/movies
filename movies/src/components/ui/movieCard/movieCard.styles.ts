import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  width: 300px;
  text-align: left;
`;

export const Poster = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 12px;
`

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 8px;
  &::hover
  {font-weight: 100}
`

export const Info = styled.h4`
  font-size: 18px;
  margin-bottom: 4px;
  font-weight: 600;
`