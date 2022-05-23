import data from '../../data';
import { useState } from 'react';
import Footer from '../Footer/Footer';

function MainPage(){

    let [shoes] = useState(data)

    return (
        <>
        <div className="main-bg"></div>
        <div className="container">
            <div className="row">
                {/* <Card shoes={shoes[0]} i={1}></Card>
                <Card shoes={shoes[1]} i={2}></Card>
                <Card shoes={shoes[2]} i={3}></Card> */}
                {
                shoes.map((a, i)=>{
                    return(
                    <Card shoes={shoes[i]} i={i}></Card>
                    )
                })
                }
            </div>
            <Footer/>
        </div>
    </>
    )
};

function Card(props){
    return(
        <div className="col-md-4">
            <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1) +".jpg"} width="80%" />
                <h4>{props.shoes.title}</h4>
                <p>{props.shoes.content}</p>
                <p>{props.shoes.price}</p>
        </div> 
    )
}

export default MainPage;