const React = require('react');


function NewShow(props) {
    const {newSchool} = props

    return (
        <div>
            <h1>New School</h1>
            <h3>{newSchool.name}</h3>
            <p>{newSchool.name} is a modern day legend currently playing for the {newSchool.team}. He has won MVP {newSchool.numOfMVPs} times.
                {newSchool.champion
                ? ' And of course he is a champion.'
                : ' He has yet to win a title.'}
            </p>
        </div>
    )
}

module.exports = NewShow;