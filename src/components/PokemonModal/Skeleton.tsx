import { createUseStyles } from "react-jss";
import { Modal } from "../Modal"

export const Skeleton = () => {
  const classes = useStyles();

  return (
    <Modal>
      <div className={classes.root}>
        <div className={classes.image} />
        <div className={classes.name}>
        </div>
        <div className={classes.stats}>
          {Array(5).fill(null).map(() => {
            return <div className={classes.stat} />
          })}
        </div>
      </div>
    </Modal >
  )
}

const useStyles = createUseStyles(
  {
    '@keyframes skeleton-loading': {
      "0%": {
        background: 'hsl(200, 20%, 80%)',
      },
      "100%": {
        background: 'hsl(200, 20 %, 95 %)',
      },
    },
    'root': {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    'name': {
      display: 'flex',
      height: '4rem',
      width: '24rem',
      borderRadius: '1rem',
      background: 'gray',
      marginBottom: '2rem',
      animation: '$skeleton-loading 500ms infinite ease-in-out alternate',

    },
    'image': {
      height: '20rem',
      width: '20rem',
      maxHeight: '500px',
      borderRadius: '1rem',
      background: 'gray',
      marginBottom: '2rem',
      animation: '$skeleton-loading 500ms infinite ease-in-out alternate',
    },
    'stats': {
      width: '100%',
      height: '75%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '1rem',
      border: '2px solid white',
      overflow: 'scroll',
    },
    'stat': {
      width: '50%',
      height: '30px',
      background: 'gray',
      borderRadius: '1rem',
      animation: '$skeleton-loading 500ms infinite ease-in-out alternate',
    },
  },
  { name: 'PokemonModal' }
)
