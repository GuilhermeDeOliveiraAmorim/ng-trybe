import React, { useEffect, useState } from "react";
import {
    Table,
    Tbody,
    TableContainer,
} from "@chakra-ui/react";
import { User } from "./user";
import { CardUser } from "./user/card";

interface IUser {
    picture: string;
    id: string;
    name: string;
}

const arrUsers = [
    { picture: "portrait-3353699__340.jpg", id: "a", name: "Heather J. Cummings" },
    { picture: "people-875597__340.jpg", id: "b", name: "Robert B. Pursell" },
    { picture: "smile-2072907__340.jpg", id: "c", name: "Joyce J. Jones" },
    { picture: "portrait-3098319__340.jpg", id: "d", name: "Luanne M. Arnold" },
    { picture: "portrait-3292287__340.jpg", id: "e", name: "Janet T. Kruger" }
];

function SendMoney() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setUsers(arrUsers)
    }, []);

    const filteredUsers = search.length > 0 ? users.filter(user => user.name.includes(search)) : [];

    return (
        <div>
            <div className="bg-black-900 p-4 rounded-tl-2xl rounded-tr-2xl">
                <input
                    type="text"
                    className="p-2 rounded-xl w-full"
                    placeholder="Buscar usuário"
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
            </div>
            <div className="bg-black-900 pl-1 pr-1 pb-1">
                <div className="flex flex-col gap-1 pr-3 pl-3 pb-3">
                    {search.length > 0 ? (filteredUsers.map(user => {
                        return (
                            <CardUser key={user.id} id={user.id} name={user.name} picture={user.picture} />
                        )
                    })) : (users.map(user => {
                        return (
                            <CardUser key={user.id} id={user.id} name={user.name} picture={user.picture} />
                        )
                    }))}
                </div>
                {/* <TableContainer className="bg-white">
                    <Table variant="striped" colorScheme="gray">
                        {search.length > 0 ? (
                            <Tbody>
                                {filteredUsers.map(user => {
                                    return (
                                        <User key={user.id} id={user.id} name={user.name} picture={user.picture} />
                                    )
                                })}
                            </Tbody>
                        ) : (
                            <Tbody>
                                {users.map(user => {
                                    return (
                                        <User key={user.id} id={user.id} name={user.name} picture={user.picture} />
                                    )
                                })}
                            </Tbody>
                        )}
                    </Table>
                </TableContainer> */}
            </div>
        </div>
    )
}

export { SendMoney };