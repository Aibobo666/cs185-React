import React from 'react'

const Text = () => {
    return (
    <div>
        <form>
          <label htmlFor="fname">First name: </label><br />
          <input type="text" id="fname" name="fname" /><br />
          <label htmlFor="lname">Last name: </label><br />
          <input type="text" id="lname" name="lname" /><br />
        </form>
        <h3>Favorit Movie</h3>
        <form>
          <input type="radio" id="avengers" name="movie" defaultValue="avengers" />
          <label htmlFor="avengers">Avengers</label><br />
          <input type="radio" id="darkNight" name="movie" defaultValue="darkNight" />
          <label htmlFor="darkNight">Dark Night</label><br />
          <input type="radio" id="Tenet" name="movie" defaultValue="Tenet" />
          <label htmlFor="darkNight">Tenet</label><br /><br />
          <input type="submit" defaultValue="Done" />
        </form>
    </div>
    )
}

export default Text

