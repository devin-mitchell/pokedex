import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { PokemonListItem } from "."
import { POKEMON_MOCK } from "../../testing/mocks"

describe('PokemonListItem', () => {
  it('renders properly', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <PokemonListItem {...POKEMON_MOCK} />
      </MemoryRouter>
    )

    expect(getByRole('img', { name: POKEMON_MOCK.name })).toBeVisible()
    expect(getByRole('heading', { name: 'Beedrill - 015' })).toBeTruthy()
    expect(getByRole('link', { name: 'Beedrill Beedrill - 015 Bug / Poison' })).toBeVisible()
  })
})

