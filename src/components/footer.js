import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-dark text-center text-white">
                {/* Copyright */}
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © {new Date().getFullYear()} Copyright:&nbsp;
                    <a className="text-white font-weight-bold" href="https://github.com/fahadsheikh003" target="_blank" rel="noopener noreferrer">Devil Sheikh</a>
                </div>
                {/* Copyright */}
            </footer>
        </div>
    )
}
