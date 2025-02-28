import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { ExternalLink, ExternalLinkIcon, ShareIcon } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProductCards() {
  return (
    <div className="max-w-[1000px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[400px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Cook Book
          </p>
          <h4 className="text-white font-medium text-large">
            A recipe app for everyone
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/images/cook-book.png"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-8 h-[400px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Addis Path Trailer Rentals
          </p>
          <h4 className="text-white font-medium text-large">
            A trailer rental company based on Atlanta
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/images/addis-path.png"
        />
      </Card>
      {/* <Card className="col-span-12 sm:col-span-4 h-[400px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Supercharged
          </p>
          <h4 className="text-white font-medium text-large">
            Creates beauty like a beast
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://heroui.com/images/card-example-2.jpeg"
        />
      </Card> */}
      <Card className="w-full h-[400px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">New</p>
          <h4 className="text-black font-medium text-2xl">Gaming Hub</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="/images/gaming-hub.png"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-end gap-3">
          {/* <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button> */}
          <FaGithub className="text-2xl text-black" />
          <FaExternalLinkAlt className="text-xl font text-black" />
        </CardFooter>
      </Card>
      <Card className="w-full h-[400px] col-span-12 sm:col-span-7">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">WindBnB</p>
          <h4 className="text-white/90 font-medium text-xl">
            Your goto place for vacation
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="/images/windbnb.png"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-end gap-3">
          {/* <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button> */}
          <FaGithub className="text-2xl text-black" />
          <FaExternalLinkAlt className="text-xl font text-black" />
        </CardFooter>
      </Card>
    </div>
  );
}
