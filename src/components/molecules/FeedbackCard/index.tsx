// ================== IMPORTS

import * as S from './styles'
import { FaQuoteLeft } from 'react-icons/fa'

import { Image, Typography } from '@/components/atoms'
import type { IFeedback } from '@/constants/feedbacks'
import { useAppTranslation } from '@/hooks/useAppTranslation'

// ================== COMPONENT TYPES

interface IFeedbackCard {
  feedback: IFeedback
}

// ================== COMPONENT

const FeedbackCard = ({ feedback }: IFeedbackCard) => {
  const { t } = useAppTranslation()

  return (
    <S.FeedbackCard>
      <S.FeedbackCardIcon>
        <FaQuoteLeft />
      </S.FeedbackCardIcon>
      <Typography variant="text" as="p">
        {t(`components.feedbacks.${feedback.id}.message`)}
      </Typography>
      <S.FeedbackDetailsWrapper>
        <S.FeedbackProfilePicture>
          <Image src={feedback.profilePicture} alt="" width={50} height={50} />
        </S.FeedbackProfilePicture>
        <S.FeedbackDetails>
          <Typography variant="text" as="p">
            {t(`components.feedbacks.${feedback.id}.name`)}
          </Typography>
          <Typography variant="text" as="p">
            {t(`components.feedbacks.${feedback.id}.role`)}
          </Typography>
        </S.FeedbackDetails>
      </S.FeedbackDetailsWrapper>
    </S.FeedbackCard>
  )
}

export default FeedbackCard
