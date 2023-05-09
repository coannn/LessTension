import React, {useState} from "react";
import Footer from './pieces/Footer'
import Box from './pieces/Box'
import Nav from './pieces/Nav'
import { useAuth } from "../authentication/AuthContext";
import CarouselMain from "./pieces/Carousel";

function MainMenu(){
    const [fname, setFirstName] = useState('');
    const [lname , setLastName] = useState('');
    const [nickName , setNickName] = useState('');
    const [appointment,setApt]=useState('');
    const [exercise,setExercise]=useState('');
    const [food,setFood]=useState('');

    const { currentUser } = useAuth();

    fetch('http://127.0.0.1:8000/Hypertension/main_menu/' + currentUser.email)
    .then(res => res.json())
    .then(data => {
        if (data) {
            setFirstName(data.data[0].first_name);
            setLastName(data.data[0].last_name);
            setNickName(data.data[0].nickname);
            setApt(data.data[1].Date);
            setFood(data.data[2].totalcalfood);
            setExercise(data.data[3].totalcalexercise);
        } else {
            console.log('Error: No enough data returned!');
        }
    })
    .catch(error => console.log({error}))

    return(
        <div>
            <Nav fname={fname} lname = {lname} nickName = {nickName}/>   
            
            <div class="boxpart">
            <Box apt= {appointment} exercise={exercise} food = {food}/>   
            </div>  
            <section id="testimonials"> 
            <CarouselMain />
            </section>  
            <Footer />
        </div>
    );

}
export default MainMenu;