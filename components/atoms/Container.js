import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background: ${props => props.theme.colors.muted};
    color: ${props => props.theme.colors.deep};
    font-size: ${props => props.theme.fontSize.normal};
`;