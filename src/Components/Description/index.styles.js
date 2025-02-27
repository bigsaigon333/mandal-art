import styled from 'styled-components';

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  color: white;
  padding: 0 4rem;
  margin: 6rem auto 1rem auto;
  text-align: center;

  .title {
    font-size: 4rem;
    margin: 0 0 1rem 0;
    background: linear-gradient(to right, var(--orange) 0%, var(--red) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const TitleWrapper = styled.div`
  font-family: 'PAYW Pro Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-bottom: 1rem;
`;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 1rem;

  span {
    display: inline-block;
  }

  .content {
    background: var(--box-background);
    border-radius: 12px;
    padding: 0.5rem;
    margin: 0 0.2rem;
  }
`;
const ContentWrapper = styled.p`
  font-weight: 400;
  line-height: 1.3;
`;

export { DescriptionWrapper, TitleWrapper, MainWrapper, ContentWrapper };
