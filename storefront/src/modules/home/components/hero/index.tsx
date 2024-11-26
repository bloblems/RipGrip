import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[50vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <Heading level="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold text-ui-fg-base">
          The RIP GRIP
        </Heading>
        <p className="text-ui-fg-subtle text-lg md:text-xl max-w-2xl mx-auto">
          Elevate your performance with unmatched control and comfort. <br></br>
          The RIP GRIP: Your ultimate advantage in any sport.
        </p>
        <Button variant="primary" size="large" className="w-full sm:w-auto px-8">
          Buy now
        </Button>
      </div>
    </div>
  )
}

export default Hero

