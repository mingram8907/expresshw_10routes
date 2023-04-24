const React = require('react')

function AddNew() {
    return (
        <div>
            <h1>Add New School Player</h1>
            <form action="/newschool" method="POST">
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

                <input type="submit" name="" value="Add New School Player" />
            </form>
        </div>
    )
}

module.exports = AddNew;