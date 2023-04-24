const React = require('react')

function OldIndex(props) {
    const {oldSchool} = props

    return (
        <div>
            <h1>Old School</h1>

            <ul>
                {
                    oldSchool.map((oldSchool, i) => {
                        return (
                            <li>
                                <a href={`/oldschool/${i}`}>{oldSchool.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = OldIndex;