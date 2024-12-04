interface IApp {
  id: string
  title: string
  description: string
  href?: string
  image?: string
  tags?: string[]
}

export const projectsData: IApp[] = [
  // TODO: Come back and fill this in with relevent suff.
  {
    id: 'ubiquity-dice-roller',
    title: 'Ubiquity Dice Roller',
    description: `Online dice rollar for the Ubiquity System.  Used for games such as Hollow Earth: Expedition, 
    Desolation, and All for One: Regime Diabolique.`,
    image: '/static/images/hero-images/ubiquity-dice-roller.png',
    href: '/apps/ubiquity-dice-roller',
    tags: [
      'hollow-earth-expedition',
      'desolation',
      'all-for-one-regime-diabolique',
      'ubiquity',
      'dice-roller',
    ],
  },
  {
    id: 'random-name-generators',
    title: 'Random Name Generators',
    description: 'A collection of random name generators to spark your imagination.',
    image: '/static/images/digital-art-galaxy.webp',
    href: '/apps/random-name-generators',
    tags: ['random-name-generator'],
  },
]
