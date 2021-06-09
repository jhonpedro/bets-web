import styled from 'styled-components'

export const RecentGameContainer = styled.div`
  color: var(--color-dark);
  position: relative;
  padding: 0.5rem 1rem;

  strong:first-child {
    font-size: 2.1rem;
    font-style: italic;
    font-weight: bold;
  }

  span {
    display: block;
    font-size: 1.6rem;
    font-weight: lighter;
    margin: 1rem 0;
  }

  strong:last-child {
    color: ${(props) => props.color};
    font-size: 1.9rem;
    font-style: italic;
    font-weight: bold;
  }

  border-left: 0.5rem solid ${(props) => props.color};
  border-radius: 0.5rem;
`
