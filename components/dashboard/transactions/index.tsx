import React, { useState } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    FormControl,
    Input,
    Select,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

function Transactions() {
    const [date, setDate] = useState(new Date());

    return (
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
    )
}

export { Transactions };