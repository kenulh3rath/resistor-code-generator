'use client'

import React, { useState } from "react";
import clsx from "clsx";

type color = {
    color: string
    code: string
    value?: number
}

const band_colors:color[] = [
    {
        value: 0,
        color: 'black',
        code: '#000000',
    },
    {
        value: 1,
        color: 'brown',
        code: '#804000',
    },
    {
        value: 2,
        color: 'red',
        code: '#ff0000',
    },
    {
        value: 3,
        color: 'orange',
        code: '#ff8000',
    },
    {
        value: 4,
        color: 'yellow',
        code: '#ffff00',
    },
    {
        value: 5,
        color: 'green',
        code: '#00ff00',
    },
    {
        value: 6,
        color: 'blue',
        code: '#0000ff',
    },
    {
        value: 7,
        color: 'violet',
        code: '#8000ff',
    },
    {
        value: 8,
        color: 'gray',
        code: '#808080',
    },
    {
        value: 9,
        color: 'white',
        code: '#ffffff',
    },
]

const multiplier_colors:color[] = [
    {
        value: 1,
        color: 'black',
        code: '#000000',
    },
    {
        value: 10,
        color: 'brown',
        code: '#804000',
    },
    {
        value: 100,
        color: 'red',
        code: '#ff0000',
    },
    {
        value: 1000,
        color: 'orange',
        code: '#ff8000',
    },
    {
        value: 10000,
        color: 'yellow',
        code: '#ffff00',
    },
    {
        value: 100000,
        color: 'green',
        code: '#00ff00',
    },
    {
        value: 1000000,
        color: 'blue',
        code: '#0000ff',
    },
    {
        value: 10000000,
        color: 'violet',
        code: '#8000ff',
    },
    {
        value: 100000000,
        color: 'gray',
        code: '#808080',
    },
    {
        value: 1000000000,
        color: 'white',
        code: '#ffffff',
    },
]

const tolerance_colors:color[] = [
    {
        value: 1,
        color: 'brown',
        code: '#804000',
    },
    {
        value: 2,
        color: 'red',
        code: '#ff0000',
    },
    {
        value: 3,
        color: 'orange',
        code: '#ff8000',
    },
    {
        value: 4,
        color: 'yellow',
        code: '#ffff00',
    },
    {
        value: 0.5,
        color: 'green',
        code: '#00ff00',
    },
    {
        value: 0.25,
        color: 'blue',
        code: '#0000ff',
    },
    {
        value: 0.1,
        color: 'violet',
        code: '#8000ff',
    },
    {
        value: 0.05,
        color: 'Gray',
        code: '#808080',
    },
    {
        value: 5,
        color: 'gold',
        code: '#ffd700',
    },
    {
        value: 10,
        color: 'silver',
        code: '#c0c0c0',
    },
]

const ppm_colors:color[] = [
    {
        color: 'red',
        code: '#ff0000',
    },
    {
        color: 'orange',
        code: '#ff8000',
    },
    {
        color: 'yellow',
        code: '#ffff00',
    },
    {
        color: 'gray',
        code: '#808080',
    },
    {
        color: 'brown',
        code: '#804000',
    },
    {
        color: 'violet',
        code: '#8000ff',
    },
]

