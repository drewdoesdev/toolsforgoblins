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
    description: `Online dice rollar for the Ubiquity System.  Used for games such as Hollow Earth: Expedition, 
    Desolation, and All for One: Regime Diabolique.`,
    imgSrc: '/static/images/hero-images/ubiquity-dice-roller.png',
    href: 'https://www.ubiquitydiceroller.com/',
  },
]

export default projectsData
