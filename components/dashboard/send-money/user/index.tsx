import { Button, FormControl, Input, Td, Tr } from "@chakra-ui/react";
import React from "react";

interface IUser {
    picture: string;
    id: string;
    name: string;
}

function User(props: IUser) {

    const { id, name, picture } = props;

    return (
        <Tr key={id}>
            <Td>
                <img className="h-20" src={picture} alt={name} />
            </Td>
            <Td>{name}</Td>
            <Td>
                <FormControl>
                    <Input placeholder="Valor" backgroundColor={"white"} type='number' />
                </FormControl>
            </Td>
            <Td>
                <Button
                    id={id}
                    loadingText='Enviar'
                    colorScheme='teal'
                    variant='outline'
                >
                    Enviar
                </Button>
            </Td>
        </Tr>
    )
}

export { User };