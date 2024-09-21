'use client'

import React, { useState } from "react";
import clsx from "clsx";

type color = {
    color: string
    code: string
}

const band_colors:color[] = [
    {
        color: 'black',
        code: '#000000',
    },
    {
        color: 'brown',
        code: '#804000',
    },
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
        color: 'green',
        code: '#00ff00',
    },
    {
        color: 'blue',
        code: '#0000ff',
    },
    {
        color: 'violet',
        code: '#8000ff',
    },
    {
        color: 'gray',
        code: '#808080',
    },
    {
        color: 'white',
        code: '#ffffff',
    },
]

const tolerance_colors:color[] = [
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
        color: 'black',
        code: '#000000',
    },
    {
        color: 'brown',
        code: '#804000',
    },
    {
        color: 'violet',
        code: '#8000ff',
    },
    {
        color: 'white',
        code: '#ffffff',
    },
    {
        color: 'none',
        code: '#000000',
    },
]

// ppm_colors
// "#ff0000",  // red
// "#ff8000",  // orange
// "#ffff00",  // yellow
// "#808080",  // gray
// "#804000",  // brown
// "#8000ff",  // violet

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

    const [band1, setBand1] = useState(band_colors[0].color)
    const [band2, setBand2] = useState(band_colors[0].color)
    const [band3, setBand3] = useState(band_colors[0].color)
    const [band4, setBand4] = useState(band_colors[0].color)
    const [band5, setBand5] = useState(tolerance_colors[0].color)
    const [band6, setBand6] = useState(ppm_colors[0].color)

    return (
        <div>
            <div className="flex items-center">

                <div className="flex z-10 border border-slate-700 rounded-3xl">
                    <div className={'w-10 h-40 bg-amber-200 rounded-l-3xl'}/>
                    <div className={clsx(`w-10 h-40 border-x border-slate-500`)} style={{backgroundColor: band1}}/>  {/*Code*/}
                    <div className={'w-10 h-40 bg-amber-200 rounded-r-3xl'}/>
                </div>

                <div className="flex z-40 border border-y-slate-700">
                    <div className={'w-5 h-20 bg-amber-200'}/>
                    <div className={'w-10 h-20 border-x border-slate-500'} style={{backgroundColor: band2}}/>  {/*Code*/}
                    <div className={'w-5 h-20 bg-amber-200'}/>
                    <div className={'w-10 h-20 border-x border-slate-500'} style={{backgroundColor: band3}}/>  {/*Code*/}
                    <div className={'w-5 h-20 bg-amber-200'}/>
                    <div className={'w-10 h-20 border-x border-slate-500'} style={{backgroundColor: band4}}/>  {/*Code*/}
                    <div className={'w-5 h-20 bg-amber-200'}/>
                    <div className={'w-10 h-20 border-x border-slate-500'} style={{backgroundColor: band5}}/>  {/*Code*/}
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

                {/*Band 4*/}
                <div className="flex gap-2 items-center w-fit">

                    <label htmlFor="band1">
                        Band 4
                    </label>

                    <select
                        name={'band1'}
                        className={'p-2 rounded-xl bg-white border border-slate-200'}
                        onChange={(e) =>
                            setBand4(
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


        </div>
    )
}

export default index