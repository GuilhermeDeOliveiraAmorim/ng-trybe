import { Button, Flex, FormControl, Heading, Image, Input, Stack, Td, Text, Tr } from "@chakra-ui/react";
import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

interface IUser {
    picture: string;
    id: string;
    name: string;
}

function CardUser(props: IUser) {
    const { id, name, picture } = props;

    const [money, setMoney] = useState();

    function sendMoney(e: any) {
        console.log(e);
        setMoney(e);
        console.log(id, name, money);
    }

    return (
        <div>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                backgroundColor={"gray.100"}
            >
                <img src={picture} alt={name} className="cover h-28 w-24" />
                <Stack>
                    <CardBody>
                        <Flex flexDirection="column">
                            <Heading size='md'>{name}</Heading>
                            <Flex gap={5}>
                                <Input id={id} placeholder="Valor" backgroundColor={"white"} type='number' />
                                <Button
                                    id={id}
                                    colorScheme='teal'
                                    variant='outline'
                                    onClick={() => sendMoney(document.getElementsByName(id)[0])}
                                >
                                    cash-in
                                </Button>
                            </Flex>
                        </Flex>
                    </CardBody>
                </Stack>
            </Card>
        </div >
    )
}

export { CardUser };