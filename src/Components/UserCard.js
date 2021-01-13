import React from 'react';
import styled from 'styled-components';


const StyledUserContainer = styled.div`
    width: ${props => (props.full ? '900' : '300')}px;
    border-radius: 20px;
    box-shadow: 1px 1px 7px 5px #ffccc9;
    margin-bottom: 20px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    img {
        border-radius: 15px;
    }
`;

const StyledUserContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

const StyledFollowerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    margin: 15px;
    padding: 5px;
    border-radius: 20px;
    box-shadow: 1px 1px 3px 2px #ffccc9;
    img {
        border-radius: 15px;
    }
`;


export const UserCard = props => {
    const { login, followers, following, avatar_url, createdAt } = props.user;
    return (
        <StyledUserContainer full={props.full}>
            <img src={avatar_url} width="200" height="200" />
            <StyledUserContentContainer>
                <h1>{login}</h1>
            </StyledUserContentContainer>
        </StyledUserContainer>
    );
};

export const FollowerCard = props => {
    let { login, avatar_url, followers, following, createdAt } = props.user;

    return (
        <StyledFollowerContainer full={props.full}>
            <img src={avatar_url} width="200" height="200" />
            <h1>{login}</h1>
        </StyledFollowerContainer>
    );
};