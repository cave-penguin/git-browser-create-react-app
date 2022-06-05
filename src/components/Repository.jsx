import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'
import namesContext from '../contexts/namesContext'

const Repository = () => {
    const { username, repositoryname } = useParams()
    const [readme, setReadme] = useState('')
    // const { username, repositoryname } = useContext(namesContext)

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
