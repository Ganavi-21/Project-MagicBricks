// import { React } from "react";
// import { Col, Container, Card, Badge, Row } from "react-bootstrap";
// import BedIcon from '@mui/icons-material/Bed';
// import BathtubIcon from '@mui/icons-material/Bathtub';
// import BalconyIcon from '@mui/icons-material/Balcony';
// import CastleIcon from '@mui/icons-material/Castle';
// import PersonIcon from '@mui/icons-material/Person';
// import './nscreen.css';

// const View_detail = () => {
//     return (
//         <div>
//             <Container fluid className="mx-3 mt-5" style={{ width: "25rem" }}>
//                 {/* <Container fluid className='mt-5 mx-3'> */}
//                 {/* <h1>Bangalore Property Snapshot</h1> */}
//                 <Card className="po">
//                     <h5 className="mt-2 mx-4">₹40,000 See other charges</h5>
//                     <h6 className="mx-4">2 BHK 1323 Sq-ft Flat/Apartment For Rent in Thanisandra Main Road, Bangalore</h6>
//                     <Card.Body>
//                         <div>
//                             <Card.Img className="im " src="https://media.istockphoto.com/id/1446097589/photo/looking-directly-up-at-the-skyline-of-the-financial-district-in-central-london.webp?b=1&s=170667a&w=0&k=20&c=Wh4ELq_ZcbpbBlsyPSV0tTQDkHPpiOPtKcu6cRT-gZ0=" />
//                             <span className="ico">
//                                 <span className="mx-2"><BedIcon></BedIcon>2BEDS</span>||
//                                 <span className="mx-2"><BathtubIcon></BathtubIcon>2Baths</span>||
//                                 <span className="mx-2"><BalconyIcon></BalconyIcon>2Balconies</span>||
//                                 <span className="mx-2"><CastleIcon></CastleIcon>Semi-Furnished</span>
//                             </span>
//                             <p className="carp">
//                                 Carpet Area<br />
//                                 <b>917</b><br />
//                                 sqft<br />
//                                 ₹44/sqft<br />
//                             </p>
//                             <p className="carpt">
//                                 Floor<br />
//                                 <b>16 (Out of 18 Floors)</b>
//                             </p>
//                             <p className="car">
//                                 Status<br />
//                                 <b>Immediately</b>
//                             </p>
//                             <p className="fa">
//                                 Facing<br />
//                                 <b>North</b>
//                             </p>
//                             <p className="fac">
//                                 Lifts<br />
//                                 <b>2</b>
//                             </p>
//                             <p className="faci">
//                                 Furnished Status<br />
//                                 <b>Semi-Furnished</b>
//                             </p>
//                             <p className="ag">
//                                 Age Of Construction<br />
//                                 <b>New Construction</b>
//                             </p>
//                             <div className="line"></div>
//                         </div>
//                         <p>
//                             <Card.Img className="ima" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/20/Photo_h300_w450/72437641_3_IMG-20240301-WA0014_300_450.jpg" />
//                             <Card.Img className="imp" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/20/Photo_h300_w450/72437641_6_IMG-20240404-WA0043_300_450.jpg" />
//                             <Card.Img className="imp" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/20/Photo_h300_w450/72437641_1_IMG-20240404-WA0050_300_450.jpg" />
//                         </p>
//                         <button className="own me-4">Contact Owner</button>
//                         <button className="owne ">Ask Society Name</button>
//                         <span className="one"><PersonIcon></PersonIcon>
// Last contact made 27 days ago</span>
//                     </Card.Body>
//                 </Card>
//             </Container>
//         </div>
//     );
// }

// export default View_detail;


import React, { useState } from "react";
import { Col, Container, Card, Badge, Row, Modal, Form, Button } from "react-bootstrap";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BalconyIcon from '@mui/icons-material/Balcony';
import CastleIcon from '@mui/icons-material/Castle';
import PersonIcon from '@mui/icons-material/Person';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './nscreen.css';

const ViewDetail = () => {
    const [showModal, setShowModal] = useState(false);
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleContactOwner = () => {
        setShowModal(true);
    };

    const handleWhatsappSubmit = () => {
        setShowModal(false);
    };

    const handleAgreeChange = () => {
        setAgreed(!agreed);
    };

    return (
        <div>
            <Container fluid className="mx-3 mt-5" style={{ width: "25rem" }}>
                <Card className="po">
                    <h5 className="mt-2 mx-4">₹40,000 See other charges</h5>
                    <h6 className="mx-4">2 BHK 1323 Sq-ft Flat/Apartment For Rent in Thanisandra Main Road, Bangalore</h6>
                    <Card.Body>
                        <div>
                            <Card.Img className="im " src="https://media.istockphoto.com/id/1446097589/photo/looking-directly-up-at-the-skyline-of-the-financial-district-in-central-london.webp?b=1&s=170667a&w=0&k=20&c=Wh4ELq_ZcbpbBlsyPSV0tTQDkHPpiOPtKcu6cRT-gZ0=" />
                            <span className="ico">
                                <span className="mx-2"><BedIcon></BedIcon>2BEDS</span>||
                                <span className="mx-2"><BathtubIcon></BathtubIcon>2Baths</span>||
                                <span className="mx-2"><BalconyIcon></BalconyIcon>2Balconies</span>||
                                <span className="mx-2"><CastleIcon></CastleIcon>Semi-Furnished</span>
                            </span>
                            <p className="carp">
                                Carpet Area<br />
                                <b>917</b><br />
                                sqft<br />
                                ₹44/sqft<br />
                            </p>
                            <p className="carpt">
                                Floor<br />
                                <b>16 (Out of 18 Floors)</b>
                            </p>
                            <p className="car">
                                Status<br />
                                <b>Immediately</b>
                            </p>
                            <p className="fa">
                                Facing<br />
                                <b>North</b>
                            </p>
                            <p className="fac">
                                Lifts<br />
                                <b>2</b>
                            </p>
                            <p className="faci">
                                Furnished Status<br />
                                <b>Semi-Furnished</b>
                            </p>
                            <p className="ag">
                                Age Of Construction<br />
                                <b>New Construction</b>
                            </p>
                            <div className="line"></div>
                        </div>
                        <p>
                            <Card.Img className="ima" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/20/Photo_h300_w450/72437641_3_IMG-20240301-WA0014_300_450.jpg" />
                            <Card.Img className="imp" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/20/Photo_h300_w450/72437641_6_IMG-20240404-WA0043_300_450.jpg" />
                            <Card.Img className="imp" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/20/Photo_h300_w450/72437641_1_IMG-20240404-WA0050_300_450.jpg" />
                        </p>
                        <button className="own me-4" onClick={handleContactOwner}>Contact Owner</button>
                        <button className="owne ">Ask Society Name</button>
                        <span className="one"><PersonIcon></PersonIcon>Last contact made 27 days ago</span>
                    </Card.Body>
                </Card>
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title><h5 style={{backgroundColor:"lightyellow"}}>Enter your <WhatsAppIcon/>WhatsApp No. to get Contact Details of the Owner</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Enter your details below:</p>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>WhatsApp Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter your whats app number" value={whatsappNumber} onChange={(e) => setWhatsappNumber(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="agree">
                            <Form.Check type="checkbox" label="I Agree to MagicBricks' Terms of Use" checked={agreed} onChange={handleAgreeChange} />
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="danger" disabled={!agreed} onClick={handleWhatsappSubmit}>Do Contact</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ViewDetail;

