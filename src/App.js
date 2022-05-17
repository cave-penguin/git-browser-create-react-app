import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import Main from './components/Main'
import RepositoriesList from './components/RepositoriesList'
import Repository from './components/Repository'

function App() {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:username" element={<RepositoriesList />} />
                <Route
                    path="/:username/:repositoryname"
                    element={<Repository />}
                />
            </Routes>
        </Container>
    )
}

const Container = styled.div`
    margin: 0;
    padding: 0;
`

export default App
