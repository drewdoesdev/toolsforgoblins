interface IProject {
  title: string
  description: string
  href?: string
  imgSrc?: string
  tags?: string[]
}

const projectsData: IProject[] = [
  // TODO: Come back and fill this in with relevent suff.
  {
    title: 'Ubiquity Dice Roller',
    description: `Online dice rollar for the Ubiquity System.  Used for games such as Hollow Earth Expedition, 
    Desolation, and All for One: Regime Diabolique.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.ubiquitydiceroller.com/',
  },
  {
    title: 'Dice for Goblins',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
