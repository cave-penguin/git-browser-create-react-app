import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Main = () => {
    const navigate = useNavigate()
    const [value, setvalue] = useState('')

    const onChange = (e) => setvalue(e.target.value)
    const onClick = () => navigate(`/${value}`)

    return (
        <Container>
            <div>
                <input
                    id="input-field"
                    type="text"
                    placeholder="Enter username ..."
                    onChange={onChange}
                    value={value}
                />
                <button id="search-button" type="button" onClick={onClick}>
                    Search
                </button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    input,
    button {
        border: 2px solid black;
        border-radius: 5px;
    }
`

export default Main
