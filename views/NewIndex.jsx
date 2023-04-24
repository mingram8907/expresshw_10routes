const React = require('react')

function NewIndex(props) {
    const {newSchool} = props

    return (
        <div>
            <h1>New School</h1>

            <ul>
                {
                    newSchool.map((newSchool, i) => {
                        return (
                            <li>
                                <a href={`/newschool/${i}`}>{newSchool.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = NewIndex;