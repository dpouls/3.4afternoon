import React, {Component} from 'react'
import '../App.css'
class Card extends Component{
    constructor(props){
        super(props)
    }

    

    render(){
        let person = this.props.person
        return(
            <div className='card-placeholder'>
                <div id='allInfo'>
                <div className='fullName'>{person.name.first} {person.name.last}</div>
                <div className='info' >
                    <p><span>From: </span>{person.city}, {person.country}</p>
                    <p><span>Job Title: </span>{person.title}</p>
                    <p><span>Employer: </span>{person.employer}</p>
                </div>
                <div className='movies'><span>Favorite Movies:</span>
                    <ol>
                        <li>{person.favoriteMovies[0]}</li>
                        <li>{person.favoriteMovies[1]}</li>
                        <li>{person.favoriteMovies[2]}</li>
                    </ol>
                 </div>
                </div>
                <h2 id='h2'>{this.props.currentId}/25</h2>
            </div>
        )
    }
}
export default Card