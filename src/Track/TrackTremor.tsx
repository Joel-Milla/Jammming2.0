// External component
import {Divider } from "@nextui-org/react";
import { Card } from '@tremor/react';
// Own Model
import { TrackProperties } from "../Models/Models";

function TrackTremor(properties: TrackProperties) {
    const { song } = properties
    return (
        <>
            <Card
                className="mx-auto max-w-xs"
                decoration="top"
                decorationColor="indigo"
            >
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{song.name}</p>
                <div className="flex items-center space-x-4">
                    <div>
                        <p className="text-xl text-green-500">Artist:</p>
                        <p>{song.artist}</p>
                    </div>
                    <Divider orientation="vertical" className="h-5 text-wrap" />
                    <div>
                        <p className="text-xl text-green-500">Artist:</p>
                        <p>{song.album}</p>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default TrackTremor;