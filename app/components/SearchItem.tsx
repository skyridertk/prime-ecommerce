"use client"
import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { SectionalTitle } from "./SectionalTitle";

const SearchItem = ({ icon }: { icon: React.ReactNode }) => {
    const [visible, setVisible] = useState(false);
    const [height, setHeight] = useState(150);
    return (
        <div>
            <button onClick={() => setVisible(true)}
            >
                {icon}
            </button>

            <Drawer
                title="SEARRCH"
                placement="top"
                onClose={() => setVisible(false)}
                open={visible}
                rootClassName="py-4 absolute z-0 h-auto"
                height={height}
            >
                <div className="py-5">
                    <div>
                        <input type="text" placeholder="Search..." className="uppercase font-bold text-2xl w-9/12 outline-none" />
                        <button className="w-3/12" onClick={() => setHeight(500)}>Close</button>
                    </div>

                    <div className='flex py-10'>
                        <div className='w-9/12 space-y-4'>
                            <div >
                                {SectionalTitle({ text: 'Products' })}
                                <hr />
                            </div>

                            <div>
                                No results could be found
                            </div>
                        </div>

                        <div className='w-3/12 space-y-4'>
                            <div>
                                {SectionalTitle({ text: 'Journal' })}
                                <hr />
                            </div>
                            <div className='py-4'>
                                No results could be found
                            </div>


                        </div>
                    </div>
                </div>
            </Drawer >

        </div >
    );
};
export default SearchItem;