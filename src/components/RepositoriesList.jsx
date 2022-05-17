import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Header from './Header'

const RepositoriesList = () => {
    const { username } = useParams()
    const [repoList, setRepoList] = useState([])
    const url = `https://api.github.com/users/${username}/repos`
    useEffect(() => {
        async function foo() {
            await fetch(url)
                .then((res) => res.json())
                .then((res) => setRepoList(res))
        }
        foo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Container>
            <div>
                <Header {...{ username }} />
                <div className="list">
                    <ul>
                        {repoList.map((repo) => {
                            return (
                                <li key={repo.id}>
                                    <Link
                                        className="link"
                                        to={`/${username}/${repo.name}`}
                                    >
                                        {repo.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .list {
        background-color: lightgray;
        height: 100rem;
        ul {
            margin-top: 0;
            padding: 2rem;
        }
        .link {
            text-decoration: none;
        }
    }
`

export default RepositoriesList
