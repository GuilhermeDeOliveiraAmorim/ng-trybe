import { Badge, Td, Tr } from "@chakra-ui/react";
import React from "react";

interface IUser {
    picture: string;
    id: string;
    name: string;
}

interface ITransaction {
    id: string;
    user: IUser;
    type: string;
    value: number;
    createdAt: string;
}

function Transaction(props: ITransaction) {

    const { id, user, type, value, createdAt } = props;

    return (
        <Tr key={id}>
            <Td>
                <img className="h-20" src={user.picture} alt={user.name} />
            </Td>
            <Td>{user.name}</Td>
            <Td><Badge colorScheme={type === "cash-in" ? 'green' : 'red'} shadow={'base'} rounded={'md'}>{type}</Badge> </Td>
            <Td isNumeric>{value}</Td>
            <Td>{createdAt}</Td>
        </Tr>
    )
}

export { Transaction };