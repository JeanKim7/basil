import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'





export default function Home (){


    
    
    
    const navigate = useNavigate()
    
    const [trip, setTrip] = useState({
        tripName: '',
        location: "",
        startDate: "",
        endDate: ""
        }
    )

    const [POIList, setPOIList] = useState([])


    const handleInputChange = (event) => {
        setTrip({...trip, [event.target.name]:event.target.value})
    }

    const handleAddClick =() => {
        setPOIList([...POIList,{name: "", description: ""}])
    }
    
    const handleInputChangePOI = () =>{
        const value = e.target.value
        const onChangePOIList = [...POIList]
        onChangePOIList[i].name = value
    }
    
    const handleDelete=(i) => {
        const deletePOI = [...POIList]
        deletePOI.splice(i,1)
        setPOIList(deletePOI)
    }

    const handleSearch=()=>{

    }



    return (
        <>

            <h1 className = "text-center my-3">Create a Trip</h1>
            <Card>
                <Form>
                <Form.Label htmlFor="tripName">Name of Your Trip</Form.Label> 
                    <Form.Control name="tripName" placeholder="Enter a name for your trip" value= {trip.tripName} onChange={handleInputChange} />

                    <Form.Label htmlFor="location">City</Form.Label> 
                    <Form.Control name="location" placeholder="Enter the city you are visiting" value= {trip.location} onChange={handleInputChange} />

                    <Form.Label htmlFor="startDate">Start Date</Form.Label>
                    <Form.Control name="startDate" placeholder="Enter the start date of your trip" value= {trip.startDate} onChange={handleInputChange} />

                    <Form.Label htmlFor="endDate">End Date</Form.Label>
                    <Form.Control name="endDate" placeholder="Enter the end date of your trip" value= {trip.endDate} onChange={handleInputChange} />
                    <Button onClick={handleAddClick}>Add an Itinerary Item</Button>
                    <Button onClick={() => handleSearch()}>Search for Points of Interest</Button>
                    {
                        POIList.map((val,i) =>
                            <Container>
                                <h3>Add an Itinerary Item</h3>
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control name="name" placeholder="Enter the name of the place of interest" value = {val.name} onChange={(e)=>handleInputChangePOI(e,i)} />
                                
                                <Form.Label htmlFor="description">Description</Form.Label>
                                <Form.Control name="description" placeholder="Enter a description of the place of interest" value = {val.name} onChange={(e)=>handleInputChangePOI(e,i)} />
                                <Button onClick={()=>handleDelete(i)}>Delete this itinerary item</Button>
                                

                            </Container>
                    )}
                </Form>
            </Card>
        </>
    )
}