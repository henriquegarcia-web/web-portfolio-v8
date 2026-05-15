// ================== IMPORTS

import Section from '@/components/molecules/Section'
import LandingTemplate from '@/components/templates/LandingTemplate'
import { landingSections } from '@/constants/landingSections'

// ================== UTILS

const visibleLandingSections = landingSections.filter(
  (section) => section.showInNavigation,
)

const LandingPage = () => {
  return (
    <LandingTemplate>
      {visibleLandingSections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </LandingTemplate>
  )
}

export default LandingPage
