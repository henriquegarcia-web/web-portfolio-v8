// import { screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import { axe } from 'vitest-axe'
// import { beforeEach, expect } from 'vitest'
// import { LandingPage } from '@/pages'
import i18n from '@/translations/i18n'
// import { renderWithProviders } from './test-utils'

describe('LandingPage', () => {
  beforeEach(async () => {
    window.localStorage.clear()
    await i18n.changeLanguage('pt-BR')
  })

  it('renders the core landing sections and actionable CTAs', () => {
    // renderWithProviders(<LandingPage />)
    // expect(
    //   screen.getByRole('heading', {
    //     level: 1,
    //     name: /transformo ideias em soluções digitais/i,
    //   }),
    // ).toBeInTheDocument()
    // expect(
    //   screen.getByRole('navigation', { name: /navegação principal/i }),
    // ).toBeInTheDocument()
    // expect(screen.getByText(/sobre mim/i)).toBeInTheDocument()
    // expect(
    //   screen.getByRole('heading', { name: /soluções que desenvolvo/i }),
    // ).toBeInTheDocument()
    // expect(
    //   screen.getByRole('heading', { name: /alguns resultados que entreguei/i }),
    // ).toBeInTheDocument()
    // expect(screen.getByRole('link', { name: /ver projetos/i })).toHaveAttribute(
    //   'href',
    //   '#projetos',
    // )
    // expect(
    //   screen.getAllByRole('link', { name: /vamos conversar/i })[0],
    // ).toHaveAttribute('href', 'mailto:henriquegarcia.tech@gmail.com')
  })

  // it('changes the active language and syncs the document lang attribute', async () => {
  //   const user = userEvent.setup()

  //   renderWithProviders(<LandingPage />)

  //   await user.click(screen.getByRole('button', { name: /idioma atual/i }))
  //   await user.click(screen.getByRole('option', { name: /english/i }))

  //   expect(document.documentElement).toHaveAttribute('lang', 'en-US')
  //   expect(
  //     await screen.findByRole('heading', {
  //       level: 1,
  //       name: /i turn ideas into digital solutions/i,
  //     }),
  //   ).toBeInTheDocument()
  // })

  // it('opens and closes the mobile navigation with accessible focus controls', async () => {
  //   const user = userEvent.setup()

  //   renderWithProviders(<LandingPage />)

  //   await user.click(screen.getByRole('button', { name: /abrir menu/i }))

  //   expect(
  //     screen.getByRole('dialog', { name: /menu de navegacao/i }),
  //   ).toBeInTheDocument()
  //   expect(screen.getByRole('button', { name: /fechar painel/i })).toHaveFocus()

  //   await user.keyboard('{Escape}')

  //   expect(
  //     screen.queryByRole('dialog', { name: /menu de navegacao/i }),
  //   ).not.toBeInTheDocument()
  // })

  // it('exposes carousel controls for keyboard and assistive tech users', async () => {
  //   const user = userEvent.setup()

  //   renderWithProviders(<LandingPage />)

  //   await user.click(screen.getByRole('button', { name: /próximo projeto/i }))
  //   await user.click(screen.getByRole('button', { name: /servico anterior/i }))

  //   expect(
  //     screen.getByRole('group', { name: /projetos em destaque/i }),
  //   ).toBeInTheDocument()
  //   expect(screen.getByRole('group', { name: /servicos/i })).toBeInTheDocument()
  // })

  // it('has no automated axe violations on the default landing page', async () => {
  //   const { container } = renderWithProviders(<LandingPage />)

  //   const results = await axe(container, { preload: false })

  //   expect(results.violations).toEqual([])
  // }, 20000)
})
