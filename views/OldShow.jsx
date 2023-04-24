const React = require('react');


function OldShow(props) {
    const {oldSchool} = props
    
    return (
        <div>
            <h1>Old School</h1>
            <h3>{oldSchool.name}</h3>
            <p>{oldSchool.name} was a legend for the {oldSchool.team} winning MVP {oldSchool.numOfMVPs} times.
                {oldSchool.champion
                ? ' And of course he was a champion.'
                : 'He unfortunately did not win a title.'}
            </p>
        </div>
    )
}


module.exports = OldShow;