const index = () => {

    const [band1, setBand1] = useState<color>(band_colors[1])
    const [band2, setBand2] = useState<color>(band_colors[2])
    const [band3, setBand3] = useState<color>(band_colors[3])
    const [band4, setBand4] = useState<color>(multiplier_colors[2])
    const [band5, setBand5] = useState<color>(tolerance_colors[0])
    const [band6, setBand6] = useState(ppm_colors[0].color)


    return (
        <div>
            <div className="flex items-center">

                <div className="flex z-10 border border-slate-700 rounded-3xl">
                    <div className={'w-10 h-40 bg-amber-200 rounded-l-3xl'}/>
                    <div className={clsx(`w-10 h-40 border-x border-slate-500`)} style={{backgroundColor: band1.color}}/>  {/*Code*/}
                    <div className={'w-10 h-40 bg-amber-200 rounded-r-3xl'}/>
                </div>

                <div className="flex z-40 border border-y-slate-700">
                    <div className={'w-5 h-20 bg-amber-200'}/>
                    <div className={'w-10 h-20 border-x border-slate-500'} style={{backgroundColor: band2.color}}/>  {/*Code*/}
                    <div className={'w-5 h-20 bg-amber-200'}/>
                    <div className={'w-10 h-20 border-x border-slate-500'} style={{backgroundColor: band3.color}}/>  {/*Code*/}
                    <div className={'w-5 h-20 bg-amber-200'}/>
                    <div className={'w-10 h-20 border-x border-slate-500'} style={{backgroundColor: band4.color}}/>  {/*Code*/}
                    <div className={'w-5 h-20 bg-amber-200'}/>
                    <div className={'w-10 h-20 border-x border-slate-500'} style={{backgroundColor: band5.color}}/>  {/*Code*/}
                    <div className={'w-10 h-20 bg-amber-200'}/>
                </div>

                <div className="flex z-10 border border-slate-700 rounded-3xl">
                    <div className={'w-10 h-40 bg-amber-200 rounded-l-3xl'}/>
                    <div className={'w-10 h-40 border-x border-slate-500'} style={{backgroundColor: band6}}/>  {/*Code*/}
                    <div className={'w-10 h-40 bg-amber-200 rounded-r-3xl'}/>
                </div>

            </div>

            <div className="flex flex-col gap-2 w-fit">

                {/*Band 1*/}
                <div className="flex gap-2 items-center w-fit">

                    <label htmlFor="band1">
                        Band 1
                    </label>

                    <select
                        name={'band1'}
                        className={'p-2 rounded-xl bg-white border border-slate-200'}
                        onChange={(e) =>
                            setBand1(
                                band_colors[parseInt(e.target.value)]
                            )
                        }
                        value={band1.value}
                    >
                        {band_colors.map((color, index) => (
                            <option
                                key={index}
                                value={index}
                                style={{backgroundColor: color.color}}
                            >
                                {color.color}
                            </option>
                        ))}

                    </select>

                </div>

                {/*Band 2*/}
                <div className="flex gap-2 items-center w-fit">

                    <label htmlFor="band1">
                        Band 2
                    </label>

                    <select
                        name={'band1'}
                        className={'p-2 rounded-xl bg-white border border-slate-200'}
                        onChange={(e) =>
                            setBand2(
                                band_colors[parseInt(e.target.value)]
                            )
                        }
                        value={band2.value}
                    >
                        {band_colors.map((color, index) => (
                            <option
                                key={index}
                                value={index}
                                style={{backgroundColor: color.color}}
                            >
                                {color.color}
                            </option>
                        ))}

                    </select>

                </div>

                {/*Band 3*/}
                <div className="flex gap-2 items-center w-fit">

                    <label htmlFor="band1">
                        Band 3
                    </label>

                    <select
                        name={'band1'}
                        className={'p-2 rounded-xl bg-white border border-slate-200'}
                        onChange={(e) =>
                            setBand3(
                                band_colors[parseInt(e.target.value)]
                            )
                        }
                        value={band3.value}
                    >
                        {band_colors.map((color, index) => (
                            <option
                                key={index}
                                value={index}
                                style={{backgroundColor: color.color}}
                            >
                                {color.color}
                            </option>
                        ))}

                    </select>

                </div>

                {/*multiplier*/}
                <div className="flex gap-2 items-center w-fit">

                    <label htmlFor="band1">
                        Multiplier Band
                    </label>

                    <select
                        name={'band1'}
                        className={'p-2 rounded-xl bg-white border border-slate-200'}
                        onChange={(e) =>
                            setBand4(
                                multiplier_colors[parseInt(e.target.value)]
                            )
                        }
                        value={band4.value}
                    >
                        {multiplier_colors.map((color, index) => (
                            <option
                                key={index}
                                value={index}
                                style={{backgroundColor: color.color}}
                            >
                                {color.color}
                            </option>
                        ))}

                    </select>

                </div>

                {/*tolerance*/}
                <div className="flex gap-2 items-center w-fit">

                    <label htmlFor="band1">
                        Tolerance Band
                    </label>

                    <select
                        name={'band1'}
                        className={'p-2 rounded-xl bg-white border border-slate-200'}
                        onChange={(e) =>
                            setBand5(
                                tolerance_colors[parseInt(e.target.value)]
                            )
                        }
                        value={band5.value}
                    >
                        {tolerance_colors.map((color, index) => (
                            <option
                                key={index}
                                value={index}
                                style={{backgroundColor: color.color}}
                            >
                                {color.color}
                            </option>
                        ))}

                    </select>

                </div>

                {/*ppm*/}
                <div className="flex gap-2 items-center w-fit">

                    <label htmlFor="band1">
                        PPM Band
                    </label>

                    <select
                        name={'band1'}
                        className={'p-2 rounded-xl bg-white border border-slate-200'}
                        onChange={(e) =>
                            setBand6(
                                band_colors[parseInt(e.target.value)].color
                            )
                        }
                    >
                        {band_colors.map((color, index) => (
                            <option
                                key={index}
                                value={index}
                                style={{backgroundColor: color.color}}
                            >
                                {color.color}
                            </option>
                        ))}

                    </select>

                </div>

            </div>

            {/*Resistance*/}
            <div className="">
                <p>
                    Resistance:
                    {
                        (((band1.value! * 100) + (band2.value! * 10) + band3.value!) * band4.value!) / 1000
                    }
                </p>

                <p>
                    Minimum Tolerance:
                    {
                        (((band1.value! * 100) + (band2.value! * 10) + band3.value!) * band4.value!) * (1 - (band5.value! / 1000))
                    }

                </p>

                <p>
                    Maximum Tolerance:
                    {
                        (((band1.value! * 100) + (band2.value! * 10) + band3.value!) * band4.value!) * (1 + (band5.value! / 1000))
                    }
                </p>

            </div>


        </div>
    )
}

export default index