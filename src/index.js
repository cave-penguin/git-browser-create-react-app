import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import valueContext from './contexts/valueContext'
// import namesContext from './contexts/namesContext'

function Main() {
    const [value, setValue] = useState('')

    return (
        <React.StrictMode>
            <BrowserRouter>
                <valueContext.Provider value={{ value, setValue }}>
                    <App />
                </valueContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Main />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
