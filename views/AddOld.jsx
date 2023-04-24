const React = require('react')

function AddOld() {
    return (
        <div>
            <h1>Add Old School Player</h1>
            <form action="/oldschool" method="POST">
                Name: <input type="text" name="name" />
                <br />
                <br />

                Team: <input type="text" name="team" />
                <br />
                <br />

                Number of MVPs: <input type="number" name="numOfMVPs" />
                <br />
                <br />

                Champion: <input type="checkbox" name="champion" />
                <br />
                <br />

                <input type="submit" name="" value="Add Old School Player" />
            </form>
        </div>
    )
}

module.exports = AddOld;