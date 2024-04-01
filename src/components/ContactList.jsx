import {SearchBox} from "./SearchBox";
import {useSelector} from "react-redux";
import {Carousel} from "react-bootstrap";

export const ContactList = () => {

    const contactList = useSelector(state => state.contactList);
    const searchString = useSelector(state=>state.searchString);

    let rsContact = contactList.filter((item)=>item.name.includes(searchString));

    return (
        <div>
            <SearchBox />
            <hr/>
            <Carousel data-bs-theme="dark" className="ContactCrousel">
            {rsContact.map((item)=>(
                <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://p7.hiclipart.com/preview/691/765/226/computer-icons-person-anonymous.jpg"
                      alt="Second slide"
                    />
                    <Carousel.Caption className="CouselCaption">
                      <h5 className="InfoItem">{item.name}</h5>
                      <p className="InfoItem">{item.phoneNumber}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
            </Carousel>
        </div>
    )
}