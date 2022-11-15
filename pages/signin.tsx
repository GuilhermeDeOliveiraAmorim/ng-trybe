export default function Signin() {
    return (
        <div className="grid grid-cols-2">
            <div className="bg-purple-900 flex justify-center items-center h-screen bg-bg-ng bg-no-repeat bg-center bg-cover p-10">
                <div>
                    <h1 className="text-white text-[60px] font-black">A CARTEIRA DA NOVA GERAÇÃO.</h1>
                    <h2 className="text-white text-[50px]">É para todas as idades!</h2>
                </div>
            </div>
            <div className="bg-white flex justify-center items-center">
                <div className="flex flex-col gap-4 p-4 bg-purple-900">
                    <input type="text" className="p-2" />
                    <input type="password" className="p-2" />
                    <button type="submit" className="bg-black text-white p-2">
                        Cadastrar
                    </button>
                </div>
            </div>
        </div>
    )
}