import { createUseStyles } from "react-jss"
import { useParams } from "react-router-dom"
import { useGetPokemon } from "../../hooks/useGetPokemon"
import { DetailGroup } from "../DetailGroup"
import { Modal } from "../Modal"

export const PokemonModal = () => {
  const classes = useStyles();
  const { name } = useParams()
  const { data, loading } = useGetPokemon({ name })

  if (loading) {
    return <div>...Loading</div>
  }

  const { classification,
    fleeRate,
    height,
    image,
    maxCP,
    maxHP,
    name: pokeName,
    number,
    resistant,
    types,
    weaknesses,
    weight
  } = data.pokemon

  return (
    <Modal>
      <div className={classes.root}>
        <img className={classes.image} src={image} alt={name} />
        <div className={classes.name}>
          <h1>{pokeName} - {number}</h1>
        </div>
        <div className={classes.stats}>
          <DetailGroup detail={'Classification'} value={classification} />
          <DetailGroup detail={'Height'} value={[`min: ${height.minimum}`, `max: ${height.maximum}`]} />
          <DetailGroup detail={'Weight'} value={[`min: ${weight.minimum}`, `max: ${weight.maximum}`]} />
          <DetailGroup detail={'maxCP'} value={maxCP} />
          <DetailGroup detail={'maxHP'} value={maxHP} />
          <DetailGroup detail={'Flee Rate'} value={fleeRate} />
          <DetailGroup detail={'Flee Rate'} value={fleeRate} />
          <DetailGroup detail={'Resistant To'} value={resistant} />
          <DetailGroup detail={'Types'} value={types} />
          <DetailGroup detail={'Weaknesses'} value={weaknesses} />
        </div>
      </div>
    </Modal >
  )
}


const useStyles = createUseStyles(
  {
    'root': {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    'name': {
      display: 'flex',
      fontSize: '28px',
      borderBottom: '2px solid white',
      marginBottom: '2rem',

    },
    'image': {
      height: '12rem',
      maxHeight: '500px',
      borderRadius: '1rem',
    },
    'stats': {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '1rem',
      border: '2px solid white',
      overflow: 'scroll',
    },
    'title': {
      fontSize: '24px',
      color: 'white',
    },
  },
  { name: 'PokemonModal' }
)
