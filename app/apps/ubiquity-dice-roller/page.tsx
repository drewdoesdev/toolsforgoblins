import { UbiquityDiceRoller } from '@/ubiquity-dice-roller/UbiquityDiceRoller'
import { genPageMetadata } from 'app/seo'
import { projectsData } from '@/data/projectsData'

const projectMetadata = projectsData.find((project) => project.id === 'ubiquity-dice-roller')

export const metadata = genPageMetadata({
  title: projectMetadata?.title ?? '',
  description: projectMetadata?.description ?? '',
  image: projectMetadata?.image ?? '',
  tags: projectMetadata?.tags ?? [],
})

export default function UbiquityDiceRollerPage() {
  return <UbiquityDiceRoller />
}
