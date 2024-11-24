import { createUseStyles } from "react-jss";


type Props = {
  id: string
  name: string
  image: string
  number: string
  types: string[]
}

export const PokemonListItem = ({ types, number, name, image }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={() => console.log(`${number} clicked`)}>
      <>
        <img src={image} className={classes.image} alt={name} />
        <div>
          <h2>{name} - {number}</h2>
          <div className={classes.types}>
            {types.map((type, i) => {
              return <div key={`${number} - ${type}`} className={classes.type}>{
                i === types.length - 1 ? type : `${type} / `
              }</div>
            })}
          </div>
        </div>
      </>
    </div >
  );
};

const useStyles = createUseStyles(
  {
    root: {
      border: '2px solid transparent',
      borderTopRightRadius: '1rem',
      borderBottomRightRadius: '1rem',
      background: '#171E2b',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      width: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
      transition: 'all 300ms ease-in-out',

      '&:hover': {
        border: '2px solid #fff',
        borderLeft: '4rem solid #fff',
      }
    },
    image: {
      height: '5rem',
      width: '5rem',
      borderRadius: '50%',
      marginRight: '2rem',
    },
    types: {
      display: 'flex',
    },
    type: {
      margin: '2px',
    },
  },
  { name: 'PokemonListItem' }
);
