"use client"
import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { AiOutlineClose } from "react-icons/ai";

const SearchItem = ({ icon }: { icon: React.ReactNode }) => {
    const [visible, setVisible] = useState(false);
    const [height, setHeight] = useState(170);
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        if (searchText.length > 0) {
            setHeight(470)
        } else {
            setHeight(170)
        }
    }, [searchText])


    return (
        <div>
            <button onClick={() => setVisible(true)}
            >
                {icon}
            </button>

            <Drawer
                title=""
                placement="top"
                maskClosable={true}
                open={visible}
                rootClassName="py-10 absolute z-0 h-auto translate-y-18"
                height={height}
            >
                <>
                    <div className="flex justify-center ">
                        <div className="grid grid-cols-8 w-full max-w-7xl  pt-8">
                            <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Search..." className="uppercase placeholder-black text-2xl w-9/12 outline-none  col-span-7" />
                            <button className="w-3/12 " onClick={() => setVisible(false)}><AiOutlineClose /></button>
                        </div>
                    </div>

                    <div className={`${searchText.length == 0 ? 'hidden' : 'flex'} py-20`}>
                        <div className="grid grid-cols-10 w-full gap-5">
                            <div className="col-span-8 py-4">
                                <div>Products</div>
                                <hr />

                                <div className="py-4">No results could be found</div>
                            </div>

                            <div className="col-span-2 py-4">
                                <div>Journal</div>
                                <hr />
                                <div className="py-4">
                                    No results could be found
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Drawer >

        </div >
    );
};

export default SearchItem;