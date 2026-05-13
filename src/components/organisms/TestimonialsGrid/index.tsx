// ================== IMPORTS

import * as S from './styles'

import { FeedbackCard } from '@/components/molecules'
import { feedbacks } from '@/constants/feedbacks'

// ================== COMPONENT

const TestimonialsGrid = () => {
  return (
    <S.TestimonialsGrid>
      {feedbacks.map((feedback) => (
        <FeedbackCard key={feedback.id} feedback={feedback} />
      ))}
    </S.TestimonialsGrid>
  )
}

export default TestimonialsGrid
