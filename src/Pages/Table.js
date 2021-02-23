import React from 'react'
import './TableElements.css'

const Table = () => {
    return (
        <>
            <h1>Projects</h1>
            <table>
                <tbody><tr>
                <th>Name</th>
                <th>Details</th>
                <th>Year</th>
                </tr>
                <tr>
                <td> <a href="https://github.com/ucsb-cs48-w20/gauchoshare">Gauchoshare</a> </td>
                <td>This project is about designing a platform for students to sell or buy used items around the campus</td>
                <td>2019</td>
                </tr>
                <tr>
                <td><a href="https://www.tensorflow.org/tutorials/images/classification">Picture classify</a></td>
                <td>This project is about using machine learning tools to classify pictures</td>
                <td>2020</td>
                </tr>
                <tr>
                <td><a href="https://docs.google.com/document/d/1PZMaZ_mXKCcDQSpxNudYxnPqmu_KCJ50msjz3te9uUk/edit?usp=sharing">User manual</a></td>
                <td>This is the user manual for the gauchoshare app</td>
                <td>2019</td>
                </tr>
                </tbody>
            </table>
      </>
    )
}

export default Table
