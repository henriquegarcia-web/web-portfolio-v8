export interface IFeedback {
  id: string
  name: string
  profilePicture: string
}

export const feedbacks = [
  {
    id: 'feedback1',
    name: 'Juliana Carvalho',
    profilePicture: '/profiles/profile_1.png',
  },
  {
    id: 'feedback2',
    name: 'Rafael Mendes',
    profilePicture: '/profiles/profile_2.png',
  },
  {
    id: 'feedback3',
    name: 'Camila Vieira',
    profilePicture: '/profiles/profile_3.png',
  },
] satisfies IFeedback[]
