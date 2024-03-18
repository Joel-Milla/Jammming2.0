// External component
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
// Own Model
import { TrackProperties } from "../Models/Models";

function TrackNextUI(properties: TrackProperties) {
    const { song } = properties
    return (
        <>
            <Card>
                <CardHeader className="flex gap-3">
                    <h1 className=" text-3xl">{song.name}</h1>
                </CardHeader>
                <Divider />
                <CardBody>
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
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href="https://open.spotify.com/"
                    >
                        Visit the song.
                    </Link>
                </CardFooter>
            </Card>
        </>
    )
}

export default TrackNextUI;