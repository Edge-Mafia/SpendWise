import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import PieChart from "./PieChart"
import { RandomData } from "@/transaction-sample.js"
import { ArrowRightIcon } from "lucide-react"



// const randomArr: customArray = ["di", 1]; 


// @ts-ignore
const DashboardDisplayPage = ({ account, data }: {
    data: RandomData[]
}) => {
    const chartData = {};
    data.map(i => {
        // @ts-ignore
        chartData[i.category] = i.transaction;
    })
    return (
        <main className="bg-zinc-900 text-white flex ">
            <div className="left flex-1 p-2 md:pe-10 ">
                <Card className="bg-zinc-700 border-0 p-5 text-white">
                    <CardHeader>
                        <CardTitle>Welcome {account[0].name}</CardTitle>
                        <CardDescription className="font-semibold">Account Balance (Current): {account[0].balances.current}</CardDescription>
                        <CardDescription className="font-semibold">Account Balance (Available): {account[0].balances.available}</CardDescription>
                        <CardDescription className="font-semibold">Account Type : {account[0].subtype}</CardDescription>
                    </CardHeader>
                    <CardContent></CardContent>
                    <CardFooter></CardFooter>
                </Card>

                <div className="p-2">
                    <div className="header flex justify-between p-1">
                        <p className="p-1">Recent Updates</p>

                       
                    </div>
                    <Table className="">
                        <TableHeader>
                            <TableRow className="hover:bg-zinc-900">
                                <TableHead className="w-[100px]">Invoice</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Eatout</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right">$28.34</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">INV002</TableCell>
                                <TableCell>Groceries</TableCell>
                                <TableCell>Digital</TableCell>
                                <TableCell className="text-right">$72.10</TableCell>
                            </TableRow> */}

                            {data.map((item) => (
                                <>
                                    <TableRow>
                                        <TableCell className="font-medium">{item.name}</TableCell>
                                        <TableCell>{item.category}</TableCell>
                                        <TableCell>{item.method}</TableCell>
                                        <TableCell className="flex justify-center items-center">{item.transaction} 
                                        <span className="ps-2">
                                            <Dialog>
                                                <DialogTrigger>
                                                    {<ArrowRightIcon />}
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>{item.name}</DialogTitle>
                                                        <DialogDescription>
                                                        <p><span className="font-bold">Merchant Name:</span> {item.name}</p>
                                                        <p><span className="font-bold">Transaction Date:</span> {item.date}</p>
                                                        <p><span className="font-bold">Merchant Phone Number:</span> {item.phone}</p>
                                                        <p><span className="font-bold">Transaction Money:</span> {item.transaction}</p>
                                                        <p><span className="font-bold">Transaction Category:</span> {item.category}</p>
                                                        <p><span className="font-bold">Transaction Method:</span> {item.method}</p>
                                                        <p><span className="font-bold">Place of Transaction:</span> {item.city}, {item.country}, {item.postalZip}</p>
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                </DialogContent>
                                            </Dialog>    
                                        </span></TableCell>
                                    </TableRow>
                                </>
                            ))}

                        </TableBody>
                    </Table>

                    <div className="flex justify-center pt-10">
                        <Drawer>
                            <DrawerTrigger className="bg-white text-black p-2 px-3 rounded-lg font-semibold hover:bg-slate-200">Analytics</DrawerTrigger>
                            <DrawerContent>
                                <DrawerClose className="ms-full w-full flex flex-row-reverse p-4 pt-0">
                                    <Button variant="outline">X</Button>
                                </DrawerClose>
                                <DrawerHeader>
                                    <DrawerTitle>Analytics</DrawerTitle>
                                    <DrawerDescription>All the analytical data shown here.
                                        {/* @ts-ignore */}
                                        {<PieChart chartData={chartData} />}
                                    </DrawerDescription>
                                </DrawerHeader>
                                <DrawerFooter>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </div>



                </div>
            </div>
        </main>
    )
}

export default DashboardDisplayPage