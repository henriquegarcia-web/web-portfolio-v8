import {
  AiOutlineSearch,
  AiOutlineUnorderedList,
  AiOutlineCode,
  AiOutlineRocket,
  AiOutlineLineChart,
} from 'react-icons/ai'

export interface IProcess {
  id: string
  icon: React.ReactNode
  color: string
}

export const processes = [
  {
    id: 'step1',
    icon: <AiOutlineSearch />,
    color: 'rgba(76, 60, 144)',
  },
  {
    id: 'step2',
    icon: <AiOutlineUnorderedList />,
    color: 'rgba(54, 57, 136)',
  },
  {
    id: 'step3',
    icon: <AiOutlineCode />,
    color: 'rgba(37, 29, 164)',
  },
  {
    id: 'step4',
    icon: <AiOutlineRocket />,
    color: 'rgba(37, 98, 102)',
  },
  {
    id: 'step5',
    icon: <AiOutlineLineChart />,
    color: 'rgba(23, 105, 69)',
  },
] satisfies IProcess[]
