import '@testing-library/jest-dom'
import { render, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { MockedProvider } from '@apollo/client/testing'
import { PokemonList } from "."
import { GET_POKEMON_MOCK } from '../../testing/mocks'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

describe('PokemonList', () => {
  const user = userEvent.setup()

  it('Renders properly', async () => {
    const { getAllByRole, getByText, getByRole } = render(
      <MemoryRouter>
        <MockedProvider mocks={GET_POKEMON_MOCK} addTypename={false}>
          <PokemonList />
        </MockedProvider>
      </MemoryRouter>
    )

    expect(getByRole('textbox')).toHaveAttribute('placeholder', 'Search by name, type, or number')
    expect(getByText(/Loading.../)).toBeVisible()
    await waitFor(() => expect(getAllByRole('link')).toHaveLength(10))
  })

  it('Filters the pokemon list', async () => {
    const { getAllByRole, getByText, getByRole } = render(
      <BrowserRouter>
        <MockedProvider mocks={GET_POKEMON_MOCK} addTypename={false}>
          <PokemonList />
        </MockedProvider>
      </BrowserRouter>
    )

    expect(getByText(/Loading.../)).toBeVisible()
    await waitFor(() => expect(getAllByRole('link')).toHaveLength(10))

    await user.type(getByRole('textbox'), 'tle')

    await waitFor(() => expect(getAllByRole('link')).toHaveLength(2))
  })
})
