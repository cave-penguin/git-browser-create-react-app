import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Header = ({ username, repositoryname }) => {
    const navigate = useNavigate()
    return (
        <Container>
            <div className="header">
                <div className="btn-group">
                    <button
                        id="go-back"
                        className="btn"
                        type="button"
                        onClick={() => navigate('/')}
                    >
                        Go Back
                    </button>
                    <button
                        id="go-repository-list"
                        className="btn"
                        type="button"
                        onClick={() => navigate(`/${username}`)}
                    >
                        Go to repositories
                    </button>
                </div>
                <div id="repository-name" className="username">
                    {username} {repositoryname}
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 3rem;
        border-bottom: 2px solid red;
        .btn-group {
            .btn {
                margin: 5px;
                background-color: lightblue;
                border: 2px solid black;
                border-radius: 5px;
            }
        }
        .username {
            margin-right: 1rem;
            font-weight: 500;
        }
    }
`

export default Header
