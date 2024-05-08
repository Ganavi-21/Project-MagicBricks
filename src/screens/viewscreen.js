import View_detail from "../components/nscreen";
import More_Details from "../components/details";
import Nav2 from "../components/navbar2";
import BasicExample  from '../components/navbar';
import MediaCard from "../components/property";
import Advice from "../components/advice"; 
import Footer from '../components/footer';

const View =()=>{
    return(
        <div>
            <BasicExample></BasicExample>
            <Nav2></Nav2>
            <View_detail></View_detail>
            <More_Details></More_Details>
            <Advice></Advice>
            <MediaCard></MediaCard>
            <Footer></Footer>
        </div>
    )
}

export default View;