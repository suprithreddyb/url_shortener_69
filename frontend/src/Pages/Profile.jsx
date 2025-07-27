import React, { useEffect, useState } from 'react'

import Service from '../utils/http'
import { Avatar, Center, Container, Stack, Text } from '@mantine/core';

const service = new Service();

export default function Profile() {

    const [profileData, setProfileData] = useState("null")
    const [date, setDate] = useState(new Date(""))
    async function getProfileData() {
        let data = await service.get("user/me");
        setProfileData(data);
        setDate(new Date(data?.createdAt));
        console.log(data); //only to check
    }

    useEffect(() => {
        getProfileData();
    }, [])

    const aSrc = profileData ? profileData.avatar : undefined;

    return (
        <div>
            <Container>
                <Stack h={300} align="center" justify="center" gap="md">
                    <Avatar size="xl" src={aSrc} alt="it's me" />
                    <Text  size={"xl"} fw={700}>{profileData?.name}</Text>
                    <Text c={"dimmed"}>{profileData?.email}</Text>
                    <Text ><strong>User ID: </strong>{profileData?._id} </Text>
                    <Text> <strong>Account Created: </strong>{date.toLocaleDateString()}, {date.toLocaleTimeString()}</Text>
                </Stack>
            </Container>


        </div>
    )
}
