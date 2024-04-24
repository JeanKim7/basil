import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { TripFormDataType } from '../Types';

type Props = {}

export default function CreateTrip({}: Props) {

    
      
    
    const navigate = useNavigate()
    
    const [trip, setTrip] = useState<TripFormDataType>({
        tripName: "",
        location: "",
        startDate: "",
        endDate: ""
        }
    )
    const [POI, setPOI] = useState()

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTrip({...trip, [event.target.name]:event.target.value})
    }

    return (
        <>
            <h1 className = "text-center my-3">Create a Trip</h1>
            <Card>
                <Form>
                    <Form.Label htmlFor="tripName">Name of Your Trip</Form.Label> 
                    <Form.Control name="tripName" placeholder="Enter a name for your trip" value= {trip.tripName} onChange={handleInputChange} />

                    <Form.Label htmlFor="city">City</Form.Label> 
                    <Form.Control name="city" placeholder="Enter the city you are visiting" value= {trip.location} onChange={handleInputChange} />

                    <Form.Label htmlFor="startDate">Start Date</Form.Label>
                    <Form.Control name="startDate" placeholder="Enter the start date of your trip" value= {trip.startDate} onChange={handleInputChange} />

                    <Form.Label htmlFor="endDate">End Date</Form.Label>
                    <Form.Control name="endDate" placeholder="Enter the end date of your trip" value= {trip.endDate} onChange={handleInputChange} />

                </Form>
            </Card>
        </>
    )
}
