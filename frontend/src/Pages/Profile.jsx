import React, { useEffect, useState } from 'react'

import Service from '../utils/http'
import { Avatar, Center, Stack, Text } from '@mantine/core';

const service = new Service();

export default function Profile() {
    
    const [ profileData, setProfileData ] = useState( "null" )
    async function getProfileData(){
        let data = await service.get( "user/me");
        setProfileData( data );
        console.log( data ); //only to check
    }

    useEffect( () =>{
        getProfileData();
    }, [] )

    return (
        <div>
            <Center>
                <Stack>
                <Avatar size="xl" src={profileData?.avatar} alt="it's me" />
                <Text size="xl" fw={700}>{profileData?.name}</Text>
                <Text c="dimmed">{profileData?.email}</Text>
                <Text ><strong>User ID: </strong>{profileData?._id} </Text>
                </Stack>
            </Center>
            

        </div>
    )
}
