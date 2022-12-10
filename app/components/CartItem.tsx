"use client"
import React, { useState } from "react";
import { Drawer, Button } from "antd";

const CartItem = ({ icon }: { icon: React.ReactNode }) => {
    const [visible, setVisible] = useState(false);
    return (
        <nav>
            <button onClick={() => setVisible(true)}
            >
                {icon}
            </button>

            <Drawer
                title="CART"
                placement="right"
                onClose={() => setVisible(false)}
                open={visible}
            >
                <div className="flex w-full h-screen justify-center items-center">
                    <div className="uppercase">
                        your cart is empy
                    </div>
                </div>
            </Drawer>

        </nav>
    );
};
export default CartItem;