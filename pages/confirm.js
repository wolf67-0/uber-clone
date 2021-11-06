import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'
const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query
    const [pickupCoordinates , setPickupCoordinates ] = useState()
    const [dropoffCoordinates , setDropoffCoordinates ] = useState()

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoid29sZjY3LTAiLCJhIjoiY2t2bTcwZmd5NTdtZDMzb2tubnh5Y2QybCJ9.qdqYnfVCRMlrB8JaA51yEA",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center);
        })
    }
    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoid29sZjY3LTAiLCJhIjoiY2t2bTcwZmd5NTdtZDMzb2tubnh5Y2QybCJ9.qdqYnfVCRMlrB8JaA51yEA",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center);
        })     
    }
    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])
    
    return (
        <Wrapper>
            <Link href="/search">
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
            <Map 
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                <RideSelector />
                <ConfirmButtonBox>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonBox>

            </RideContainer>
            
        </Wrapper>
    )
}
export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const BackButton = tw.img`
h-12 w-12 px-2 py-2 mb-1 cursor-pointer 
`
const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const ConfirmButtonBox = tw.div`
text-white border-t-2
`
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`
