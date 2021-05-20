import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="container-fluid">
            <h3 className="mt-2">Thanks for coming by</h3>
            <p>Please check out my site. See the links on the top to learn more <Link to="/about">about me</Link>,
        see my <Link to="/portfolio">portfolio</Link>, and <Link to="/contact">contact</Link> me if you have any questions.</p>

        </div>
    )
}
