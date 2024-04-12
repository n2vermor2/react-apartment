import Searchbar from '../../searchbar/Searchbar';
import './homepage.scss'

function Homepage(){
    return(
        <div className="homepage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, voluptatem modi veniam suscipit rem blanditiis quaerat tenetur, expedita maiores autem neque repellat minus quas rerum ipsa inventore odit obcaecati cum.</p>
                    <Searchbar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Years of Experience</h2>
                        </div>    
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )

}

export default Homepage;