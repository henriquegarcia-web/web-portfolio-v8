export interface IFeedback {
  id: string
  profilePicture: string
}

export const feedbacks = [
  {
    id: 'feedback1',
    profilePicture: '/feedbacks/profile_1.png',
  },
  {
    id: 'feedback2',
    profilePicture: '/feedbacks/profile_2.png',
  },
  {
    id: 'feedback3',
    profilePicture: '/feedbacks/profile_3.png',
  },
] satisfies IFeedback[]
