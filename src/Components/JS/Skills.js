import '../CSS/Content.css'
export default function Skills(props) {
    return (

        <div className='skill-box'>

            <div className='skill-image'>
                <img src={process.env.PUBLIC_URL + props.image}/>
            </div>

            {<div className='skill-text'>
                {props.text}
            </div>}

        </div>

    )

}