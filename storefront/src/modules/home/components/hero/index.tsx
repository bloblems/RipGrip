import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="relative h-[50vh] w-full border-b border-ui-border-base bg-ui-bg-subtle flex items-center justify-center overflow-hidden">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-opacity-50" /> 
      <div className="relative z-10 text-center space-y-6 px-4">
        <Heading level="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          The RIP GRIP
        </Heading>
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
          Elevate your performance with unmatched control and comfort. <br />
          The RIP GRIP: Your ultimate advantage in any sport.
        </p>
        <Link href="/products/ripgrip" passHref legacyBehavior>
          <Button variant="primary" size="large" className="w-full sm:w-auto px-8">
            Buy now
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero

