import React from "react";

interface IUser {
    id: string;
    name: string;
    picture: string;
}

interface IMe {
    me: IUser;
}

function Perfil(props: IMe) {

    const { me } = props;

    return (
        <div key={me.id} className="flex justify-center items-center flex-col">
            <img
                src={me.picture}
                alt=""
                className="rounded-full w-32 h-32"
            />
            <h2 className="text-white">{me.name}</h2>
        </div>
    )
}

export { Perfil };