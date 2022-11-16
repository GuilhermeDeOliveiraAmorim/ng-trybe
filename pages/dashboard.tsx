import { useState, useEffect } from "react";
import * as React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableContainer,
	FormControl,
	Input,
	Select,
	Button,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

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

const me = { picture: "https://avatars.githubusercontent.com/u/5620529?v=4", id: "f", name: "Guilherme Amorim" };

export default function Dashboard() {
	const router = useRouter();

	const [balance, setBalance] = useState(100);
	const [date, setDate] = useState(new Date());

	async function logout() {
		router.push(`/login`);
	}

	const [users, setUsers] = useState<IUser[]>([]);
	const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		setUsers(arrUsers)
	}, []);

	useEffect(() => {
		setFilteredUsers(users.filter(user => user.name.includes(search)))
	}, [search]);

	const state = {
		options: {
			chart: {
				id: "basic-bar",
			},
			xaxis: {
				categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
			},
			fill: {
				colors: ["#581C87", "#E91E63", "#9C27B0"],
			},
		},
		series: [
			{
				name: "valores",
				data: [
					100, 80, 120, 50, 120, 123, 135, 70, 75, 80, 90, 78, 120, 210, 120,
					50,
				],
			},
		],
	};

	return (
		<div className="flex flex-row">
			<div className="w-1/6 h-screen bg-purple-900 p-4 flex flex-col justify-between fixed">
				<div className="flex justify-center items-center flex-col">
					<img
						src={me.picture}
						alt=""
						className="rounded-full w-32 h-32"
					/>
					<h2 className="text-white">{me.name}</h2>
				</div>
				<button
					className="w-full p-4 bg-black text-white hover:bg-black-900 rounded-2xl"
					onClick={logout}
				>
					Sair
				</button>
			</div>
			<div className="w-1/6"></div>
			<div className="w-5/6 flex flex-col gap-4 p-4">
				<div className="bg-black-900 p-4 rounded-2xl">
					<span className="text-white text-lg font-black">Balance: </span>
					<span className="text-black-400 text-lg font-black">{balance}</span>
				</div>
				<div>
					<div className="bg-black-900 p-4 rounded-tl-2xl rounded-tr-2xl">
						<input
							type="text"
							className="p-2 rounded-xl"
							placeholder="Buscar usuário"
							onChange={e => setSearch(e.target.value)}
							value={search}
						/>
					</div>
					<div className="bg-black-900 pl-1 pr-1 pb-1">
						<TableContainer className="bg-white">
							<Table variant="striped" colorScheme="gray">
								{search.length > 0 ? (
									<Tbody>
										{filteredUsers.map(user => {
											return (
												<Tr key={user.id}>
													<Td>
														<img className="h-20" src={user.picture} alt={user.name} />
													</Td>
													<Td>{user.name}</Td>
													<Td>
														<FormControl>
															<Input placeholder="Valor" backgroundColor={"white"} type='number' />
														</FormControl>
													</Td>
													<Td>
														<Button
															id={user.id}
															loadingText='Enviar'
															colorScheme='teal'
															variant='outline'
														>
															Enviar
														</Button>
													</Td>
												</Tr>
											)
										})}
									</Tbody>) : (
									<Tbody>
										{users.map(user => {
											return (
												<Tr key={user.id}>
													<Td>
														<img className="h-20" src={user.picture} alt={user.name} />
													</Td>
													<Td>{user.name}</Td>
													<Td>
														<FormControl>
															<Input placeholder="Valor" backgroundColor={"white"} type='number' />
														</FormControl>
													</Td>
													<Td>
														<Button
															id={user.id}
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
										)}
									</Tbody>
								)}
							</Table>
						</TableContainer>
					</div>
				</div>
				<div>
					<div className="bg-black-900 p-4 rounded-tl-2xl rounded-tr-2xl">
						<span className="text-white text-lg font-black">
							Histórico do saldo
						</span>
					</div>
					<div className="bg-black-900 p-4 rounded-bl-2xl rounded-br-2xl">
						<ApexCharts
							options={state.options}
							series={state.series}
							type="bar"
							width="100%"
							height="200px"
						/>
					</div>
				</div>
				<div>
					<div className="bg-black-900 p-4 rounded-tl-2xl rounded-tr-2xl flex justify-between items-center gap-4">
						<FormControl>
							<Input
								type="text"
								backgroundColor={"white"}
								placeholder={"Buscar"}
							/>
						</FormControl>
						<FormControl>
							<Select placeholder="Select type" backgroundColor={"white"}>
								<option>cash-in</option>
								<option>cash-out</option>
							</Select>
						</FormControl>
						<SingleDatepicker
							propsConfigs={{
								dateNavBtnProps: {
									colorScheme: "black",
									variant: "solid",
								},
								dayOfMonthBtnProps: {
									defaultBtnProps: {
										borderColor: "#212529",
										_hover: {
											background: "#E9ECEF",
											color: "#212529",
										},
									},
									isInRangeBtnProps: {
										color: "green",
									},
									selectedBtnProps: {
										background: "#E9ECEF",
										color: "#212529",
									},
									todayBtnProps: {
										background: "#212529",
									},
								},
								inputProps: {
									size: "sm",
								},
								popoverCompProps: {
									popoverContentProps: {
										background: "#212529",
										color: "#F8F9FA",
									},
								},
							}}
							name="date-input"
							date={date}
							onDateChange={setDate}
						/>
					</div>
					<div className="bg-black-900 pl-1 pr-1 pb-1">
						<TableContainer className="bg-white">
							<Table variant="striped" colorScheme="gray">
								<Thead>
									<Tr>
										<Th>To convert</Th>
										<Th>into</Th>
										<Th isNumeric>multiply by</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td>inches</Td>
										<Td>millimetres (mm)</Td>
										<Td isNumeric>25.4</Td>
									</Tr>
									<Tr>
										<Td>feet</Td>
										<Td>centimetres (cm)</Td>
										<Td isNumeric>30.48</Td>
									</Tr>
									<Tr>
										<Td>yards</Td>
										<Td>metres (m)</Td>
										<Td isNumeric>0.91444</Td>
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
					</div>
				</div>
			</div>
		</div >
	);
}
