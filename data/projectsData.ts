interface IProject {
  id: string
  title: string
  description: string
  href?: string
  image?: string
  tags?: string[]
}

export const projectsData: IProject[] = [
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
]
