// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    let data = {
        "last-update": "2023-06-08 05:34:47",
        "willing_rate": {
            "USD:ZWL ZIPIT/Bank": "4 600.00",
            "USD:ZWL Swipe": "4 600.00",
            "Black Market Sell Rate": "4 600.00",
            "Black Market Buy Rate": "4 200.00",
            "USD:ZWL OneMoney": "4 200.00",
            "USD:ZWL Ecocash": "4 200.00",
            "USD:BOND or ZWL Cash": "2 400.00",
            "USD:ZWL Bulk Auction": "4 868.52",
            "USD:ZWL RBZ Auction Rate": "3 673.77",
            "USD:ZWL Willing Buyer Willing Seller": "3 673.77",
            "Maximum Rate Businesses Can Use": "3.3",
            "USD:ZWL Mosi oa Tunya Gold Coin Rate": "4 408.53",
            "USD:ZWL eGold": "4 406.81",
            "USD:ZWL Skrill": "4 600.00",
            "USD:ZWL Bitcoin": "4 600.00",
            "USD:USD Skrill": "1.04"
        },
        "commodities": [
            {
                "Product": "All Purpose Cleaner 750ml",
                "Prices in Tuckshops USD": "$1.70",
                "Price in Supermarkets in ZWL$": "$10 820.50"
            },
            {
                "Product": "Bath soap Geisha 225g",
                "Prices in Tuckshops USD": "$0.60",
                "Price in Supermarkets in ZWL$": "$3 819.00"
            },
            {
                "Product": "Bath soap Jade 250g",
                "Prices in Tuckshops USD": "$0.60",
                "Price in Supermarkets in ZWL$": "$3 819.00"
            },
            {
                "Product": "Bath Soap Sona",
                "Prices in Tuckshops USD": "$0.50",
                "Price in Supermarkets in ZWL$": "$3 182.50"
            },
            {
                "Product": "Beans Dried 500g",
                "Prices in Tuckshops USD": "$0.75",
                "Price in Supermarkets in ZWL$": "$4 773.75"
            },
            {
                "Product": "Bleach/Jik 750ml",
                "Prices in Tuckshops USD": "$1.50",
                "Price in Supermarkets in ZWL$": "$9 547.50"
            },
            {
                "Product": "Bread Bakers Inn",
                "Prices in Tuckshops USD": "$1.00",
                "Price in Supermarkets in ZWL$": "$6 365.00"
            },
            {
                "Product": "Bread Lobels",
                "Prices in Tuckshops USD": "$1.00",
                "Price in Supermarkets in ZWL$": "$6 365.00"
            },
            {
                "Product": "Bread Proton",
                "Prices in Tuckshops USD": "$1.00",
                "Price in Supermarkets in ZWL$": "$6 365.00"
            },
            {
                "Product": "Candles 6pack 450g",
                "Prices in Tuckshops USD": "$3.20",
                "Price in Supermarkets in ZWL$": "$20 368.00"
            },
            {
                "Product": "Cereal (Cerevita) 500g",
                "Prices in Tuckshops USD": "$3.00",
                "Price in Supermarkets in ZWL$": "$19 095.00"
            },
            {
                "Product": "Cooking Oil 2l",
                "Prices in Tuckshops USD": "$3.75",
                "Price in Supermarkets in ZWL$": "$23 868.75"
            },
            {
                "Product": "Creamer 1kg",
                "Prices in Tuckshops USD": "$3.10",
                "Price in Supermarkets in ZWL$": "$19 731.50"
            },
            {
                "Product": "Diapers 50",
                "Prices in Tuckshops USD": "$6.00",
                "Price in Supermarkets in ZWL$": "$38 190.00"
            },
            {
                "Product": "Dish Washer 750ml",
                "Prices in Tuckshops USD": "$1.60",
                "Price in Supermarkets in ZWL$": "$10 184"
            },
            {
                "Product": "Drink Bally House",
                "Prices in Tuckshops USD": "$2.00",
                "Price in Supermarkets in ZWL$": "$12 730.00"
            },
            {
                "Product": "Drink Cheapest",
                "Prices in Tuckshops USD": "$1.20",
                "Price in Supermarkets in ZWL$": "$7 638.00"
            },
            {
                "Product": "Drink Mazoe Original 2l",
                "Prices in Tuckshops USD": "$2.50",
                "Price in Supermarkets in ZWL$": "$15 912.50"
            },
            {
                "Product": "Drink Mazoe Orange Crush 2l",
                "Prices in Tuckshops USD": "$2.00",
                "Price in Supermarkets in ZWL$": "$12 730.00"
            },
            {
                "Product": "Eggs 30",
                "Prices in Tuckshops USD": "$3.80",
                "Price in Supermarkets in ZWL$": "$24 187.00"
            },
            {
                "Product": "Eggs 6",
                "Prices in Tuckshops USD": "$1.00",
                "Price in Supermarkets in ZWL$": "$6 365.00"
            },
            {
                "Product": "Flour 2kg",
                "Prices in Tuckshops USD": "$1.60",
                "Price in Supermarkets in ZWL$": "$10 184.00"
            },
            {
                "Product": "Green bar",
                "Prices in Tuckshops USD": "$1.50",
                "Price in Supermarkets in ZWL$": "$9 547.50"
            },
            {
                "Product": "Jam 375ml",
                "Prices in Tuckshops USD": "$1.00",
                "Price in Supermarkets in ZWL$": "$6 365.00"
            },
            {
                "Product": "Kapenta 1KG",
                "Prices in Tuckshops USD": "$5.00",
                "Price in Supermarkets in ZWL$": "$31 825.00"
            },
            {
                "Product": "Kapenta 500g",
                "Prices in Tuckshops USD": "$3.00",
                "Price in Supermarkets in ZWL$": "$19 095.00"
            },
            {
                "Product": "Lotion/Cream Camphor 300ml",
                "Prices in Tuckshops USD": "$2.00",
                "Price in Supermarkets in ZWL$": "$12 730.00"
            },
            {
                "Product": "Macaroni 3kg",
                "Prices in Tuckshops USD": "$3.80",
                "Price in Supermarkets in ZWL$": "$24 187.00"
            },
            {
                "Product": "Margarine 500g",
                "Prices in Tuckshops USD": "$1.20",
                "Price in Supermarkets in ZWL$": "$7 638.00"
            },
            {
                "Product": "Matches pack of 10 boxes",
                "Prices in Tuckshops USD": "$0.50",
                "Price in Supermarkets in ZWL$": "$3 182.50"
            },
            {
                "Product": "Mayonnaise 750g",
                "Prices in Tuckshops USD": "$2.80",
                "Price in Supermarkets in ZWL$": "$17 822.00"
            },
            {
                "Product": "Mealie-meal 10kg",
                "Prices in Tuckshops USD": "$5.50",
                "Price in Supermarkets in ZWL$": "$35 007.50"
            },
            {
                "Product": "Mealie-meal Refined 10kg",
                "Prices in Tuckshops USD": "$6.10",
                "Price in Supermarkets in ZWL$": "$38 826.50"
            },
            {
                "Product": "Milk 1l",
                "Prices in Tuckshops USD": "$1.20",
                "Price in Supermarkets in ZWL$": "$7 638.00"
            },
            {
                "Product": "Peanut butter 375ml",
                "Prices in Tuckshops USD": "$1.00",
                "Price in Supermarkets in ZWL$": "$6 365.00"
            },
            {
                "Product": "Petroleum Jelly 300ml",
                "Prices in Tuckshops USD": "$1.00",
                "Price in Supermarkets in ZWL$": "$6 365.00"
            },
            {
                "Product": "Rice white/Long grain",
                "Prices in Tuckshops USD": "$1.60",
                "Price in Supermarkets in ZWL$": "$10 184.00"
            },
            {
                "Product": "Salt 1kg",
                "Prices in Tuckshops USD": "$0.50",
                "Price in Supermarkets in ZWL$": "$3 182.50"
            },
            {
                "Product": "Sanitary Pads 10s/8s",
                "Prices in Tuckshops USD": "$1.00",
                "Price in Supermarkets in ZWL$": "$6 365.00"
            },
            {
                "Product": "Scouring powder 500g",
                "Prices in Tuckshops USD": "$0.30",
                "Price in Supermarkets in ZWL$": "$1 909.50"
            },
            {
                "Product": "Shoe polish 100ml",
                "Prices in Tuckshops USD": "$1.00",
                "Price in Supermarkets in ZWL$": "$6 365.00"
            },
            {
                "Product": "Shoe polish 50ml",
                "Prices in Tuckshops USD": "$0.50",
                "Price in Supermarkets in ZWL$": "$3 182.50"
            },
            {
                "Product": "Soup Usavi Mix 50g",
                "Prices in Tuckshops USD": "$0.50",
                "Price in Supermarkets in ZWL$": "$3 182.50"
            },
            {
                "Product": "Stasoft Refill (500ml)",
                "Prices in Tuckshops USD": "$2.80",
                "Price in Supermarkets in ZWL$": "$17 822.00"
            },
            {
                "Product": "Sugar 2kg",
                "Prices in Tuckshops USD": "$2.10",
                "Price in Supermarkets in ZWL$": "$13 366.50"
            },
            {
                "Product": "Surface Cleaner 750ml",
                "Prices in Tuckshops USD": "$1.80",
                "Price in Supermarkets in ZWL$": "$11 457.00"
            },

            {
                "Product": "Tea 100 tea bags",
                "Prices in Tuckshops USD": "$2.00",
                "Price in Supermarkets in ZWL$": "$12 730.00"
            },
            {
                "Product": "Thai Rice 2kg",
                "Prices in Tuckshops USD": "$2.20",
                "Price in Supermarkets in ZWL$": "$14 003.00"
            },
            {
                "Product": "Tinned beans 410g",
                "Prices in Tuckshops USD": "$0.90",
                "Price in Supermarkets in ZWL$": "$5 728.50"
            },
            {
                "Product": "Tinned fish 155g",
                "Prices in Tuckshops USD": "$1.00",
                "Price in Supermarkets in ZWL$": "$6 365.00"
            },
            {
                "Product": "Tissues (Pack of 4)",
                "Prices in Tuckshops USD": "$1.00",
                "Price in Supermarkets in ZWL$": "$6 365.00"
            },
            {
                "Product": "Toilet Cleaner 500ml",
                "Prices in Tuckshops USD": "$1.80",
                "Price in Supermarkets in ZWL$": "$11 457.00"
            },
            {
                "Product": "Toothpaste 100ml",
                "Prices in Tuckshops USD": "$1.00",
                "Price in Supermarkets in ZWL$": "$6 365.00"
            },
            {
                "Product": "Washing Powder 1kg",
                "Prices in Tuckshops USD": "$2.00",
                "Price in Supermarkets in ZWL$": "$12 730.00"
            },
            {
                "Product": "Washing Powder 2kg",
                "Prices in Tuckshops USD": "$4.00",
                "Price in Supermarkets in ZWL$": "$25 460.00"
            }
        ]

    }

    res.status(200).json({ data })
}
