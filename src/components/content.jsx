import '../App.css'
import data from '../data.js'

function Content(props){
    return(
        <div className='content'>
            <div className="left">
                <img src={props.item.imageUrl} alt="" />
            </div>
            <div className="right">
                <div className="sec0">
                    <p className='location'>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} className='google-map-link'>View on Google Maps</a>
                </div>
                <h1 className='title'>{props.item.title}</h1>
                <h4 className='date'>{props.item.startDate} - {props.item.endDate}</h4>
                <p className='description'>{props.item.description}</p>
            </div>
        </div>
    )
}


/**************/

const section = data.map(item => {
    return(
        <Content
        
        key = {item.id}
        item = {item}

        />
    )
})

function mainarea(){
    return(
        <div className='mainarea'>

         {section}
        </div>
    )
}

export default mainarea