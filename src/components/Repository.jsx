import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'

const Repository = () => {
    const { username, repositoryname } = useParams()
    const [readme, setReadme] = useState('')

    const url = `https://raw.githubusercontent.com/${username}/${repositoryname}/master/README.md`
    useEffect(() => {
        async function foo() {
            await axios
                .get(url)
                .then((res) => res.data)
                .then((data) => setReadme(data))
                .catch((err) => console.log(err))
        }
        foo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <div>
                <Header {...{ username, repositoryname }} />
                <div id="description" className="readme">
                    <ReactMarkdown>{readme}</ReactMarkdown>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .readme {
        background-color: lightgray;
        padding: 1rem;
    }
`

export default Repository
