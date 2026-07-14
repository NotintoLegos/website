import React from 'react'

function Dashboard() {
    return(
        <div className="dashboard-container">
            <h1>Dashboard testing</h1>
            <button onClick={() => window.location.href = '/'}>
                Back to Home
            </button>
        </div>
    )
}

export default Dashboard